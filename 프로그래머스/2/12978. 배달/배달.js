function solution(N, road, K) {
    const roadList = Array.from({ length: N + 1 }, () => []);
    const distance = Array(N + 1).fill(Infinity);
    const visited = Array(N + 1).fill(false);

    // 노드의 인접 노드 정보 저장
    road.forEach(([u, v, w]) => {
      roadList[u].push({ node: v, cost: w });
      roadList[v].push({ node: u, cost: w });
    });
    
    const queue = [];
    queue.push({ node: 1, cost: 0 });
    distance[1] = 0;

    while (queue.length > 0) {
      // 각 노드 최소 비용 정렬
      queue.sort((a, b) => a.cost - b.cost);
      const { node: curNode, cost: curCost } = queue.shift();

      // 방문한 노드 갱신 및 재방문 방지
      if (visited[curNode]) continue;
      visited[curNode] = true;

      // 노드에서 인접 노드 비용 계산
      roadList[curNode].forEach(({ node: nextNode, cost: nextCost }) => {
        const newCost = curCost + nextCost;

        if (newCost < distance[nextNode]) {
          distance[nextNode] = newCost;
          queue.push({ node: nextNode, cost: newCost });
        }
      });
    }

    return distance.slice(1).filter((x)=> x <= K).length;
}