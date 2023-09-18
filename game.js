import Character from "./domain";
export class Game {
    start() {
      console.log('game started');
    }
  }
 
  const defaultClient = new Game ();
  export default defaultClient;
  
 export class GameSavingData {
  }
  
  export function readGameSaving() {
  }
  
  export function writeGameSaving() {
  }
 
  