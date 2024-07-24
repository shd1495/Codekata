function solution(a, b) {

    let answer = ( a + b ) * (Math.abs( a - b ) + 1)/2;
    
    return a === b ? a : answer;
}
