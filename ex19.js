/*In this exercise we will be writing an algorithm, 
to detect if two queens on a chess board can attack each other.

Queen Threat Detector
A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack 
pieces which are on the same row, column, or diagonal.

Chess Board Queen

In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). 
For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a 
queen on the corresponding square, and a O in the array represents an unoccupied square.

So the following chess board:

chess board example

Would be represented in JavaScript like this:

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
Our first challenge will be to write a function that generates a chess board like this. 
We will then write a function to detect weather or not the two queens are positioned so that they attack each other.
*/

const generateBoard = function(whiteQueen, blackQueen){
  let board = []

  for(let i = 0; i < 8; i++){
    board.push([0,0,0,0,0,0,0,0,])
  }

  board[whiteQueen[0]][whiteQueen[1]] = 1
  board[blackQueen[0]][blackQueen[1]] = 1

  return board
}

const queenThreat = function(chest){
  let whiteQueen = [];
  for(let i = 0; i < chest.length; i++){
    for(let j = 0; j < chest[i].length; j++){
      if(chest[i][j] == 1){
        whiteQueen.push([i,j])
        break
      }
    }
  }

  // line evaluation
  for(let i = whiteQueen[0][0]+1; i < chest[0].length; i++){
    if(chest[i][whiteQueen[0][1]] == 1){
      return true
    }
  }

  //row evaluation to the left
  for(let i = whiteQueen[0][1]+1; i < 0; i--){
    if(chest[whiteQueen[0][0]][i] == 1){
      return true
    }
  }
  // row evaluation to the rigth
  for(let i = whiteQueen[0][1]+1; i < chest[0].length; i++){
    if(chest[whiteQueen[0][0]][i] == 1){
      return true
    }
  }

  //diagonal evaluation
  if((whiteQueen[0][0] == 7 && whiteQueen[0][1] == 0)){
    return false
  }

  let line = 0
  line = whiteQueen[0][0] 
  chest[whiteQueen[0][0]][whiteQueen[0][1]] = 2
  num = 7 - (whiteQueen[0][1])

  for(let i = whiteQueen[0][1]; i <= num; i++){
    if(chest[line][i] == 1){
      return true
    }
    line ++
  }
  

  if(((whiteQueen[0][0] == 0 && whiteQueen[0][1] == 0))){
    return false
  }
    
  num = whiteQueen[0][0]
  for(let i = whiteQueen[0][1]; i >= num ; i--){
    if(chest[line][i] == 1){
        return true
      }
      line ++
    }
  

  return false
  
}

//generateBoard([0,5],[5,0])



let whiteQueen = [0, 7];
let blackQueen = [7, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.table(generatedBoard);
console.log(queenThreat(generatedBoard));
// Expected Output
// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true

//Input
whiteQueen = [0, 4];
blackQueen = [1, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.table(generatedBoard);
console.log(queenThreat(generatedBoard));
// Expected Output
// [
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// false

// Instruction
// Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
// Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.

