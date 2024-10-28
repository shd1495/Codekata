function solution(rows, columns, queries) {
    const answer = [];
    
    // 행렬 생성
    const matrix = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
    let value = 1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            matrix[i][j] = value;
            value++;
        }
    }
    
    // 회전
    for (const [x1, y1, x2, y2] of queries) {
        const top = x1 - 1;
        const left = y1 - 1;
        const bottom = x2 - 1;
        const right = y2 - 1;

        const border = [];
        
        // 위쪽 테두리
        for (let j = left; j <= right; j++) {
            border.push(matrix[top][j]);
        }
        
        // 오른쪽 테두리
        for (let i = top + 1; i <= bottom; i++) {
            border.push(matrix[i][right]);
        }
        
        // 아래쪽 테두리
        for (let j = right - 1; j >= left; j--) {
            border.push(matrix[bottom][j]);
        }
        
        // 왼쪽 테두리
        for (let i = bottom - 1; i > top; i--) {
            border.push(matrix[i][left]);
        }

        // 회전
        const rotated = [border[border.length - 1], ...border.slice(0, -1)];
        
        let index = 0;

        // 회전된 요소를 다시 행렬에 저장
        // 위쪽 테두리
        for (let j = left; j <= right; j++) {
            matrix[top][j] = rotated[index++];
        }

        // 오른쪽 테두리
        for (let i = top + 1; i <= bottom; i++) {
            matrix[i][right] = rotated[index++];
        }

        // 아래쪽 테두리
        for (let j = right - 1; j >= left; j--) {
            matrix[bottom][j] = rotated[index++];
        }

        // 왼쪽 테두리
        for (let i = bottom - 1; i > top; i--) {
            matrix[i][left] = rotated[index++];
        }

        // 회전 후 이동한 숫자 중 최솟값 찾기
        const minValue = Math.min(...rotated);
        answer.push(minValue);
    }

    return answer;
}