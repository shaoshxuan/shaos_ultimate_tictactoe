import classNames from "classnames";
import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import { ThemeContext } from "../../../../contexts/themeContext";
import { gameWinningLogic, subGridWinningLogic } from "../../../../logic/winningLogics";
import SubGrid from "../sub_grid/SubGrid";
import "./MainGrid.scss";

const MainGrid = () => {
    const {darkMode} = useContext(ThemeContext);
    const [playerTurn, setPlayerTurn] = useState<string>("blue")
    const [gridState, setGridState] = useState<Array<string>[]>([
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
        ["","","","","","","","",""],
    ])
    const [nextMove, setNextMove] = useState<number[] | string>("all")

    const updateGridState = (rowIndex: number, colIndex: number, subGridRowIndex: number, indivBoxColIndex: number) => {
        let tempGridState = gridState;
        let clickedSubGrid = (rowIndex*3)+colIndex
        let clickedSubGridIndex = (subGridRowIndex*3)+indivBoxColIndex
        if (tempGridState[clickedSubGrid][clickedSubGridIndex] === ""){
            tempGridState[clickedSubGrid][clickedSubGridIndex] = playerTurn;
            if (subGridWinningLogic(tempGridState[clickedSubGrid])){
                tempGridState[clickedSubGrid].push(playerTurn);
            } else {
                if (!tempGridState[clickedSubGrid].includes("")){
                    tempGridState[clickedSubGrid].push("tie");
                }
            }

            setGridState(tempGridState)
            
            if (gameWinningLogic(gridState)){
                setNextMove("end")
            } else {
                if (gridState[clickedSubGridIndex].length === 10){
                    setNextMove("all")
                } else {
                    setNextMove([subGridRowIndex, indivBoxColIndex])
                }

                setPlayerTurn(playerTurn === "blue" ? "red" : "blue")
            }
        } else {
            toast.error("Not Allowed!");
        }
    }

    return (
        <div className="MainGrid">
            <div className="mainGridSections">
                <div className={classNames("playerTurn",  darkMode ? "darkTheme" : "")}>
                    {nextMove === "end" ? <span id={playerTurn+"Turn"}>{playerTurn.toUpperCase() + " WON!"}</span> : (playerTurn === 'blue' ? <span id="blueTurn">BLUE'S TURN</span> : <span id="redTurn">RED'S TURN</span>)}
                </div>
                <div className="playZone">
                    <>
                        {[...Array(3)].map((row, rowIndex) => {
                            return (
                                <div className="mainRow" key={rowIndex}>
                                    {[...Array(3)].map((col, colIndex) => {
                                        return (
                                            <SubGrid notAllowed={!(nextMove !== "end" && (nextMove === "all" || JSON.stringify(nextMove) === JSON.stringify([rowIndex, colIndex])))} playerTurn={playerTurn} gridState={gridState} updateGridState={updateGridState} rowIndex={rowIndex} colIndex={colIndex} key={(rowIndex*3)+colIndex}/>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </>

                    <div className={classNames("gridLine", "verticalLine", darkMode ? "darkTheme" : "")} id="vertical1"></div>
                    <div className={classNames("gridLine", "verticalLine", darkMode ? "darkTheme" : "")} id="vertical2"></div>
                    <div className={classNames("gridLine", "horizontalLine", darkMode ? "darkTheme" : "")} id="horizontal1"></div>
                    <div className={classNames("gridLine", "horizontalLine", darkMode ? "darkTheme" : "")} id="horizontal2"></div>
                </div>
            </div>
        </div>
    )
}

export default MainGrid;