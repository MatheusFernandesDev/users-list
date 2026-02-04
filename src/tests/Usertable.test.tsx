import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { UserTable } from '../components/UserTable';
import { mockUsers } from '../tests/mockData';

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('UserTable', () => {
    it('deve renderizar a tabela com os cabeçalhos corretos', () => {
        renderWithTheme(<UserTable users={mockUsers} />);

        expect(screen.getByText('Nome')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Telefone')).toBeInTheDocument();
    });

    it('deve renderizar todos os usuários', () => {
        renderWithTheme(<UserTable users={mockUsers} />);

        mockUsers.forEach((user) => {
            expect(screen.getByText(user.name)).toBeInTheDocument();
            expect(screen.getByText(user.email)).toBeInTheDocument();
            expect(screen.getByText(user.phone)).toBeInTheDocument();
        });
    });

    it('deve exibir mensagem quando não há usuários', () => {
        renderWithTheme(<UserTable users={[]} />);
        expect(screen.getByText('Nenhum usuário encontrado')).toBeInTheDocument();
    });

    it('deve ter o atributo aria-label correto', () => {
        renderWithTheme(<UserTable users={mockUsers} />);
        expect(screen.getByLabelText('Tabela de usuários')).toBeInTheDocument();
    });

    it('deve renderizar o número correto de linhas', () => {
        const { container } = renderWithTheme(<UserTable users={mockUsers} />);
        // +1 para o cabeçalho
        const rows = container.querySelectorAll('tbody tr');
        expect(rows.length).toBe(mockUsers.length);
    });
});