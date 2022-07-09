import classNames from "classnames";
import { ThemeContext } from "../../../../contexts/themeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeMenu.scss";
import { Helmet } from "react-helmet";

const HomeMenu = () => {
    const navigate = useNavigate()
    const {darkMode} = useContext(ThemeContext);

    return (
        <div className="HomeMenu">
            <Helmet>
                <title>Ultimate Tic-Tac-Toe</title>
            </Helmet>
            <div className={classNames("menu-logo", darkMode ? "darkTheme" : "")}>
                Ultimate T<sup>3</sup>
            </div>
            <div className={classNames("game-options", darkMode ? "darkTheme" : "")}>
                <button onClick={() => navigate("/local-game")}>Local Game</button>
                <button className="btnDisabled">Online Game</button>
            </div>
        </div>
    )
}

export default HomeMenu;