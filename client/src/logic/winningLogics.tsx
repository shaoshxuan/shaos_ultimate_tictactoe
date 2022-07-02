const winningLogic = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

export const subGridWinningLogic = (gridState: string[]) => {
    let winFlag = false
    winningLogic.forEach(winningComb => {
        if (gridState[winningComb[0]] !== "" && gridState[winningComb[0]] === gridState[winningComb[1]] && gridState[winningComb[1]] === gridState[winningComb[2]]){
            winFlag = true
            return
        }
    });
    return winFlag;
}

export const gameWinningLogic = (gridState: Array<string>[]) => {
    let winFlag = false
    winningLogic.forEach(winningComb => {
        if (gridState[winningComb[0]].length === 10 && gridState[winningComb[0]][9] === gridState[winningComb[1]][9] && gridState[winningComb[1]][9] === gridState[winningComb[2]][9]){
            winFlag = true
            return
        }
    });
    return winFlag;
}