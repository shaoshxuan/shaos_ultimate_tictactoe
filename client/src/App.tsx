import { useState } from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Menu from './components/main_menu/Menu';

function App() {
    const [gameMode, setGameMode] = useState<number>(0);

    return (
        <div className="App">
            <Header gameMode={gameMode}></Header>
            <div className='mainContent'>
                {
                    gameMode === 0
                    ? <Menu setGameMode={setGameMode}></Menu>
                    : ""
                }
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;
