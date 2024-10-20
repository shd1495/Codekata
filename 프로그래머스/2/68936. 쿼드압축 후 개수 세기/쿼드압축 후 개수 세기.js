function solution(arr) {
    const answer = [0, 0];
    
    function compress (x, y, size) {
        const value = arr[y][x];
        
        for (let i = y; i < y + size; i++) {
            for (let j = x; j < x + size; j++) {
                if (arr[i][j] !== value) {
                    const halfSize = size / 2;
                    compress(x, y, halfSize);
                    compress(x + halfSize, y, halfSize);
                    compress(x, y + halfSize, halfSize);
                    compress(x + halfSize, y + halfSize, halfSize);
                    return;
                }
            }
        }
        answer[value] += 1;
    }
    compress(0, 0, arr.length);
    
    return answer;
}