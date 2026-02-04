/**
 * Interface que representa um usuário da API
 * Baseada na estrutura do JSONPlaceholder
 */
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

/**
 * Tipo para o modo de visualização
 */
export type ViewMode = 'card' | 'table';