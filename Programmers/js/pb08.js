function solution(phone_number) {
    let answer = Array.from(phone_number);
    
    for (let i = 0; i < answer.length - 4; i++) {
        answer[i] = '*';
    }
    
    return answer.join('');
}
