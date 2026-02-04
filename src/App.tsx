import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { UserListPage } from './pages/UserListPage';

/**
 * Componente raiz da aplicação
 * Configura providers e rotas
 */
function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UserListPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;