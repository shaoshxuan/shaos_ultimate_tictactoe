import './App.scss';
import Main from './components/Main';
import { ThemeContextProvider } from './contexts/themeContext';

const App = () => {
    return (
        <div className="App">      
            <ThemeContextProvider>
                <Main />
            </ThemeContextProvider>
        </div>
    );
}

export default App;
