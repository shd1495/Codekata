function solution(s){
    // 짝수가 아니면 짝이 맞을 수 없으르모 false 반환
    if (s.length % 2 !== 0) return false;
    // 여는 괄호를 추가할 배열
    const arr = [];

    // 괄호가 올바르게 열고 닫혔는지 체크하는 객체 check
    const check = {
        "(" : ")"
    };
    
    for (let i = 0; i < s.length; i++) {
        const open = s[i];
        // str[i]가 check에 값이 있을 경우 = 열린 괄호인 경우
        if (check[open]) {
            // 열린 괄호(키)의 값(닫힌 괄호)를 판별하고
            // 열린 괄호의 짝이 맞는지 확인하기 위해 arr에 추가
            arr.push(open);
        // 닫힌 괄호인 경우
        } else {
            // 마지막 열린 괄호의 짝을 확인하기 위해 pop으로 제거하고
            // close에 삽입
            const close = arr.pop();

            // check의 키(close)(여는 괄호)에 대응하는 값(닫는 괄호)인지 판별
            if (check[close] !== open) return false;
        }
    }

    return arr.length == 0;
}