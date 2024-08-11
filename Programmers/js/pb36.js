//answer1
function solution(cards1, cards2, goal) {
    // 카드1 or 카드2의 첫 값을 무조건 사용
    // 첫 값과 goal 값 비교, 맞으면 진행 / 없으면 no
    let answer = 'Yes';
    let temp;
    
    while (goal) {
        temp = 0;
        if (cards1[0] == goal[0]) {
            goal.shift();
            cards1.shift();
            temp++;
        } else if (cards2[0] == goal[0]) {
            goal.shift();
            cards2.shift();
            temp++;
        }
        
        if (goal.length === 0) {
            answer = 'Yes';
            break;
        } else if (temp == 0) {
            answer = 'No';
            break;
        }
    }
    return answer;
}

//answer2
function solution(cards1, cards2, goal) {
    // 카드1 or 카드2의 첫 값을 무조건 사용
    // 첫 값과 goal 값 비교
    for (let i of goal) {
        if (cards1[0] == i) cards1.shift();
        else if (cards2[0] == i) cards2.shift();
        else return 'No';
    }
    return 'Yes';
}
