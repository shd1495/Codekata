function solution(left, right) {
    let answer = 0;
    for (left; left <= right; left++) {
        let temp = [];
        
        for (let i = 1; i <= left; i++) {
            if (left % i == 0) temp.push(i);
        }
        
        if (temp.length % 2 == 0) answer+=left;
        else answer-=left;
    }
    return answer;
}
