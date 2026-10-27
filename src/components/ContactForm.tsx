import { useId, useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { whatsappUrl } from '@/lib/whatsapp';
import { services } from '@/data/services';
import { cn } from '@/lib/cn';

export interface ContactFormValues {
  name: string;
  phone: string;
  subject: string;
  message: string;
}

type FieldName = keyof ContactFormValues;
type FieldErrors = Partial<Record<FieldName, string>>;
type Status = 'idle' | 'submitting' | 'success';

const EMPTY: ContactFormValues = { name: '', phone: '', subject: '', message: '' };

const SUBJECT_OPTIONS = [
  ...services.map((service) => service.title),
  'Outro assunto',
];

/** Accepts Brazilian landline and mobile numbers, with or without formatting. */
function isValidBrazilianPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  return digits.length === 10 || digits.length === 11;
}

/** Progressive (XX) XXXXX-XXXX masking as the visitor types. */
function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validate(values: ContactFormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Informe seu nome para que possamos falar com você.';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Informe um telefone para contato.';
  } else if (!isValidBrazilianPhone(values.phone)) {
    errors.phone = 'Telefone incompleto. Use o formato (34) 99999-9999.';
  }

  if (!values.subject) {
    errors.subject = 'Escolha o assunto do seu contato.';
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Conte um pouco mais — pelo menos 10 caracteres.';
  }

  return errors;
}

interface ContactFormProps {
  className?: string;
}

/**
 * Visual contact form for this front-end-only stage.
 *
 * It validates entirely in the browser and shows a demonstrative confirmation —
 * nothing is sent anywhere and nothing is stored. `submitContact` below is the
 * single seam to replace when a real API is added; the component already
 * handles its loading and success states.
 */
