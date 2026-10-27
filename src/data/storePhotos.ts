export interface StorePhoto {
  src: string;
  alt: string;
  /** Short caption shown under the photo in the gallery. */
  caption: string;
}

/**
 * Fotos reais da loja da HomeTech em Patos de Minas, enviadas pela empresa.
 * Somente imagens autênticas entram aqui — ilustrações de serviço ficam em
 * `public/images/servicos` e nunca são apresentadas como fotos do local.
 */
export const storePhotos: StorePhoto[] = [
  {
    src: '/images/loja/fachada-ampla.webp',
    alt: 'Fachada da loja HomeTech Soluções Avançadas, com vitrine listando os serviços e as marcas atendidas',
    caption: 'Nossa fachada na R. Maj. Gote',
  },
  {
    src: '/images/loja/interior-capas.webp',
    alt: 'Parede interna da loja com capas de celular expostas e display de películas de proteção',
    caption: 'Capas e proteção para o seu aparelho',
  },
  {
    src: '/images/loja/interior-automacao.webp',
    alt: 'Prateleiras da loja com caixas de equipamentos de áudio, segurança e automação residencial',
    caption: 'Segurança e automação em exposição',
  },
  {
    src: '/images/loja/interior-acessorios.webp',
    alt: 'Expositor de acessórios para celular ao lado de uma parede com capas organizadas',
    caption: 'Acessórios para o dia a dia',
  },
  {
    src: '/images/loja/interior-informatica.webp',
    alt: 'Expositor com acessórios de informática e nichos com equipamentos eletrônicos',
    caption: 'Informática e conectividade',
  },
  {
    src: '/images/loja/fachada-entrada.webp',
    alt: 'Entrada da loja HomeTech vista da calçada, com o letreiro iluminado acima da porta',
    caption: 'Entrada no Centro de Patos de Minas',
  },
];
