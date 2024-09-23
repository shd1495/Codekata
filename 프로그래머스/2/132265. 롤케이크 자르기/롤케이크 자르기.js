function solution(topping) {
    let answer = 0;
    const me = new Set();
    const bro = new Set();
    
    const meCount = Array(topping.length).fill(0);
    const broCount = Array(topping.length).fill(0);
    
    // 나의 토핑 가짓수
    for (let i = 0; i < topping.length; i++) {
        me.add(topping[i]);
        meCount[i] = me.size;
    }
    
    // 동생의 토핑 가짓수
    for (let i = topping.length - 1; i >= 0; i--) {
        bro.add(topping[i]);
        broCount[i] = bro.size;
    }
    
    // 토핑 가짓수가 같은지 확인
    for (let i = 0; i < topping.length - 1; i++) {
        if (meCount[i] === broCount[i + 1]) {
            answer++;
        }
    }
    
    return answer;
}