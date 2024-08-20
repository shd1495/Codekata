function solution(s) {
    // 문자열을 규칙에 따라 분해
    // 첫글자 x와 x가 아닌 글자의 빈도 체크 처음으로 같아지는 순간 문자열 분리
    // 남은 부분 위 과정 반복  
    
    // x 첫 글자 : 빈도 수/ other 다른 글자 : 빈도 수
    let obj = {x : 0, other : 0, answer : 0};
    
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        // 현재 요소가 x와 같으면 x++ 아니면 other++
        if (s[i] == s[0]) {
            obj.x++;
        } else {
            obj.other++;
        }
        
        // x와 other의 빈도 수가 같아지면
        if (obj.x == obj.other) {
            // 현재 요소 i까지 문자열의 첫 요소 제거를 반복한다.
            for (let j = 0; j <= i; j++) {
                s.shift();
            }
            // 분해된 문자열 갯수 추가 및 초기화
            obj.answer++;
            i = -1;
            obj.x = 0;
            obj.other = 0;
        }
    }
    // 문자가 남았을 경우 분해된 문자열 갯수 추가
    if (obj.x + obj.other !== 0) obj.answer++;
    return obj.answer;
}
