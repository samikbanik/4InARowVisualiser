const SCHEME = 'http://';
export const HOST = '3da241810211.ngrok.io';
export const BASE_URL = SCHEME + HOST;

const nRows = 10;
const nColumns = 10;

export function getRows() {
    let rows = [];
    for(let i = 0; i < nRows; i++) {
        rows[i] = i;
    }
    return rows;
}

export function getColumns() {
    let columns = [];
    for(let i = 0; i < nColumns; i++) {
        columns[i] = i;
    }
    return columns;
}

export function getInitialGameState() {
    let gameState = new Array(nRows);
    for(let i = 0; i < nRows; i++) {
        gameState[i] = new Array(nColumns);
    }
    for(let i = 0; i < nRows; i++) {
        for(let j = 0; j < nColumns; j++) {
            gameState[i][j] = -1;
        }
    }
    return gameState;
}
