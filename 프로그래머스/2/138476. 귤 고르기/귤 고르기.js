function solution(k, tangerine) {
    // 크기 별로 몇 개씩 존재하는지 분류
    let sell = {};
    for (let i = 0; i < tangerine.length; i++) {
        sell[tangerine[i]] = (sell[tangerine[i]] || 0) + 1;
    }
    // 분류된 객체를 크기 별로 많이 있는 순으로 정렬
    sell = Object.values(sell).sort((a, b) => b - a);
    
    let sum = 0; // 선택한 귤의 갯수
    let cnt = 0; // 종류
    for (let i = 0; i < sell.length; i++) {
        cnt++;
        // 현재 선택한 귤의 갯수 + 이전 까지의 귤의 갯수가 k보다 크거나 같으면 선택 끝 
        if (sum + sell[i] >= k) break;
        sum += sell[i];
        
    }
    return cnt;
}