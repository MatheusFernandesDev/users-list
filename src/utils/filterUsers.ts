import { User } from '../types/IUser';

/**
 * Filtra uma lista de usuários pelo nome
 * A busca é case-insensitive e busca por correspondência parcial
 * 
 * @param users - Array de usuários para filtrar
 * @param searchTerm - Termo de busca
 * @returns Array de usuários filtrados
 * 
 * @example
 * const filtered = filterUsersByName(users, 'João');
 */
export const filterUsersByName = (users: User[], searchTerm: string): User[] => {
  if (!searchTerm.trim()) {
    return users;
  }
  
  const normalizedSearch = searchTerm.toLowerCase().trim();
  
  return users.filter((user) =>
    user.name.toLowerCase().includes(normalizedSearch)
  );
};