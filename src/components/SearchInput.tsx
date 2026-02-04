import { SearchField, Input, Label } from 'react-aria-components';
import styled from 'styled-components';

const StyledSearchField = styled(SearchField)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  max-width: 500px;
`;

const StyledLabel = styled(Label)`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.svg`
  position: absolute;
  left: ${({ theme }) => theme.spacing.md};
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.accent};
  pointer-events: none;
  transition: all ${({ theme }) => theme.transitions.fast};
`;

const StyledInput = styled(Input)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  padding-left: ${({ theme }) => theme.spacing['3xl']};
  border: 2px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.surface};
  transition: all ${({ theme }) => theme.transitions.normal};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.tertiary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}40;
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    background: ${({ theme }) => theme.colors.surface};
    
    & + ${SearchIcon} {
      color: ${({ theme }) => theme.colors.primary};
      transform: scale(1.1);
    }
  }

  &[aria-invalid='true'] {
    border-color: ${({ theme }) => theme.colors.error};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.error}20;
  }
`;

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

/**
 * Componente de busca acessível usando React Aria Components
 * Design moderno com cores da Sensedia
 * 
 * @param value - Valor atual do campo de busca
 * @param onChange - Callback chamado quando o valor muda
 * @param placeholder - Texto placeholder do input
 * @param label - Label do campo (para acessibilidade)
 */
export const SearchInput = ({
  value,
  onChange,
  placeholder = 'Buscar usuários...',
  label = 'Buscar usuários'
}: SearchInputProps) => {
  return (
    <StyledSearchField value={value} onChange={onChange}>
      <StyledLabel>{label}</StyledLabel>
      <InputWrapper>
        <StyledInput placeholder={placeholder} />
        <SearchIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </SearchIcon>
      </InputWrapper>
    </StyledSearchField>
  );
};