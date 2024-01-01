/*
largest component
=================
Write a function, largestComponent, that takes in the adjacency list of an undirected graph. 
The function should return the size of the largest connected component in the graph.
*/

const largestComponent = (graph)=>{
    // iterate through the keys
    let visited = new Set();
    let max = 0;
    for (let node of Object.keys(graph)) {
        // perform DFS
        if (!visited.has(node)) {
            let size = pathExists(graph, node, visited);
            if (size > max) {
                max = size;
            }
        }
    }
    return max;
}

const pathExists = (graph,src,visited)=>{
    if (visited.has(src))
        return 0;
    visited.add(src);
    let size = 1;
    for (let neighbour of graph[src]) {
        size += pathExists(graph, neighbour, visited);
    }
    return size;
}

/* Test Cases */

/*
console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
}))

console.log(largestComponent({
    1: ['2'],
    2: ['1', '8'],
    6: ['7'],
    9: ['8'],
    7: ['6', '8'],
    8: ['9', '7', '2']
}));
// -> 6

console.log(largestComponent({
    3: [],
    4: ['6'],
    6: ['4', '5', '7', '8'],
    8: ['6'],
    7: ['6'],
    5: ['6'],
    1: ['2'],
    2: ['1']
})// -> 5
)

console.log(largestComponent({
    0: ['4', '7'],
    1: [],
    2: [],
    3: ['6'],
    4: ['0'],
    6: ['3'],
    7: ['0'],
    8: []
})// -> 3
)
*/
