import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Main from './components/Main';
import { ThemeContextProvider } from './contexts/themeContext';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <ThemeContextProvider>
                    <Main />
                </ThemeContextProvider>
            </BrowserRouter>      
            
        </div>
    );
}

export default App;
