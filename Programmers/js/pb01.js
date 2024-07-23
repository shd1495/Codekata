function solution(n) {
    let nArray = Array.from(n.toString());
    
    nArray = nArray.sort((a,b)=>(b-a)).map(Number);
    
    let answer = parseInt(nArray.join(''));
    
    return answer;
}
