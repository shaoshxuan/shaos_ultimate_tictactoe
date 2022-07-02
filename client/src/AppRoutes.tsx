import { Routes, Route } from "react-router-dom";
import HomeMenu from "./components/content-area/components/home_menu/HomeMenu";
import MainGrid from "./components/content-area/components/main_grid/MainGrid";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeMenu />}></Route>
            <Route path="/local-game" element={<MainGrid />}></Route>
            {/* <Route path="*">
                < />
            </Route> */}
        </Routes>
    )
}

export default AppRoutes;