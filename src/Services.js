import { BASE_URL } from './Config';

export async function fetchGameState() {
    const response = await fetch(BASE_URL + '/game/state', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch((error) => {
        console.log('Game state error: ', error);
    });    
    const gameStateResponseJson = await response.json();
    return gameStateResponseJson;
};

export async function registerMove(move, nextPlayer) {
    const response = await fetch(BASE_URL + '/game/registerMove?playerId=' + nextPlayer + '&move=' + move, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch((error) => {
        console.log('Move register error: ', error);
    });
    const registerMoveResponseJson = await response.json();
    return registerMoveResponseJson;
}

export async function resetGame() {
    const response = await fetch(BASE_URL + '/game/reset', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch((error) => {
        console.log('Game reset error: ', error);
    });
    const resetGameResponseJson = await response.json();
    return resetGameResponseJson;
}