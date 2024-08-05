function solution(array, commands) {
    let answer = [];
    for (let x = 0; x < commands.length; x++) {
        let [i, j, k] = commands[x];
        let temp = array.slice(i-1, j).sort((prev, next) => prev - next);
        answer.push(temp[k-1]);
        console.log(answer);
    }
    return answer;
}
