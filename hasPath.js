/*
has path
========
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). 
The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
*/

function hasPathDFS(graph, src, dest) {
    if (src === dest)
        return true;

    for (let neighbour of graph[src]) {
        if (hasPath(graph, neighbour, dest) === true)
            return true;
    }

    return false;
}

function hasPathBFS(graph, src, dest) {
    const queue = [src];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dest)
            return true;
        for (let neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }
}


/*
// Test cases
const graph = {
    f: ['i', 'g'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

console.log(hasPathDFS(graph, 'j', 'h') === hasPathBFS(graph, 'j', 'h'))
console.log(hasPathDFS(graph, 'j', 'k') === hasPathBFS(graph, 'j', 'k'))
console.log(hasPathDFS(graph, 'f', 'h') === hasPathBFS(graph, 'f', 'h'))
console.log(hasPathDFS(graph, 'f', 'j') === hasPathBFS(graph, 'f', 'j'))
*/
