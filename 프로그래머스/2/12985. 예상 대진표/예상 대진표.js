function solution(n,a,b) {
    // n/2
    let answer = 0;
    
    while (a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2); 
        console.log(a,b);
        answer++;
    }
    
    return answer;
}