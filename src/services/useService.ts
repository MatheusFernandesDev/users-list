import { User } from '../types/IUser';

/**
 * URL base da API JSONPlaceholder
 */
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Busca todos os usuários da API
 * @returns Promise com array de usuários
 * @throws Error caso a requisição falhe
 */
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar usuários: ${response.status}`);
    }
    
    const data: User[] = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
};

/**
 * Busca um usuário específico pelo ID
 * @param id - ID do usuário
 * @returns Promise com os dados do usuário
 * @throws Error caso a requisição falhe
 */
export const fetchUserById = async (id: number): Promise<User> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar usuário: ${response.status}`);
    }
    
    const data: User = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw error;
  }
};