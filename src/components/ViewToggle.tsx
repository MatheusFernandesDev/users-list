import { ToggleButton } from 'react-aria-components';
import styled from 'styled-components';
import { ViewMode } from '../types/IUser';

const ToggleContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const StyledToggleButton = styled(ToggleButton) <{ $isSelected: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme, $isSelected }) =>
        $isSelected ? theme.colors.text.inverse : theme.colors.text.secondary};
  background: ${({ theme, $isSelected }) =>
        $isSelected ? theme.colors.gradient.primary : 'transparent'};
  transition: all ${({ theme }) => theme.transitions.fast};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  position: relative;
  overflow: hidden;

  /* Efeito de shimmer */
  ${({ $isSelected, theme }) => $isSelected && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        ${theme.colors.text.inverse}20,
        transparent
      );
      animation: shimmer 2s infinite;
    }

    @keyframes shimmer {
      to {
        left: 100%;
      }
    }
  `}

  &:hover {
    background: ${({ theme, $isSelected }) =>
        $isSelected ? theme.colors.primaryDark : theme.colors.backgroundAlt};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

interface ViewToggleProps {
    viewMode: ViewMode;
    onViewModeChange: (mode: ViewMode) => void;
}

/**
 * Componente de alternância de visualização (Card/Table)
 * Design moderno com cores da Sensedia
 * Usa React Aria Components para garantir acessibilidade
 * 
 * @param viewMode - Modo de visualização atual
 * @param onViewModeChange - Callback para mudar o modo de visualização
 */
export const ViewToggle = ({ viewMode, onViewModeChange }: ViewToggleProps) => {
    return (
        <ToggleContainer role="group" aria-label="Alternar visualização">
            <StyledToggleButton
                isSelected={viewMode === 'card'}
                onChange={() => onViewModeChange('card')}
                $isSelected={viewMode === 'card'}
                aria-label="Visualização em cards"
            >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Cards
            </StyledToggleButton>

            <StyledToggleButton
                isSelected={viewMode === 'table'}
                onChange={() => onViewModeChange('table')}
                $isSelected={viewMode === 'table'}
                aria-label="Visualização em tabela"
            >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Tabela
            </StyledToggleButton>
        </ToggleContainer>
    );
};