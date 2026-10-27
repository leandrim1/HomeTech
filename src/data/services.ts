import {
  Cable,
  Camera,
  Home,
  Laptop,
  Smartphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export type ServiceSlug =
  | 'assistencia-smartphones'
  | 'celulares-acessorios'
  | 'informatica-acessorios'
  | 'seguranca-residencial'
  | 'automacao'
  | 'solucoes-rurais';

export interface Service {
  slug: ServiceSlug;
  /** Short label used by the category navigation on the services page. */
  shortTitle: string;
  title: string;
  /** One-line summary shown on the home page cards. */
  summary: string;
  /** Longer copy shown on the services page. */
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  /** Concrete things the store handles in this category. */
  applications: string[];
  /** What the customer gets — deliberately phrased without unverified promises. */
  benefits: string[];
  /** Pre-filled WhatsApp message for this category. */
  whatsappMessage: string;
}

/**
 * The six categories advertised on the store front in Patos de Minas.
 * Copy stays factual: no repair deadlines, warranty terms, part origins or
 * certifications are claimed, because none were confirmed by the business.
 */
export const services: Service[] = [
  {
    slug: 'assistencia-smartphones',
    shortTitle: 'Assistência avançada',
    title: 'Assistência avançada em smartphones',
    summary:
      'Diagnóstico e manutenção de smartphones, com atenção aos detalhes e foco na qualidade do serviço.',
    description:
      'Nosso carro-chefe. Avaliamos o aparelho com calma para entender o que está acontecendo antes de propor qualquer serviço, e explicamos a situação em linguagem simples para que você decida com segurança. Atendemos aparelhos iOS e Android das principais marcas do mercado.',
    image: '/images/servicos/assistencia-smartphones.svg',
    imageAlt:
      'Ilustração de bancada de assistência técnica com smartphone aberto, placa, bateria e ferramentas de precisão',
    icon: Wrench,
    applications: [
      'Avaliação técnica de aparelhos iOS e Android',
      'Problemas de tela, toque e imagem',
      'Falhas de carregamento e bateria',
      'Dificuldades com áudio, câmera e conectividade',
      'Aparelhos que não ligam ou reiniciam sozinhos',
      'Orientação sobre backup antes do serviço',
    ],
    benefits: [
      'Avaliação cuidadosa antes de qualquer intervenção',
      'Explicação transparente do que foi encontrado',
      'Orçamento apresentado antes da execução',
      'Acompanhamento próximo durante o atendimento',
    ],
    whatsappMessage:
      'Olá! Gostaria de falar sobre assistência técnica para o meu smartphone.',
  },
  {
    slug: 'celulares-acessorios',
    shortTitle: 'Celulares e acessórios',
    title: 'Celulares e acessórios',
    summary:
      'Celulares e acessórios para acompanhar sua rotina, conectar pessoas e facilitar o dia a dia.',
    description:
      'Trabalhamos com aparelhos e com os acessórios que fazem diferença no uso diário: proteção, energia, áudio e conectividade. Nossa equipe ajuda a comparar as opções disponíveis na loja e a escolher o que realmente combina com o seu uso e com o seu orçamento.',
    image: '/images/servicos/celulares-acessorios.svg',
    imageAlt: 'Ilustração de smartphones modernos acompanhados de fone sem fio e cabo trançado',
    icon: Smartphone,
    applications: [
      'Smartphones de diferentes faixas de preço',
      'Capas, películas e proteção de tela',
      'Carregadores, cabos e power banks',
      'Fones com e sem fio',
      'Suportes, adaptadores e cartões de memória',
      'Acessórios para uso automotivo',
    ],
    benefits: [
      'Orientação para escolher conforme o seu uso',
      'Comparação entre as opções disponíveis na loja',
      'Atendimento presencial para tirar dúvidas',
      'Possibilidade de ver e testar o produto antes de levar',
    ],
    whatsappMessage: 'Olá! Gostaria de saber sobre celulares e acessórios disponíveis na HomeTech.',
  },
  {
    slug: 'informatica-acessorios',
    shortTitle: 'Informática',
    title: 'Informática e acessórios',
    summary:
      'Equipamentos e acessórios para melhorar sua produtividade, conectividade e experiência digital.',
    description:
      'Do home office ao escritório, reunimos equipamentos e periféricos que resolvem o dia a dia: armazenamento, conectividade, conforto de uso e organização da estação de trabalho. Conte com a gente para entender o que faz sentido para a sua rotina antes de investir.',
    image: '/images/servicos/informatica-acessorios.svg',
    imageAlt: 'Ilustração de monitor com painel de dados, teclado, mouse e armazenamento externo',
    icon: Laptop,
    applications: [
      'Periféricos: teclados, mouses e headsets',
      'Armazenamento externo e pendrives',
      'Cabos, hubs e adaptadores',
      'Roteadores e equipamentos de rede',
      'Suportes e organização de mesa',
      'Acessórios para notebooks e tablets',
    ],
    benefits: [
      'Indicação conforme o equipamento que você já usa',
      'Apoio para resolver problemas de conectividade',
      'Atendimento para uso pessoal e profissional',
      'Produtos para ver de perto na loja',
    ],
    whatsappMessage: 'Olá! Gostaria de informações sobre produtos de informática e acessórios.',
  },
  {
    slug: 'seguranca-residencial',
    shortTitle: 'Segurança',
    title: 'Segurança residencial',
    summary:
      'Soluções para acompanhar e proteger seus ambientes, com tecnologias voltadas à segurança e ao monitoramento.',
    description:
      'Ajudamos você a entender quais equipamentos fazem sentido para o seu imóvel — residência, comércio ou ponto de apoio — e como acompanhar os ambientes pelo celular. A conversa começa entendendo o espaço, a rotina e o que você precisa visualizar.',
    image: '/images/servicos/seguranca-residencial.svg',
    imageAlt:
      'Ilustração de câmera de segurança apontada para uma residência, com painel de monitoramento ao lado',
    icon: Camera,
    applications: [
      'Câmeras para ambientes internos e externos',
      'Acompanhamento remoto pelo celular',
      'Equipamentos para residências e comércios',
      'Interfones e controle de acesso',
      'Sensores e alarmes',
      'Avaliação do que o ambiente exige',
    ],
    benefits: [
      'Conversa inicial para entender o ambiente',
      'Indicação proporcional à necessidade real',
      'Explicação sobre como o acompanhamento funciona',
      'Suporte para dúvidas depois da instalação',
    ],
    whatsappMessage: 'Olá! Gostaria de falar sobre soluções de segurança residencial.',
  },
  {
    slug: 'automacao',
    shortTitle: 'Automação',
    title: 'Automação',
    summary: 'Tecnologia para tornar ambientes mais inteligentes, práticos e conectados.',
    description:
      'Automação não precisa ser complicada nem começar grande. Mostramos o que é possível fazer com iluminação, tomadas, acionamentos e assistentes conectados, e ajudamos a montar um conjunto que você consiga usar no dia a dia — começando pelo que mais incomoda hoje.',
    image: '/images/servicos/automacao.svg',
    imageAlt:
      'Ilustração de casa moderna com iluminação inteligente conectada a dispositivos e controle pelo celular',
    icon: Home,
    applications: [
      'Iluminação inteligente e cenas de ambiente',
      'Tomadas e interruptores conectados',
      'Acionamento de portões e cortinas',
      'Assistentes e centrais de controle',
      'Integração com o celular',
      'Projetos que podem crescer por etapas',
    ],
    benefits: [
      'Começo simples, com espaço para ampliar',
      'Demonstração do funcionamento na loja',
      'Orientação sobre compatibilidade entre dispositivos',
      'Foco no que facilita a sua rotina',
    ],
    whatsappMessage: 'Olá! Gostaria de saber mais sobre automação para a minha casa ou empresa.',
  },
  {
    slug: 'solucoes-rurais',
    shortTitle: 'Soluções rurais',
    title: 'Soluções rurais',
    summary:
      'Tecnologia para apoiar a conectividade, o monitoramento e as necessidades de propriedades rurais.',
    description:
      'Distância e sinal fraco são a realidade de muita propriedade da região. Trabalhamos com soluções voltadas a levar conectividade e acompanhamento para áreas afastadas da sede, sempre partindo de uma conversa sobre a distância, o relevo e o que precisa ser monitorado.',
    image: '/images/servicos/solucoes-rurais.svg',
    imageAlt:
      'Ilustração de propriedade rural com torre de conectividade, sensor de campo e tablet com dados',
    icon: Cable,
    applications: [
      'Conectividade entre sede, galpões e currais',
      'Monitoramento de áreas afastadas',
      'Equipamentos para ambientes externos',
      'Ampliação de sinal em áreas abertas',
      'Acompanhamento remoto pelo celular',
      'Avaliação da distância e do terreno',
    ],
    benefits: [
      'Conversa sobre a realidade da propriedade',
      'Indicação conforme distância e relevo',
      'Atendimento de quem conhece a região',
      'Soluções que podem ser implantadas por etapas',
    ],
    whatsappMessage: 'Olá! Gostaria de falar sobre soluções tecnológicas para a minha propriedade rural.',
  },
];

/** Lookup helper used by the services page when a category is deep-linked. */
export function getServiceBySlug(slug: string | null | undefined): Service | undefined {
  if (!slug) return undefined;
  return services.find((service) => service.slug === slug);
}
