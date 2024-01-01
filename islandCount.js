/*
island count
============
Write a function, islandCount, that takes in a grid containing Ws and Ls. 
W represents water and L represents land. 
The function should return the number of islands on the grid. 
An island is a vertically or horizontally connected region of land.
*/
const islandCount = (grid)=>{
    let count = 0
      , visited = new Set();
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (explore(grid, row, col, visited) === true)
                count ++;
        }
    }
    return count;
}

const explore = (grid,row,col,visited)=>{
    const rowValid = row >= 0 && row < grid.length;
    const colValid = col >= 0 && col < grid[0].length;
    if (!rowValid || !colValid)
        return false;
    if (visited.has(row + '_' + col) || grid[row][col] === 'W') {
        return false;
    }

    visited.add(row + '_' + col);

    explore(grid, row - 1, col, visited);
    explore(grid, row + 1, col, visited);
    explore(grid, row, col - 1, visited);
    explore(grid, row, col + 1, visited);

    return true;
}
