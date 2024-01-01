/*
connected components count
==========================
Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. 
The function should return the number of connected components within the graph.
*/

const connectedComponentsCount = (graph)=>{
    let visited = new Set();
    let count = 0;
    for (let node of Object.keys(graph)) {
        if (!visited.has(Number(node))) {
            pathExists(graph, Number(node), visited)
            count++;
        }
    }
    return count;
}

const pathExists = (graph,src,visited)=>{
    if (visited.has(src))
        return false;
    visited.add(src);
    for (let neighbour of graph[src]) {
        pathExists(graph, neighbour, visited)
    }
    return true;
}

/*
// Test cases
console.log(connectedComponentsCount({
    1: [2],
    2: [1, 8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
}));
// 1

console.log(connectedComponentsCount({
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
}));
// -> 3

console.log(connectedComponentsCount({
    0: [4, 7],
    1: [],
    2: [],
    3: [6],
    4: [0],
    6: [3],
    7: [0],
    8: []
}));
// -> 5

console.log(connectedComponentsCount({}));
*/
