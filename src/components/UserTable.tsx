import { Table, TableHeader, TableBody, Column, Row, Cell } from 'react-aria-components';
import styled from 'styled-components';
import { User } from '../types/IUser';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  animation: fadeIn ${({ theme }) => theme.transitions.normal};
`;

const StyledTable = styled(Table)`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

const StyledTableHeader = styled(TableHeader)`
  background: ${({ theme }) => theme.colors.gradient.primary};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const StyledColumn = styled(Column)`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  text-align: left;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.inverse};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;

  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.borderRadius.xl};
  }

  &:last-child {
    border-top-right-radius: ${({ theme }) => theme.borderRadius.xl};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: -2px;
  }
`;

const StyledRow = styled(Row)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  transition: all ${({ theme }) => theme.transitions.fast};
  background: ${({ theme }) => theme.colors.surface};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    transform: scale(1.01);
  }

  &:last-child {
    border-bottom: none;
    
    & td:first-child {
      border-bottom-left-radius: ${({ theme }) => theme.borderRadius.xl};
    }
    
    & td:last-child {
      border-bottom-right-radius: ${({ theme }) => theme.borderRadius.xl};
    }
  }

  &[data-focused] {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: -2px;
    background: ${({ theme }) => theme.colors.surfaceHover};
  }
`;

const StyledCell = styled(Cell)`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  word-break: break-word;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  
  &:first-child {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  }
`;

const EmptyState = styled.div`
  padding: ${({ theme }) => theme.spacing['3xl']};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  svg {
    width: 64px;
    height: 64px;
    margin: 0 auto ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
  
  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

interface UserTableProps {
  users: User[];
}

/**
 * Componente de tabela para exibir usuários
 * Design moderno com cores da Sensedia
 * Usa React Aria Components para garantir acessibilidade completa
 * 
 * @param users - Array de usuários a serem exibidos
 */
export const UserTable = ({ users }: UserTableProps) => {
  if (users.length === 0) {
    return (
      <TableContainer>
        <EmptyState>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h3>Nenhum usuário encontrado</h3>
          <p>Tente ajustar os filtros de busca</p>
        </EmptyState>
      </TableContainer>
    );
  }

  return (
    <TableContainer>
      <StyledTable aria-label="Tabela de usuários">
        <StyledTableHeader>
          <StyledColumn isRowHeader>Nome</StyledColumn>
          <StyledColumn>Email</StyledColumn>
          <StyledColumn>Telefone</StyledColumn>
        </StyledTableHeader>

        <TableBody>
          {users.map((user) => (
            <StyledRow key={user.id}>
              <StyledCell>
                {user.name}
              </StyledCell>
              <StyledCell>{user.email}</StyledCell>
              <StyledCell>{user.phone}</StyledCell>
            </StyledRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};