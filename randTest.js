var rs = require('readline-sync');

let size = 3;
let grid = createGrid(size);
let ships = 2;
let enemyLocations = {};

for (let i = 1; i < 3; i++) {
   x = getRandomInt(size);
   y = getRandomInt(size);
    placeCharacter(x, y, 'X', grid);
    placeRandomCharacter('X', grid, size);
    
}
printGrid(grid);

while (ships > 0) {
    let x = rs.question('Enter your x-coordinate: '); 
        console.log('You chose: ' + x);
    let y = rs.question('Enter your y-coordinate: ');
        console.log('You chose: ' + y);
    
    if (attack(x, y, grid)) {
        ships--;
    }
    printGrid(grid);
}


function createGrid(size) {
    let grid = [];
    for (let i = 0; i < size; i++) {
       grid[i] = [];
       for (let j = 0; j < size; j++) {
          grid [i][j] = 'O';
        }
    }
    return grid;
}

function printGrid(grid) {
    const headers = createHeaders(grid.length);
    console.log(headers);
    for (let i = 0; i < grid.length; i++) {
      var rowStr = i + ' ';
      for (let cell of grid[i]) {
        if (cell == 'X') {
            rowStr += 'n ';
        } else {
          rowStr += cell + ' ';
            }
        }
        console.log(rowStr);
    }
}

function createHeaders(size) {
    let result = '  ';
    for (let i = 0; i < size; i++) {
        result += i + ' ';
    }
    return result;
}

function placeCharacter(x, y, c, grid) {
    grid[y][x] = c;
}
function placeRandomCharacter(c, grid, max) {
        var x = getRandomInt(max);
        var y = getRandomInt(max);
        if (!enemyLocations['${x}-${y}']) {
            placeCharacter(x, y, c, grid);
             enemyLocations['${x}-${y}'] = true;
        }
    }

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function attack(x, y, grid) {
    if (grid[y][x] == 'O') {
        grid[y][x] = 'x';
    } else {
        grid[y][x] = 'y';
    }
}