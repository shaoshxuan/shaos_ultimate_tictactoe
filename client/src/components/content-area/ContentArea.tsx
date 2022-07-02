import AppRoutes from "../../AppRoutes";
import MainGrid from "./components/main_grid/MainGrid";
import { ThemeContext } from "../../contexts/themeContext";
import "./ContentArea.scss";
import { useContext } from "react";
import HomeMenu from "./components/home_menu/HomeMenu";

const ContentArea = () => {
    const {darkMode} = useContext(ThemeContext);
    
    return (
        <div className="ContentArea">
            <AppRoutes />
            {/* <MainGrid /> */}
            {/* <HomeMenu /> */}
        </div>
    )
}

export default ContentArea;