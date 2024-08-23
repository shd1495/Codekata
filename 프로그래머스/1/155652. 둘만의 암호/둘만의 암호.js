function solution(s, skip, index) {
    // a부터 5만큼 뒤에 있는 알파벳 = a의 아스키코드 + 5
    // a와 a+5 사이에 skip이 포함되어 있으면 포함된만큼 건너뛰기
    
    let answer = '';
    // s의 아스키코드
    const strCharCode = s.split('').map(x=> x.charCodeAt());
    
    // skip의 아스키코드
    const skipCharCode = skip.split('').map(x=> x.charCodeAt());
    
    
    const str = strCharCode.map( x => {
        let temp = 0;
        while (temp < index) {
            x++;
            
            // z를 넘어서면 a부터
            if (x > 122) x -= 26;
            
            // s와 s + index의 사이에 skip이 있다면 건너뛰기
            if (!skipCharCode.includes(x)) temp++;
        }
        return x;
    });
    
    // 아스키코드를 다시 알파벳으로
    answer = String.fromCharCode(...str);
    return answer;
}