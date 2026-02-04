import { useState, useEffect } from 'react';
import { User } from '../types/IUser';
import { fetchUsers } from '../services/useService';

/**
 * Estado de retorno do hook useUsers
 */
interface UseUsersReturn {
  users: User[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Hook customizado para gerenciar o estado dos usuários
 * Realiza a busca automática na montagem do componente
 * 
 * @returns {UseUsersReturn} Estado dos usuários, loading, erro e função de refetch
 * 
 * @example
 * const { users, loading, error, refetch } = useUsers();
 */
export const useUsers = (): UseUsersReturn => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar usuários');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return {
    users,
    loading,
    error,
    refetch: loadUsers,
  };
};