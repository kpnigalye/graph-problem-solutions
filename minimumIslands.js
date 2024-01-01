/*
minimum island
==============
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. 
W represents water and L represents land. 
The function should return the size of the smallest island. 
An island is a vertically or horizontally connected region of land.
You may assume that the grid contains at least one island.
*/
const minimumIsland = (grid)=>{
    let min = Infinity
      , visited = new Set();
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            let size = explore(grid, row, col, visited);
            if (size > 0 && size < min) {
                min = size;
            }
        }
    }
    return min;
}

const explore = (grid,row,col,visited)=>{
    const rowValid = row >= 0 && row < grid.length;
    const colValid = col >= 0 && col < grid[0].length;
    if (!rowValid || !colValid)
        return 0;
    if (visited.has(row + '_' + col) || grid[row][col] === 'W') {
        return 0;
    }

    let size = 1;
    visited.add(row + '_' + col);

    size += explore(grid, row - 1, col, visited);
    size += explore(grid, row + 1, col, visited);
    size += explore(grid, row, col - 1, visited);
    size += explore(grid, row, col + 1, visited);

    return size;
}
