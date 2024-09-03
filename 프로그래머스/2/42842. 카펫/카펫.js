function solution(brown, yellow) {
    // 총 격자 수 = brown + yellow
    // 가로 세로는 총 격자 수의 약수
    // 가로가 클 경우만
    // 갈색이 테두리이므로 노란색은 갈색보다 가로 세로 길이가 각각 -2만큼 작음
    
    // 총 격자 수
    const total = brown + yellow;
    
    let width = 0;
    // 세로가 총 격자 수의 제곱근까지 
    for (let height = 1; height <= Math.sqrt(total); height++) {
        // 약수일 경우
        if (total % height === 0) {
            width = total / height;
        }
        // 가로가 클 경우만
        if (width >= height) {
            if((width-2) * (height-2) == yellow) return [ width, height ]
        }
    }
}