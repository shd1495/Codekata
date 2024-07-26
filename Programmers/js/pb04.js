function solution(num) {
    let answer = 0;
    for (let i = 0; i < 500; i++) {
        if (num == 1) {
            break;
        }
        num = num % 2 == 0? num /2 : num * 3 + 1
        answer++;
    }
    return answer >= 500? -1 : answer;
}
