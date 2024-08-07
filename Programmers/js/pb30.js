function solution(numbers) {
    let temp = [];
    for (let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if (i !== j) temp.push(numbers[i] + numbers[j]);
        }
        
    }
    const answer = [...new Set(temp)];
    return answer.sort((a,b) => a - b);
}
