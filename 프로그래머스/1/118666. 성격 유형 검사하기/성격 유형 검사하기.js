function solution(survey, choices) {
    // 주어진 유형 2개 점수가 중 높은 쪽을 구한다.
    let answer = '';
    // 유형의 점수를 저장할 객체
    const result = {
        R : 0, T : 0,
        C : 0, F : 0,
        J : 0, M : 0,
        A : 0, N : 0,
    };
    
    // 유형별 점수를 계산
    for (let i = 0; i < survey.length; i++) {
        let temp = survey[i].split('');
        if (choices[i] < 4) {
            result[temp[0]] += Math.abs(choices[i] - 4);
        }
        else if (choices[i] > 4) {
            result[temp[1]] += Math.abs(choices[i] - 4);
        } 
    }
    
    // 유형의 점수가 높은 쪽을 결과에 더한다.
    result.R >= result.T ? answer += 'R' : answer += 'T';
    
    result.C >= result.F ? answer += 'C' : answer += 'F';
    
    result.J >= result.M ? answer += 'J' : answer += 'M';
    
    result.A >= result.N ? answer += 'A' : answer += 'N';
    
    return answer;
}