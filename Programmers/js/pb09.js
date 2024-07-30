function solution(numbers) {
    let answer = [];
    for (let i = 0; i < 10; i++) {
        answer[i] = i;
    }
    return answer.filter(x => !numbers.includes(x)).reduce((prev,next) => prev + next);
}
