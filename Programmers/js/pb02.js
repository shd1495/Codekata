function solution(x) {
    let a = x.toString()
             .split('')
             .map(Number)
             .reduce((prev, cur)=> prev + cur);
    return x % a == 0 ? answer = true : answer = false;
}
