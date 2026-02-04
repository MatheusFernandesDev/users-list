import { describe, it, expect } from 'vitest';
import { filterUsersByName } from '../utils/filterUsers';
import { mockUsers } from '../tests/mockData';

describe('filterUsersByName', () => {
    it('deve retornar todos os usuários quando o termo de busca está vazio', () => {
        const result = filterUsersByName(mockUsers, '');
        expect(result).toEqual(mockUsers);
    });

    it('deve retornar todos os usuários quando o termo de busca é apenas espaços', () => {
        const result = filterUsersByName(mockUsers, '   ');
        expect(result).toEqual(mockUsers);
    });

    it('deve filtrar usuários por nome (case insensitive)', () => {
        const result = filterUsersByName(mockUsers, 'leanne');
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Leanne Graham');
    });

    it('deve filtrar usuários com busca parcial', () => {
        const result = filterUsersByName(mockUsers, 'er');
        // Deve encontrar "Ervin Howell"
        expect(result.length).toBeGreaterThan(0);
        expect(result.some((user) => user.name.includes('Ervin'))).toBe(true);
    });

    it('deve retornar array vazio quando nenhum usuário corresponde', () => {
        const result = filterUsersByName(mockUsers, 'xyz123');
        expect(result).toHaveLength(0);
    });

    it('deve ignorar espaços extras no termo de busca', () => {
        const result = filterUsersByName(mockUsers, '  leanne  ');
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Leanne Graham');
    });

    it('deve funcionar com letras maiúsculas', () => {
        const result = filterUsersByName(mockUsers, 'LEANNE');
        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Leanne Graham');
    });
});