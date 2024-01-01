/*
shortest path
==============
Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
The function should return the length of the shortest path between A and B. 
Consider the length as the number of edges in the path, not the number of nodes. 
If there is no path between A and B, then return -1.
*/

const shortestPath = (edges,nodeA,nodeB)=>{
    const graph = buildGraphFromEdges(edges);
    const visited = new Set();

    const queue = [[nodeA, 0]];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current[0] === nodeB) {
            return current[1];
        }
        visited.add(current[0]);

        for (let neighbour of graph[current[0]]) {
            if (!visited.has(neighbour)) {
                queue.push([neighbour, current[1] + 1]);
            }
        }
    }
    return -1;
}

const buildGraphFromEdges = (edges)=>{
    const graph = {};

    for (let edge of edges) {
        const [a,b] = edge;
        if (!(a in graph))
            graph[a] = []
        if (!(b in graph))
            graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph;
}
