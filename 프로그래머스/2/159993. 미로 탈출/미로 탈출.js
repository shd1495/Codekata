function solution(maps) {
    function bfs (start, end, maps) {
        const n = maps.length;
        const m = maps[0].length;
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const visited = Array.from({ length: n }, () => Array(m).fill(false));
        const queue = [[...start, 0]]
        visited[start[0]][start[1]] = true;
        
        while (queue.length > 0) {
            const [x, y, dist] = queue.shift();
            
            // 도착 지점에 도달했으면 거리 반환
            if (x === end[0] && y === end[1]) {
                return dist;
            }

            // 다음 위치 탐색
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && maps[nx][ny] !== 'X') {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, dist + 1]);
                }
            }
        }
        
        return -1;
    }
    
    let start, lever, exit;

    // 시작, 레버, 출구 위치 찾기
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] === 'S') start = [i, j];
            else if (maps[i][j] === 'L') lever = [i, j];
            else if (maps[i][j] === 'E') exit = [i, j];
        }
    }
    // 시작 지점에서 레버까지의 거리
    const distToLever = bfs(start, lever, maps);
    if (distToLever === -1) return -1;

    // 레버에서 출구까지의 거리
    const distToExit = bfs(lever, exit, maps);
    if (distToExit === -1) return -1;
    
    return distToLever + distToExit;
}