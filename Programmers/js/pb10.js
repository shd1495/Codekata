function solution(arr) {
    let answer = arr.filter(x => x !== Math.min(...arr));
    return arr.length <= 1 ? [-1] : answer;
}
