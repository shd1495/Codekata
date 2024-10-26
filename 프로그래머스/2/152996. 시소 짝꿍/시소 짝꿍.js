function solution(weights) {
    // 두 값을 비교해서 비율이 1:1 1:2 2:3 3:4 나오냐 판단
    let answer = 0;
    const weightCnt = new Map();
    
    // 빈도 계산
    for (let weight of weights) {
        weightCnt.set(weight, (weightCnt.get(weight) || 0) + 1);
    }
    
    for (let [weight, cnt] of weightCnt) {
        if (cnt > 1) // 1:1 
            answer += (cnt * (cnt -1)) / 2;
        
        if (weightCnt.has(weight * 2)) // 1:2
            answer += cnt * weightCnt.get(weight * 2);

        if (weightCnt.has((weight * 3) / 2)) // 2:3
            answer += cnt * weightCnt.get((weight * 3) / 2);

        if (weightCnt.has((weight * 4) / 3)) // 3:4
            answer += cnt * weightCnt.get((weight * 4) / 3);
        
    }
    return answer;
}