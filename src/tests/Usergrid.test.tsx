import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { UserGrid } from '../components/UserGrid';
import { mockUsers } from '../tests/mockData';

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('UserGrid', () => {
    it('deve renderizar todos os usuários em cards', () => {
        renderWithTheme(<UserGrid users={mockUsers} />);

        mockUsers.forEach((user) => {
            expect(screen.getByText(user.name)).toBeInTheDocument();
        });
    });

    it('deve exibir mensagem quando não há usuários', () => {
        renderWithTheme(<UserGrid users={[]} />);
        expect(screen.getByText('Nenhum usuário encontrado')).toBeInTheDocument();
    });

    it('deve renderizar o número correto de cards', () => {
        const { container } = renderWithTheme(<UserGrid users={mockUsers} />);
        const articles = container.querySelectorAll('article');
        expect(articles.length).toBe(mockUsers.length);
    });

    it('deve renderizar um usuário específico com todos os dados', () => {
        const user = mockUsers[0];
        renderWithTheme(<UserGrid users={[user]} />);

        expect(screen.getByText(user.name)).toBeInTheDocument();
        expect(screen.getByText(user.email)).toBeInTheDocument();
        expect(screen.getByText(user.phone)).toBeInTheDocument();
    });
});