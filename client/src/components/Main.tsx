import { useContext } from "react"
import "./Main.scss";
import classNames from "classnames"
import { ThemeContext } from "../contexts/themeContext"
import Header from "./header/Header"
import Footer from "./footer/Footer";
import ContentArea from "./content-area/ContentArea";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const {darkMode} = useContext(ThemeContext);
    return (
        <div className="Main">
            <div className={classNames("background", darkMode ? "darkTheme" : "")}></div>
            <Header/>
            <ContentArea />
            <Footer />
            <ToastContainer 
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme={darkMode ? "dark" : "light"}
            />
        </div>
    )
}

export default Main;