function solution(n, wires) {
    let diff = n;
    const graph = Array.from({ length: n + 1 }, () => []);
    // 인접 노드 계산
    for (const [v1, v2] of wires) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    const visited = new Array(n+1).fill(false);
    
    function dfs (node) {
        visited[node] = true;
        let treeSize = 1;
        
        for (const nearby of graph[node])  {
            if (!visited[nearby]) {
                const tree1 = dfs(nearby);
                const tree2 = n - tree1;
                // 최소 차이
                diff = Math.min(diff, Math.abs(tree1 - tree2));
                treeSize += tree1;
            }
        }
        return treeSize;
    }
    
    dfs(1);
    
    return diff;
}