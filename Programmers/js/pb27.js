function solution(s) {
    let temp = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i = 0; i < temp.length; i++) {
        s = s.replaceAll(temp[i], i);
    }
    return +s;
}
