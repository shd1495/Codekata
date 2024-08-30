function solution(s) {
    let answer = '';
    const a = s.split(' ');
    answer = Math.min(...a) + ' ' + Math.max(...a);
    return answer;
}