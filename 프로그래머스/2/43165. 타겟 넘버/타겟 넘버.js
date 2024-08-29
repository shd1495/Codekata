function solution(numbers, target) {
    let answer = 0;
    // 스택 방식 사용
    const stack = [{ idx: 0, sum: 0 }];
    
    while (stack.length > 0) {
        
        const { idx, sum } = stack.pop();
        
        // 모두 순회한 경우
        if (idx === numbers.length) {
            // 합이 타겟 넘버와 일치하면
            if (sum === target) {
                answer++;
            }
        } else {
            // 현재 인덱스의 값을 더하는 경우
            stack.push({ idx: idx + 1, sum: sum + numbers[idx] });
            // 현재 인덱스의 값을 빼는 경우
            stack.push({ idx: idx + 1, sum: sum - numbers[idx] });
        }
        
    }
    return answer;
}