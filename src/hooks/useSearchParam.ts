import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

/**
 * Hook customizado para gerenciar o termo de busca via URL
 * Sincroniza o estado de busca com os query parameters da URL
 * 
 * @returns Array com o termo de busca atual e função para atualizá-lo
 * 
 * @example
 * const [searchTerm, setSearchTerm] = useSearchParam();
 * setSearchTerm('João'); // Atualiza a URL para ?search=João
 */
export const useSearchParam = (): [string, (value: string) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const searchTerm = searchParams.get('search') || '';
  
  const setSearchTerm = useCallback(
    (value: string) => {
      if (value) {
        setSearchParams({ search: value });
      } else {
        setSearchParams({});
      }
    },
    [setSearchParams]
  );
  
  return [searchTerm, setSearchTerm];
};