import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { useUsers } from '../hooks/useUsers';
import { useSearchParam } from '../hooks/useSearchParam';
import { filterUsersByName } from '../utils/filterUsers';
import { ViewMode } from '../types/IUser';
import { SearchInput } from '../components/SearchInput';
import { ViewToggle } from '../components/ViewToggle';
import { UserGrid } from '../components/UserGrid';
import { UserTable } from '../components/UserTable';
import { Loading, ErrorState } from '../components/LoadingAndError';

const Container = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.xl};
  }
`;

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h1`
  background: ${({ theme }) => theme.colors.gradient.mixed};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  max-width: 600px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const ResultCount = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  display: inline-flex;
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const Badge = styled.span`
  background: ${({ theme }) => theme.colors.text.inverse};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-left: ${({ theme }) => theme.spacing.xs};
`;

/**
 * Página principal da aplicação
 * Design moderno com cores da Sensedia
 * Exibe lista de usuários com busca e alternância de visualização
 */
export const UserListPage = () => {
    const { users, loading, error, refetch } = useUsers();
    const [searchTerm, setSearchTerm] = useSearchParam();
    const [viewMode, setViewMode] = useState<ViewMode>('card');

    // Filtra usuários baseado no termo de busca
    const filteredUsers = useMemo(
        () => filterUsersByName(users, searchTerm),
        [users, searchTerm]
    );

    if (loading) {
        return (
            <Container>
                <Loading />
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <ErrorState message={error} onRetry={refetch} />
            </Container>
        );
    }

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <Title>Lista de Usuários</Title>
                </TitleWrapper>
                <Subtitle>
                    Gerencie e visualize informações dos usuários de forma simples e eficiente
                </Subtitle>
            </Header>

            <Controls>
                <SearchInput
                    value={searchTerm}
                    onChange={setSearchTerm}
                    placeholder="Buscar por nome..."
                />
                <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
            </Controls>

            <ResultCount>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <Badge>{filteredUsers.length}</Badge>
                {filteredUsers.length === 1 ? 'usuário encontrado' : 'usuários encontrados'}
            </ResultCount>

            {viewMode === 'card' ? (
                <UserGrid users={filteredUsers} />
            ) : (
                <UserTable users={filteredUsers} />
            )}
        </Container>
    );
};