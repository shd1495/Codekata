function solution(today, terms, privacies) {
    // terms를 약관 종류와 보유 기간으로 분류
    // 저장된 개인 정보를 약관 종류의 보유 기간 만큼 더한 후
    // 더한 날짜가 현재 날짜보다 작거나 같을 경우(과거일 경우)
    // 그 개인 정보를 파기해야할 개인 정보(answer)에 넣는다
    
    let answer = [];
    const todayDate = new Date(today);
    const termsObj = {};
    
    for (let i of terms) {
        let [term, period] = i.split(' ');
        // 문자열을 정수로 바꿔 날짜 연산에 오류 제거
        termsObj[i[0]] = parseInt(period);
    }
    
    for (let i = 0; i < privacies.length; i++) {
        
        let [date, term] = privacies[i].split(' ');
        const priDate = new Date(date);
        // 약관 종류에 따른 보유 기간이 더해진 날짜
        priDate.setMonth(priDate.getMonth() + termsObj[term]);
        if (priDate <= todayDate) answer.push(i+1);
    }
    return answer;
}