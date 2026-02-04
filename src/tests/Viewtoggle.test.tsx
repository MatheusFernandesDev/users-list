import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { ViewToggle } from '../components/ViewToggle';

const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('ViewToggle', () => {
    it('deve renderizar os botões de visualização', () => {
        const onViewModeChange = vi.fn();
        renderWithTheme(<ViewToggle viewMode="card" onViewModeChange={onViewModeChange} />);

        expect(screen.getByText('Cards')).toBeInTheDocument();
        expect(screen.getByText('Tabela')).toBeInTheDocument();
    });

    it('deve marcar o botão correto como selecionado (card)', () => {
        const onViewModeChange = vi.fn();
        renderWithTheme(<ViewToggle viewMode="card" onViewModeChange={onViewModeChange} />);

        const cardButton = screen.getByText('Cards').closest('button');
        expect(cardButton).toHaveAttribute('aria-pressed', 'true');
    });

    it('deve marcar o botão correto como selecionado (table)', () => {
        const onViewModeChange = vi.fn();
        renderWithTheme(<ViewToggle viewMode="table" onViewModeChange={onViewModeChange} />);

        const tableButton = screen.getByText('Tabela').closest('button');
        expect(tableButton).toHaveAttribute('aria-pressed', 'true');
    });

    it('deve chamar onViewModeChange ao clicar no botão de cards', async () => {
        const user = userEvent.setup();
        const onViewModeChange = vi.fn();
        renderWithTheme(<ViewToggle viewMode="table" onViewModeChange={onViewModeChange} />);

        const cardButton = screen.getByText('Cards');
        await user.click(cardButton);

        expect(onViewModeChange).toHaveBeenCalledWith('card');
    });

    it('deve chamar onViewModeChange ao clicar no botão de tabela', async () => {
        const user = userEvent.setup();
        const onViewModeChange = vi.fn();
        renderWithTheme(<ViewToggle viewMode="card" onViewModeChange={onViewModeChange} />);

        const tableButton = screen.getByText('Tabela');
        await user.click(tableButton);

        expect(onViewModeChange).toHaveBeenCalledWith('table');
    });

    it('deve ter os atributos de acessibilidade corretos', () => {
        const onViewModeChange = vi.fn();
        renderWithTheme(<ViewToggle viewMode="card" onViewModeChange={onViewModeChange} />);

        expect(screen.getByRole('group', { name: 'Alternar visualização' })).toBeInTheDocument();
        expect(screen.getByLabelText('Visualização em cards')).toBeInTheDocument();
        expect(screen.getByLabelText('Visualização em tabela')).toBeInTheDocument();
    });
});