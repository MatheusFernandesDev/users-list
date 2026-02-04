import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { SearchInput } from '../components/SearchInput';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('SearchInput', () => {
  it('deve renderizar o componente corretamente', () => {
    const onChange = vi.fn();
    renderWithTheme(<SearchInput value="" onChange={onChange} />);

    expect(screen.getByLabelText('Buscar usuários')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Buscar usuários...')).toBeInTheDocument();
  });

  it('deve exibir o valor passado como prop', () => {
    const onChange = vi.fn();
    renderWithTheme(<SearchInput value="teste" onChange={onChange} />);

    const input = screen.getByPlaceholderText('Buscar usuários...') as HTMLInputElement;
    expect(input.value).toBe('teste');
  });

  it('deve chamar onChange quando o usuário digita', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderWithTheme(<SearchInput value="" onChange={onChange} />);

    const input = screen.getByPlaceholderText('Buscar usuários...');
    await user.type(input, 'João');

    expect(onChange).toHaveBeenCalled();
  });

  it('deve aceitar placeholder customizado', () => {
    const onChange = vi.fn();
    renderWithTheme(
      <SearchInput value="" onChange={onChange} placeholder="Digite aqui..." />
    );

    expect(screen.getByPlaceholderText('Digite aqui...')).toBeInTheDocument();
  });

  it('deve aceitar label customizada', () => {
    const onChange = vi.fn();
    renderWithTheme(
      <SearchInput value="" onChange={onChange} label="Pesquisar" />
    );

    expect(screen.getByLabelText('Pesquisar')).toBeInTheDocument();
  });
});