import styled from 'styled-components';
import { User } from '../types/IUser';
import { UserCard } from './UserCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  padding: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

interface UserGridProps {
    users: User[];
}

/**
 * Componente de grid para exibir usuários em cards
 * Layout responsivo que se adapta ao tamanho da tela
 * 
 * @param users - Array de usuários a serem exibidos
 */
export const UserGrid = ({ users }: UserGridProps) => {
    if (users.length === 0) {
        return (
            <Grid>
                <EmptyState>Nenhum usuário encontrado</EmptyState>
            </Grid>
        );
    }

    return (
        <Grid>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </Grid>
    );
};