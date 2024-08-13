function solution(n, m, section) {
    let answer = 0;
    let temp = 0;
    section.forEach(a => {
        //현재 요소가 칠한 벽인지 판별
        //칠한 벽보다 작으면 칠한다.
        if (a > temp) {
            //칠한 벽
            temp = a + (m - 1);
            answer++;
        }
    });
    return answer;
}