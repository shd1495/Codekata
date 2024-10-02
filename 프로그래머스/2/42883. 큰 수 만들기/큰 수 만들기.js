function solution(number, k) {
    const stack = [];
    
    for (let i = 0; i < number.length; i++) {
        const current = number[i];
        // 스택의 마지막 요소보다 현재 숫자가 크면 스택의 마지막 요소 제거를 반복
        while (stack.length > 0 && k > 0 && stack[stack.length - 1] < current) {
            stack.pop();
            k--;
        }
        
        stack.push(number[i]);
        
    }
    // k가 남아있으면 스택의 마지막 요소 제거
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    return stack.join('');
}