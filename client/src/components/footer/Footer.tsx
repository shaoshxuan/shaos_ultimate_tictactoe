import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import "./Footer.scss"

const Footer = () => {
    const {darkMode} = useContext(ThemeContext);
    
    return (
        <div className={classNames("Footer", darkMode ? "darkTheme" : "")}>
            Designed and Developed by Shao Shxuan | © 2022
        </div>
    )
}

export default Footer;