export function ContactForm({ className }: ContactFormProps) {
  const fieldId = useId();
  const [values, setValues] = useState<ContactFormValues>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (field: FieldName, raw: string) => {
    const value = field === 'phone' ? maskPhone(raw) : raw;
    const next = { ...values, [field]: value };
    setValues(next);

    // Re-validate a field only after the visitor has already left it once,
    // so errors never appear while they are still typing their first answer.
    if (touched[field]) {
      setErrors((previous) => ({ ...previous, [field]: validate(next)[field] }));
    }
  };

  const blur = (field: FieldName) => {
    setTouched((previous) => ({ ...previous, [field]: true }));
    setErrors((previous) => ({ ...previous, [field]: validate(values)[field] }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, phone: true, subject: true, message: true });

    const firstError = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstError) {
      document.getElementById(`${fieldId}-${firstError}`)?.focus();
      return;
    }

    setStatus('submitting');
    await submitContact(values);
    setStatus('success');
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setTouched({});
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div
        className={cn('surface p-8 text-center sm:p-10', className)}
        role="status"
        aria-live="polite"
      >
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
          <CheckCircle2 className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
        </span>

        <h3 className="mt-6 text-xl font-semibold text-snow">Mensagem preenchida com sucesso</h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-silver-dim">
          Obrigado, {values.name.split(' ')[0] || 'tudo certo'}! Esta é uma demonstração do
          formulário: nesta primeira etapa o site ainda não envia mensagens automaticamente. Para
          falar com a equipe agora, use o WhatsApp ou ligue para a loja.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            as="a"
            href={whatsappUrl(
              `Olá! Meu nome é ${values.name}. Assunto: ${values.subject}. ${values.message}`,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
            Enviar pelo WhatsApp
          </Button>

          <Button as="button" type="button" variant="outline" onClick={reset}>
            Preencher novamente
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={cn('surface p-6 sm:p-8', className)}
      aria-labelledby={`${fieldId}-titulo`}
    >
      <h3 id={`${fieldId}-titulo`} className="text-xl font-semibold text-snow">
        Conte o que você precisa
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-silver-dim">
        Preencha os campos abaixo e nossa equipe entende melhor o seu caso antes do atendimento.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field
          id={`${fieldId}-name`}
          label="Nome"
          error={touched.name ? errors.name : undefined}
        >
          <input
            id={`${fieldId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            enterKeyHint="next"
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
            onBlur={() => blur('name')}
            placeholder="Como podemos te chamar?"
            aria-invalid={touched.name && Boolean(errors.name)}
            aria-describedby={touched.name && errors.name ? `${fieldId}-name-erro` : undefined}
            className={inputClass(Boolean(touched.name && errors.name))}
          />
        </Field>

        <Field
          id={`${fieldId}-phone`}
          label="Telefone"
          error={touched.phone ? errors.phone : undefined}
        >
          <input
            id={`${fieldId}-phone`}
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            enterKeyHint="next"
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
            onBlur={() => blur('phone')}
            placeholder="(34) 99999-9999"
            aria-invalid={touched.phone && Boolean(errors.phone)}
            aria-describedby={touched.phone && errors.phone ? `${fieldId}-phone-erro` : undefined}
            className={inputClass(Boolean(touched.phone && errors.phone))}
          />
        </Field>

        <Field
          id={`${fieldId}-subject`}
          label="Assunto"
          error={touched.subject ? errors.subject : undefined}
          className="sm:col-span-2"
        >
          <select
            id={`${fieldId}-subject`}
            name="subject"
            value={values.subject}
            onChange={(event) => update('subject', event.target.value)}
            onBlur={() => blur('subject')}
            aria-invalid={touched.subject && Boolean(errors.subject)}
            aria-describedby={touched.subject && errors.subject ? `${fieldId}-subject-erro` : undefined}
            className={cn(inputClass(Boolean(touched.subject && errors.subject)), 'appearance-none pr-10')}
          >
            <option value="">Selecione o assunto</option>
            {SUBJECT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id={`${fieldId}-message`}
          label="Mensagem"
          error={touched.message ? errors.message : undefined}
          className="sm:col-span-2"
        >
          <textarea
            id={`${fieldId}-message`}
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => update('message', event.target.value)}
            onBlur={() => blur('message')}
            placeholder="Descreva o aparelho, o ambiente ou a dúvida que você tem."
            aria-invalid={touched.message && Boolean(errors.message)}
            aria-describedby={touched.message && errors.message ? `${fieldId}-message-erro` : undefined}
            className={cn(inputClass(Boolean(touched.message && errors.message)), 'resize-y min-h-[120px]')}
          />
        </Field>
      </div>

      <Button as="button" type="submit" size="lg" className="mt-7 w-full" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} aria-hidden="true" />
            Enviando…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
            Enviar mensagem
          </>
        )}
      </Button>

      <p className="mt-4 text-center text-xs leading-relaxed text-silver-dim/80">
        Este formulário é demonstrativo nesta primeira etapa do site e ainda não envia mensagens.
        Para falar agora com a equipe, use o WhatsApp ou ligue para a loja.
      </p>
    </form>
  );
}

function inputClass(hasError: boolean): string {
  return cn(
    'w-full rounded-xl border bg-ink/60 px-4 py-3 text-[0.95rem] text-snow placeholder:text-silver-dim/50',
    'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink-soft',
    hasError
      ? 'border-red-500/50 focus:border-red-400 focus:ring-red-500/40'
      : 'border-white/10 hover:border-white/20 focus:border-gold/60 focus:ring-gold/40',
  );
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

function Field({ id, label, error, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-silver">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-erro`} role="alert" className="mt-2 flex items-start gap-1.5 text-xs text-red-300">
          <AlertCircle className="mt-px h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Integration seam for the next stage.
 *
 * Replace the body with a `fetch` to the real endpoint — the component already
 * handles the pending and success states around it. Nothing is persisted or
 * transmitted today, by design for this front-end-only delivery.
 */
async function submitContact(values: ContactFormValues): Promise<void> {
  // TODO(etapa 2): POST para a API de contato da HomeTech.
  // await fetch('/api/contato', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(values),
  // });
  void values;
  await new Promise((resolve) => setTimeout(resolve, 650));
}
