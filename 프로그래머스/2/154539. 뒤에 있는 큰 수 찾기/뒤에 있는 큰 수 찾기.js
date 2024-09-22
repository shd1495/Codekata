function solution(numbers) {
    // -1으로 채우고 시작
    const answer = Array(numbers.length).fill(-1);
    const stack = [];
    
    // 뒤에서부터 시작
    for (let i = numbers.length-1; i >= 0; i--) {
        
        // 스택에 현재 숫자보다 작거나 큰 수 모두 제거
        while(stack.length && stack[stack.length-1] <= numbers[i]) {
            stack.pop();
        }
        
        // 스택에 남은 숫자 중 마지막에 있는 숫자가 현재 숫자보다 다음으로 큰 수
        if (stack.length) {
            answer[i] = stack[stack.length-1];
        }
        
        // 스택에 현재 숫자 추가
        stack.push(numbers[i]);
    }
    return answer;
}