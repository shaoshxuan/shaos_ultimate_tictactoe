import classNames from "classnames";
import { useContext } from "react";
import { toast } from "react-toastify";
import { ThemeContext } from "../../../../contexts/themeContext";
import "./IndivBox.scss";

interface indivBoxProps {
    playerTurn?: string;
    rowIndex?: number;
    colIndex?: number;
    subGridRowIndex?: number;
    indivBoxColIndex?: number;
    disabledSubGrid?: boolean;
    gridState?: Array<string>[];
    updateGridState?: (rowIndex: number, colIndex: number, subGridRowIndex: number, indivBoxColIndex: number) => void;
}

const IndivBox = ({disabledSubGrid, playerTurn, rowIndex, colIndex, subGridRowIndex, indivBoxColIndex, gridState, updateGridState}: indivBoxProps) => {
    const {darkMode} = useContext(ThemeContext);

    return (
        <>
            {
                disabledSubGrid
                ?
                <div className={classNames("IndivBox", "indivBoxTaken", darkMode ? "darkTheme" : "", 
                    gridState!==undefined && rowIndex!==undefined && colIndex!==undefined && subGridRowIndex!==undefined && indivBoxColIndex!==undefined
                    &&
                    (
                        gridState[(rowIndex*3)+colIndex][(subGridRowIndex*3)+indivBoxColIndex]+"Taken"
                    )
                )} onClick={() => {toast.error("Not Allowed!");}}>
                </div>
                :
                <div className={classNames("IndivBox", darkMode ? "darkTheme" : "", 
                    gridState!==undefined && rowIndex!==undefined && colIndex!==undefined && subGridRowIndex!==undefined && indivBoxColIndex!==undefined
                    &&
                    (
                        
                        gridState[(rowIndex*3)+colIndex][(subGridRowIndex*3)+indivBoxColIndex] === ""
                        ?
                        playerTurn+"Hover"
                        :
                        gridState[(rowIndex*3)+colIndex][(subGridRowIndex*3)+indivBoxColIndex]+"Taken"
                    )
                )} onClick={() => {updateGridState && rowIndex!==undefined && colIndex!==undefined && subGridRowIndex!==undefined && indivBoxColIndex!==undefined && updateGridState(rowIndex, colIndex, subGridRowIndex, indivBoxColIndex)}}>
                </div>
            }
        </>
        
    )
}

export default IndivBox;