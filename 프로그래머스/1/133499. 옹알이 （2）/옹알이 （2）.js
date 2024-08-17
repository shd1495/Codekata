function solution(babbling) {
    let answer = 0;
    let temp;
    // 발음 할 수 있는 단어
    const dict = ["aya", "ye", "woo", "ma"];
    
    for (let i = 0; i < babbling.length; i++) {
        temp = 0;
        temp = babbling[i];
        for (let j = 0; j < dict.length; j++) {
            //연속될 경우 스킵
            if (babbling[i].includes(dict[j] + dict[j])) continue;
            //주어진 단어에 발음할 수 있는 단어가 있는지 확인
            if (babbling[i].includes(dict[j])) {
                //발음 할 수 있는 단어가 있으면 발음 할 수 있는 단어만 제거
                //남는 단어는 발음 못하는 단어
                //공백을 넣어 남은 단어가 합쳐서 발음할 수 있는 단어가 될 경우를 방지
                temp = temp.replaceAll(dict[j], ' ');
            }
        }
        //공백 제거
        temp = temp.replaceAll(' ', '');
        //남는 단어가 없을 경우만 발음할 수 있는 단어로 갯수 카운트
        if (temp.length == 0) answer++;
    }
    return answer;
}