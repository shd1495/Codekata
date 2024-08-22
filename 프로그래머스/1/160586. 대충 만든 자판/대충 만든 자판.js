function solution(keymap, targets) {
    let answer = [];
    // memoization 객체
    const cnt = {};
    // keymap 안의 각 알파벳의 최소 누르는 횟수를 구한다.
    keymap.forEach(key => {
        key.split('').forEach((x, idx) => {
            // 객체 안에 알파벳 별 누르는 횟수를 저장한다.
            // index + 1 = 누르는 횟수
            cnt[x] = cnt[x] < idx + 1 ? cnt[x] : idx + 1; 
        })
    });
    console.log(cnt);
    
    for (const target of targets) {
        // 타겟의 각 요소를 다시 한 문자씩 자른다
        const a = target.split('');
        console.log(a);
        let temp = 0;
        
        for (const b of a) {
            console.log(cnt[b]);
            // 타겟의 문자가 객체에 있으면 누르는 횟수를 카운트한다.
            temp += cnt[b];
        }
        answer.push(temp)
    }
    // 타겟의 문자가 없으면 NaN 값이 들어가므로 targets을 만들 수 없다.
    answer = answer.map(x => isNaN(x) ? -1 : x);
    console.log(answer);
    return answer;
}