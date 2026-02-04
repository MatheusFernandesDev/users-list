import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { UserCard } from '../components/UserCard';
import { mockUsers } from '../tests/mockData';

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('UserCard', () => {
    const user = mockUsers[0];

    it('deve renderizar o nome do usuário', () => {
        renderWithTheme(<UserCard user={user} />);
        expect(screen.getByText(user.name)).toBeInTheDocument();
    });

    it('deve renderizar o email do usuário', () => {
        renderWithTheme(<UserCard user={user} />);
        expect(screen.getByText(user.email)).toBeInTheDocument();
    });

    it('deve renderizar o telefone do usuário', () => {
        renderWithTheme(<UserCard user={user} />);
        expect(screen.getByText(user.phone)).toBeInTheDocument();
    });

    it('deve renderizar todos os ícones', () => {
        const { container } = renderWithTheme(<UserCard user={user} />);
        const svgs = container.querySelectorAll('svg');
        expect(svgs.length).toBeGreaterThan(0);
    });

    it('deve ser um elemento article para semântica correta', () => {
        const { container } = renderWithTheme(<UserCard user={user} />);
        const article = container.querySelector('article');
        expect(article).toBeInTheDocument();
    });
});