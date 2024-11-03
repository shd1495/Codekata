function solution(cards) {
    const groupSizes = [];
    // 방문
    const visited = Array.from({length: cards.length}).fill(false);
    
    // 그룹별 사이즈 계산
    for (let i = 0; i < cards.length; i++) {
        if (!visited[i]) {
            let size = 0;
            let cur = i;
            
            while(!visited[cur]) {
                visited[cur] = true; // 방문 처리
                size++;
                cur = cards[cur] - 1;
            }
            
            if (size > 0) groupSizes.push(size)
        }
    }
    
    let maxScore = 0;

    for (let i = 0; i < groupSizes.length; i++) {
        for (let j = i + 1; j < groupSizes.length; j++) {
            // 2그룹 중 최고 값 계산
            maxScore = Math.max(maxScore, groupSizes[i] * groupSizes[j]);
        }
    }
    
    return maxScore;
}