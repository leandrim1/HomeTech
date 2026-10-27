export interface NavItem {
  label: string;
  to: string;
}

export const navigation: NavItem[] = [
  { label: 'Início', to: '/' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Sobre nós', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
];
