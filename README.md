# 📋 Sensedia - Lista de Usuários

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.2-blue?logo=typescript)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.8-pink?logo=styled-components)
![Vitest](https://img.shields.io/badge/Vitest-1.3.1-green?logo=vitest)

Aplicação de página única (SPA) desenvolvida em React para visualização e gerenciamento de usuários, consumindo dados da API JSONPlaceholder.

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como parte do teste técnico para a vaga de **Desenvolvedor Frontend Pleno na Sensedia**. A aplicação permite visualizar uma lista de usuários com funcionalidades de busca e alternância entre visualização em cards e tabela, seguindo as melhores práticas de desenvolvimento frontend moderno.

### ✨ Funcionalidades

- ✅ Listagem de usuários da API JSONPlaceholder
- 🔍 Busca em tempo real por nome de usuário
- 🔄 Alternância entre visualização em cards e tabela
- 📱 Design totalmente responsivo
- ♿ Acessibilidade completa (WCAG 2.1)
- 🎨 Interface moderna e intuitiva
- 🔗 Persistência do termo de busca na URL
- ⚡ Performance otimizada

## 🚀 Tecnologias Utilizadas

### Core

- **React 18.3.1**: Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.4.2**: Superset JavaScript com tipagem estática
- **React Router DOM 6.22.0**: Gerenciamento de rotas e navegação

### Styling

- **Styled Components 6.1.8**: CSS-in-JS para estilização de componentes

### UI/UX

- **React Aria Components 1.1.1**: Componentes acessíveis e sem estilo

### Build Tool

- **RSBuild 1.0.0**: Build tool moderno e rápido, baseado em Rspack

### Testing

- **Vitest 1.3.1**: Framework de testes rápido e moderno
- **Testing Library**: Biblioteca para testes de componentes React
- **@testing-library/react 14.2.1**
- **@testing-library/jest-dom 6.4.2**
- **@testing-library/user-event 14.5.2**

### Code Quality

- **ESLint 8.57.0**: Linter para manter qualidade do código
- **TypeScript ESLint**: Integração do ESLint com TypeScript

## 📁 Estrutura do Projeto

```
sensedia-user-list/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── SearchInput.tsx
│   │   ├── ViewToggle.tsx
│   │   ├── UserCard.tsx
│   │   ├── UserTable.tsx
│   │   ├── UserGrid.tsx
│   │   └── LoadingAndError.tsx
│   ├── hooks/              # Custom hooks
│   │   ├── useUsers.ts
│   │   └── useSearchParam.ts
│   ├── pages/              # Páginas da aplicação
│   │   └── UserListPage.tsx
│   ├── services/           # Serviços de API
│   │   └── userService.ts
│   ├── styles/             # Configurações de estilo
│   │   ├── theme.ts
│   │   └── GlobalStyles.ts
│   ├── types/              # Definições de tipos TypeScript
│   │   └── User.ts
│   ├── utils/              # Funções utilitárias
│   │   └── filterUsers.ts
│   ├── tests/              # Configuração de testes
│   │   ├── setup.ts
│   │   └── mockData.ts
│   ├── App.tsx             # Componente raiz
│   └── index.tsx           # Entry point
├── public/                 # Arquivos estáticos
├── rsbuild.config.ts       # Configuração do RSBuild
├── tsconfig.json           # Configuração do TypeScript
├── vitest.config.ts        # Configuração do Vitest
└── package.json
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/sensedia-user-list.git
cd sensedia-user-list
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo de desenvolvimento**
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Outros comandos

```bash
# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Executar testes
npm test

# Executar testes com interface
npm run test:ui

# Executar testes com cobertura
npm run test:coverage

# Verificar tipos TypeScript
npm run type-check

# Executar linter
npm run lint
```

## 🧪 Testes

O projeto possui cobertura de testes completa, incluindo:

- **Testes unitários** de componentes
- **Testes de integração** de funcionalidades
- **Testes de utilidades** e funções auxiliares

### Executar testes

```bash
# Modo watch (recomendado para desenvolvimento)
npm test

# Com interface visual
npm run test:ui

# Com relatório de cobertura
npm run test:coverage
```

## 🎨 Design System

O projeto utiliza um design system consistente com:

- **Paleta de cores** definida
- **Sistema de espaçamento** padronizado
- **Tipografia** consistente
- **Breakpoints** responsivos
- **Tokens de design** reutilizáveis

### Breakpoints

- Mobile: 480px
- Tablet: 768px
- Desktop: 1024px
- Wide: 1280px

## ♿ Acessibilidade

A aplicação segue as diretrizes WCAG 2.1 e implementa:

- ✅ Navegação completa por teclado
- ✅ ARIA labels e roles apropriados
- ✅ Foco visual claro
- ✅ Contraste de cores adequado
- ✅ Textos alternativos para ícones
- ✅ Componentes semânticos

## 📦 Build e Deploy

### Build

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Deploy

O projeto está configurado para deploy fácil em:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- Qualquer serviço que suporte SPA

#### Deploy na Vercel

```bash
# Instale a CLI da Vercel
npm install -g vercel

# Execute o deploy
vercel
```

## 🔍 Decisões Técnicas

### Por que RSBuild?

- ⚡ Build extremamente rápido (baseado em Rspack)
- 🎯 Zero configuração inicial
- 📦 Menor bundle size
- 🔧 Suporte nativo a TypeScript
- 🚀 Hot Module Replacement eficiente

### Por que Styled Components?

- 🎨 CSS-in-JS com TypeScript
- 🔒 Escopo automático de estilos
- 🎯 Props dinâmicas
- 📦 Sem colisão de classes CSS
- 🔥 Suporte a temas

### Por que React Aria Components?

- ♿ Acessibilidade por padrão (WCAG 2.1)
- 🎨 Totalmente customizável
- 📱 Mobile-friendly
- 🧩 Componentes sem estilo (headless)
- 🔍 Suporte a navegação por teclado

### Por que Vitest?

- ⚡ Extremamente rápido
- 🔧 Configuração mínima
- 🎯 API compatível com Jest
- 📦 ESM nativo
- 🖼️ Interface visual moderna

## 📝 Boas Práticas Implementadas

- ✅ Componentização eficiente
- ✅ Hooks customizados para lógica reutilizável
- ✅ Separação de responsabilidades
- ✅ Tipagem estática completa
- ✅ Código documentado
- ✅ Testes abrangentes
- ✅ Performance otimizada
- ✅ SEO-friendly
- ✅ Mobile-first approach
- ✅ Acessibilidade em primeiro lugar

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Desenvolvido como parte do teste técnico para Sensedia

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!# 📋 Sensedia - Lista de Usuários

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.2-blue?logo=typescript)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.8-pink?logo=styled-components)
![Vitest](https://img.shields.io/badge/Vitest-1.3.1-green?logo=vitest)

Aplicação de página única (SPA) desenvolvida em React para visualização e gerenciamento de usuários, consumindo dados da API JSONPlaceholder.

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como parte do teste técnico para a vaga de **Desenvolvedor Frontend Pleno na Sensedia**. A aplicação permite visualizar uma lista de usuários com funcionalidades de busca e alternância entre visualização em cards e tabela, seguindo as melhores práticas de desenvolvimento frontend moderno.

### ✨ Funcionalidades

- ✅ Listagem de usuários da API JSONPlaceholder
- 🔍 Busca em tempo real por nome de usuário
- 🔄 Alternância entre visualização em cards e tabela
- 📱 Design totalmente responsivo
- ♿ Acessibilidade completa (WCAG 2.1)
- 🎨 Interface moderna e intuitiva
- 🔗 Persistência do termo de busca na URL
- ⚡ Performance otimizada

## 🚀 Tecnologias Utilizadas

### Core

- **React 18.3.1**: Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.4.2**: Superset JavaScript com tipagem estática
- **React Router DOM 6.22.0**: Gerenciamento de rotas e navegação

### Styling

- **Styled Components 6.1.8**: CSS-in-JS para estilização de componentes

### UI/UX

- **React Aria Components 1.1.1**: Componentes acessíveis e sem estilo

### Build Tool

- **RSBuild 1.0.0**: Build tool moderno e rápido, baseado em Rspack

### Testing

- **Vitest 1.3.1**: Framework de testes rápido e moderno
- **Testing Library**: Biblioteca para testes de componentes React
- **@testing-library/react 14.2.1**
- **@testing-library/jest-dom 6.4.2**
- **@testing-library/user-event 14.5.2**

### Code Quality

- **ESLint 8.57.0**: Linter para manter qualidade do código
- **TypeScript ESLint**: Integração do ESLint com TypeScript

## 📁 Estrutura do Projeto

```
sensedia-user-list/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── SearchInput.tsx
│   │   ├── ViewToggle.tsx
│   │   ├── UserCard.tsx
│   │   ├── UserTable.tsx
│   │   ├── UserGrid.tsx
│   │   └── LoadingAndError.tsx
│   ├── hooks/              # Custom hooks
│   │   ├── useUsers.ts
│   │   └── useSearchParam.ts
│   ├── pages/              # Páginas da aplicação
│   │   └── UserListPage.tsx
│   ├── services/           # Serviços de API
│   │   └── userService.ts
│   ├── styles/             # Configurações de estilo
│   │   ├── theme.ts
│   │   └── GlobalStyles.ts
│   │   └── styled.d.ts
│   ├── types/              # Definições de tipos TypeScript
│   │   └── User.ts
│   ├── utils/              # Funções utilitárias
│   │   └── filterUsers.ts
│   ├── tests/              # Configuração de testes
│   │   ├── setup.ts
│   │   └── mockData.ts
│   ├── App.tsx             # Componente raiz
│   └── index.tsx           # Entry point
├── public/                 # Arquivos estáticos
├── rsbuild.config.ts       # Configuração do RSBuild
├── tsconfig.json           # Configuração do TypeScript
├── vitest.config.ts        # Configuração do Vitest
└── package.json
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/sensedia-user-list.git
cd sensedia-user-list
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo de desenvolvimento**
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### Outros comandos

```bash
# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Executar testes
npm test

# Executar testes com interface
npm run test:ui

# Executar testes com cobertura
npm run test:coverage

# Verificar tipos TypeScript
npm run type-check

# Executar linter
npm run lint
```

## 🧪 Testes

O projeto possui cobertura de testes completa, incluindo:

- **Testes unitários** de componentes
- **Testes de integração** de funcionalidades
- **Testes de utilidades** e funções auxiliares

### Executar testes

```bash
# Modo watch (recomendado para desenvolvimento)
npm test

# Com interface visual
npm run test:ui

# Com relatório de cobertura
npm run test:coverage
```

## 🎨 Design System

O projeto utiliza um design system consistente com:

- **Paleta de cores** definida
- **Sistema de espaçamento** padronizado
- **Tipografia** consistente
- **Breakpoints** responsivos
- **Tokens de design** reutilizáveis

### Breakpoints

- Mobile: 480px
- Tablet: 768px
- Desktop: 1024px
- Wide: 1280px

## ♿ Acessibilidade

A aplicação segue as diretrizes WCAG 2.1 e implementa:

- ✅ Navegação completa por teclado
- ✅ ARIA labels e roles apropriados
- ✅ Foco visual claro
- ✅ Contraste de cores adequado
- ✅ Textos alternativos para ícones
- ✅ Componentes semânticos

## 📦 Build e Deploy

### Build

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Deploy

O projeto está configurado para deploy fácil em:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- Qualquer serviço que suporte SPA

#### Deploy na Vercel

```bash
# Instale a CLI da Vercel
npm install -g vercel

# Execute o deploy
vercel
```

## 🔍 Decisões Técnicas

### Por que RSBuild?

- ⚡ Build extremamente rápido (baseado em Rspack)
- 🎯 Zero configuração inicial
- 📦 Menor bundle size
- 🔧 Suporte nativo a TypeScript
- 🚀 Hot Module Replacement eficiente

### Por que Styled Components?

- 🎨 CSS-in-JS com TypeScript
- 🔒 Escopo automático de estilos
- 🎯 Props dinâmicas
- 📦 Sem colisão de classes CSS
- 🔥 Suporte a temas

### Por que React Aria Components?

- ♿ Acessibilidade por padrão (WCAG 2.1)
- 🎨 Totalmente customizável
- 📱 Mobile-friendly
- 🧩 Componentes sem estilo (headless)
- 🔍 Suporte a navegação por teclado

### Por que Vitest?

- ⚡ Extremamente rápido
- 🔧 Configuração mínima
- 🎯 API compatível com Jest
- 📦 ESM nativo
- 🖼️ Interface visual moderna

## 📝 Boas Práticas Implementadas

- ✅ Componentização eficiente
- ✅ Hooks customizados para lógica reutilizável
- ✅ Separação de responsabilidades
- ✅ Tipagem estática completa
- ✅ Código documentado
- ✅ Testes abrangentes
- ✅ Performance otimizada
- ✅ SEO-friendly
- ✅ Mobile-first approach
- ✅ Acessibilidade em primeiro lugar

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Desenvolvido como parte do teste técnico para Sensedia

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!