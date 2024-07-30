function solution(s) {
    let answer = Array.from(s)
                      .sort()
                      .reverse()
                      .join('');
    return answer;
}
