function solution(k, m, score) {
    let answer = 0;
    //내림차순으로 정렬
    let sortScore = score.sort((a, b) => b - a);
    let temp;
    //m만큼 배열을 자르고 i에 m만큼 더해 간격을 띄운다.
    for (let i = 0; i < score.length; i+=m) {
        temp = sortScore.slice(i, i + m);
        //자른 배열이 m보다 작으면 상자를 만들 수 없으므로 종료한다.
        if (temp.length < m) break;
        
        answer += Math.min(...temp) * m;
    }
    return answer;
}
