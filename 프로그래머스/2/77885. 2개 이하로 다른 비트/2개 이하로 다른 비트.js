function solution(numbers) {
    const answer = [];
    
    for (const num of numbers) {
        if (num % 2 === 0) {
            answer.push(num+1)
        } else {
            let bit = "0" +num.toString(2);
            let idx = bit.lastIndexOf("0");
            const str = bit.slice(1,idx)+"1"+"0"+bit.slice(idx+2)
            answer.push(parseInt(str,2));
        }
    }
    return answer;
}