/*
undirected path
===============
Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
*/

const undirectedPath = (edges,nodeA,nodeB)=>{
    // build adjacency list
    // check if path exist
    // check for cycle
    const graph = buildGraph(edges);

    return checkIfPathExist(graph, nodeA, nodeB, new Set());
}

const checkIfPathExist = (graph,src,dest,visited)=>{
    if (src === dest)
        return true;
    if (visited.has(src))
        return false;

    visited.add(src);

    for (let neighbour of graph[src]) {
        if (checkIfPathExist(graph, neighbour, dest, visited) === true) {
            return true;
        }
    }
    return false;
}

const buildGraph = (edges)=>{
    const graph = {};

    for (let edge of edges) {
        const [a,b] = edge;
        if (!(a in graph))
            graph[a] = [];
        if (!(b in graph))
            graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

/* Test cases
const edges = [['i', 'j'], ['k', 'i'], ['m', 'k'], ['k', 'l'], ['o', 'n']]
undirectedPath(edges, 'j', 'm')
*/
