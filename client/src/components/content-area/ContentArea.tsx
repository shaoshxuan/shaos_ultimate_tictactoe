// import AppRoutes from "../../AppRoutes";
import MainGrid from "./components/main_grid/MainGrid";
import { ThemeContext } from "../../contexts/themeContext";
import "./ContentArea.scss";
import { useContext } from "react";

const ContentArea = () => {
    const {darkMode} = useContext(ThemeContext);
    
    return (
        <div className="ContentArea">
            {/* <AppRoutes /> */}
            <MainGrid />
        </div>
    )
}

export default ContentArea;