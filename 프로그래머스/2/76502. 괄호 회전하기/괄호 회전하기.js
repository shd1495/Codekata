function solution(s) {
    let answer = 0;
    // 길이가 홀수면 올바른 괄호가 되지 못하므로 0
    if (s.length % 2 !== 0) return 0;
    
    // 괄호 체크 stack
    const check = {
        "[": "]",
        "{": "}",
        "(": ")"
    }
    for (let i = 0; i < s.length; i++) {
        const bracket = s;
        const stack = [];
        for (let j = 0; j < bracket.length; j++) {
            const open = bracket[j];
            if (check[open]) {
                stack.push(open);
            } else {
                const close = stack.pop();

                if (check[close] !== open) break;
            }
            if (j == s.length-1) answer++;
        }
        // s의 첫 요소
        let temp = s.slice(0,1)
        // 첫 요소를 제외한 s + 첫 요소 = 한 칸씩 이동 = 회전
        s = s.slice(1) + temp;
    }
    return answer;
}