import './Header.scss';

interface HeaderProps {
    gameMode: number;
}

const Header = ({gameMode}: HeaderProps) => {
    return (
        <div className='Header'>
            <div className='logo'>
                <img src="/logo512.png" alt="Shao's Ultimate Tic-Tac-Toe Logo" />
                <div className="gameName">
                    Shao's Ultimate Tic-Tac-Toe
                </div>
            </div>
            <div className='gameInfo'>
                {
                    gameMode === 0
                    ? "Home"
                    : (
                        gameMode === 1
                        ? "Local Game"
                        : "Online Battle [Room #1234]"
                    )
                }
            </div>
        </div>
    )
}

export default Header;