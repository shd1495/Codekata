function solution(maps) {
    const answer = [];
    let cols = maps[0].length;
    let rows = maps.length;
    const visited = Array.from({length: rows}, () => Array(cols).fill(false))
    
    const direction = [
        [-1,0],
        [1,0],
        [0, -1],
        [0, 1]
    ]
    
    function bfs (x, y) {
        let queue = [[x,y]]
        visited[x][y] = true;
        let totalFood = parseInt(maps[x][y]);
        
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            
            direction.forEach(([dx, dy])=>{
                const nx = x+ dx;
                const ny = y+ dy;
                
                if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && !visited[nx][ny] && maps[nx][ny] !== 'X') {
                    visited[nx][ny] = true;
                    totalFood += parseInt(maps[nx][ny]);
                    queue.push([nx, ny]);
                }
            })
        }
        return totalFood;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                answer.push(bfs(i, j));
            }
        }
    }

    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}