import { Dispatch, SetStateAction } from 'react';
import './Menu.scss'

interface MenuProps {
    setGameMode: Dispatch<SetStateAction<number>>;
}

const Menu = ({setGameMode}: MenuProps) => {
    return (
        <div className='Menu'>
            <div className='titleCard'>
                Shao's Ultimate Tic-Tac-Toe
            </div>
            <div className='gameOptions'>
                <button className='gameOptionBtn' id="localGame" onClick={() => setGameMode(1)}>
                    Local Game
                </button>
                <button className='gameOptionBtn' id="onlineBattle" onClick={() => setGameMode(2)} disabled>
                    Online Battle
                </button>
            </div>
        </div>
    )
}

export default Menu;


        