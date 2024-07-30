function solution(arr, divisor) {
    let answer = [];
    
    arr.forEach((arr, i) => {
        if (arr % divisor == 0) {
            answer.push(arr);
        }
    });
    answer.length == 0 ? answer.push(-1) : answer.sort((prev, next) => prev - next);
    return answer
}
