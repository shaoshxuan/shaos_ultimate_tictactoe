import IndivBox from "../individual_box/IndivBox";
import "./SubGrid.scss";
import { ThemeContext } from "../../../../contexts/themeContext";
import { useContext } from "react";
import classNames from "classnames";
import { toast } from "react-toastify";

interface subGridProps {
    playerTurn?: string;
    rowIndex?: number;
    colIndex?: number;
    notAllowed?: boolean;
    gridState?: Array<string>[];
    updateGridState?: (rowIndex: number, colIndex: number, subGridRowIndex: number, indivBoxColIndex: number) => void;
}

const SubGrid = ({playerTurn, rowIndex, colIndex, notAllowed, gridState, updateGridState} : subGridProps) => {
    const {darkMode} = useContext(ThemeContext);

    return (
        <div className="SubGrid">
            <>
                {
                    gridState!==undefined && rowIndex!==undefined && colIndex!==undefined && gridState[(rowIndex*3 + colIndex)].length === 10
                    ?
                    <>
                        {[...Array(3)].map((subGridRow, subGridRowIndex) => {
                            return (
                                <div className="gridCol" key={subGridRowIndex}>
                                    {[...Array(3)].map((indivBoxCol, indivBoxColIndex) => {
                                        return (
                                            <IndivBox disabledSubGrid={true} playerTurn={playerTurn} gridState={gridState} updateGridState={updateGridState} rowIndex={rowIndex} colIndex={colIndex} subGridRowIndex={subGridRowIndex} indivBoxColIndex={indivBoxColIndex} key={(subGridRowIndex*3)+indivBoxColIndex}/>
                                        )
                                    })}
                                </div>
                            )
                        })}
                        <div className={classNames("wonGrid",  darkMode ? "darkTheme" : "", gridState[(rowIndex*3 + colIndex)][9])} onClick={() => {
                            toast.error("Not Allowed!");
                        }}>
                            
                        </div>
                    </>
                    :
                    [...Array(3)].map((subGridRow, subGridRowIndex) => {
                        return (
                            <div className="gridCol" key={subGridRowIndex}>
                                {[...Array(3)].map((indivBoxCol, indivBoxColIndex) => {
                                    return (
                                        <IndivBox disabledSubGrid={notAllowed} playerTurn={playerTurn} gridState={gridState} updateGridState={updateGridState} rowIndex={rowIndex} colIndex={colIndex} subGridRowIndex={subGridRowIndex} indivBoxColIndex={indivBoxColIndex} key={(subGridRowIndex*3)+indivBoxColIndex}/>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </>
        </div>
    )
}

export default SubGrid;