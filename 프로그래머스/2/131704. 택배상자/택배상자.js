function solution(order) {
    let answer = 0;
    const stack = [];
    let box = 0;
    let i = 0;
    
    while(box <= order.length) {
        // 순서와 박스 번호가 같으면
        if (order[i] == box) {
            answer++;
            i++;
        }  else {
            stack.push(box);
        }
        
        // 보조 컨테이너에 순서에 맞는 상자가 있으면
        while (stack.length > 0 && stack[stack.length -1 ] == order[i]) {
            stack.pop();
            answer++;
            i++
        }
        box++;
    }
        
    return answer;
}