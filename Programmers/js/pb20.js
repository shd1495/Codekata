function solution(n) {
    //3진수변환toString(3) split reverse join 세트 parseInt(number, 3) 3진수 10진수로 변환
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}
