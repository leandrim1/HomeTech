export interface Review {
  name: string;
  comment: string;
  /**
   * Star rating. Only filled in when the original Google review was confirmed
   * as 5 stars; left as `null` the card shows the comment without a score so
   * the site never attributes a rating that was not informed.
   */
  rating: number | null;
  source: 'Google';
}

/**
 * Depoimentos reais publicados por clientes no Google.
 * Não adicione comentários fictícios aqui — apenas avaliações verificáveis.
 */
export const reviews: Review[] = [
  {
    name: 'Kelly Silva',
    comment: 'Trocaram minha tela do celular no mesmo dia, atendimento diferenciado.',
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Wendell Nascentes',
    comment: 'Atendimento ótimo e serviço de alta qualidade.',
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Yvan Figueiredo',
    comment: 'Muito top a loja o atendimento e incrível.',
    rating: 5,
    source: 'Google',
  },
];
