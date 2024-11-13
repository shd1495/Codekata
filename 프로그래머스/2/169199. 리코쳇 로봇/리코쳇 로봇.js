function solution(board) {
    const width = board[0].length;
    const height = board.length;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const queue = [];
    
    const visited = Array.from({ length: height }, () => Array(width).fill(Infinity));

    let start = null;
    let end = null;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (board[i][j] === 'R') start = { x: j, y: i };
            if (board[i][j] === 'G') end = { x: j, y: i };
            if (start && end) break;
        }
        if (start && end) break;
    }

    if (!start || !end) return -1;
    
    queue.push(start);
    visited[start.y][start.x] = 0;
    
    while (queue.length > 0) {
        const { x, y } = queue.pop();

        for (let i = 0; i < 4; i++) {
            let nextX  = x + dx[i];
            let nextY = y + dy[i];

            if (nextX < 0 || nextY < 0 || nextX >= width 
                || nextY >= height || board[nextY][nextX] === 'D')
                continue;

            while (nextX >= 0 && nextY >= 0 && nextX < width 
                   && nextY < height && board[nextY][nextX] !== 'D') {
                nextX += dx[i];
                nextY += dy[i];
            }

            nextX -= dx[i];
            nextY -= dy[i];

            if (visited[nextY][nextX] > visited[y][x] + 1) {
                visited[nextY][nextX] = visited[y][x] + 1;
                queue.push({ x: nextX, y: nextY });
            }
        }
    }

    return visited[end.y][end.x] === Infinity ? -1 : visited[end.y][end.x];
}