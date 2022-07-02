import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import "./ParallexBG.scss";

const ParallexBG = () => {
    const {darkMode} = useContext(ThemeContext);

    const parallax = (e: { pageX: number; pageY: number; }) => {
        document.querySelectorAll(".bgItem").forEach((item: any) => {
            const itemSpeed = item.getAttribute("data-speed")
            const x = (window.innerWidth - e.pageX*itemSpeed)/100;
            const y = (window.innerHeight - e.pageY*itemSpeed)/100;

            item.style.transform = `translateX(${x}px) translateY(${y}px)`;
        })
    }
    document.addEventListener("mousemove", parallax);

    return (
        <div className={classNames("ParallexBG", darkMode ? "darkTheme" : "")}>
            <div className="bgItem" id="bgItem1" data-speed="2"></div>
            <div className="bgItem" id="bgItem2" data-speed="-3"></div>
            <div className="bgItem" id="bgItem3" data-speed="2"></div>
            <div className="bgItem" id="bgItem4" data-speed="2"></div>
            <div className="bgItem" id="bgItem5" data-speed="-2"></div>
        </div>
    )
}

export default ParallexBG;