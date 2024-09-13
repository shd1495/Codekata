function solution(want, number, discount) {
    var answer = 0;
    const wants = new Map();
    
    // 원하는 제품과 수량을 Map에 저장
    for (let i = 0; i < want.length; i++) {
        wants.set(want[i], number[i]);
    }
    
    // 슬라이딩 윈도우로 검사
    for (let i = 0; i < discount.length; i++) {
        const curCnt = new Map();
        // 현재 윈도우
        let window = discount.slice(i, i+10);
        for (let j = 0; j < window.length; j++) {
            // window[j]가 없으면 0 있으면 +1
            curCnt.set(window[j], (curCnt.get(window[j]) || 0) + 1);
        }
        
        let check = true;
        // 원하는 제품의 수량과 현재 윈도우의 수량과 같을 경우엔 통과
        for (let [item, cnt] of wants) {
            if (curCnt.get(item) !== cnt) {
                check = false;
                break;
            }
        }
        
        if (check) answer++;
        
    }
    
    return answer;
}