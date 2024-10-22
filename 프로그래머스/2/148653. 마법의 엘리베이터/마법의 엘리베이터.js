function solution(storey) {
    let answer = 0;
    let round = 0;
    const arr = storey.toString().split('').map(Number);

    for (let i = arr.length-1; 0 <= i; i--) {
        const temp = arr[i] + round;

        if(temp > 5 ) {
            answer += (10 - temp);
            round = 1;
        } else if (temp === 5) {
            if (i > 0 && arr[i - 1] >= 5) {
                answer += (10 - temp);
                round = 1;
            } else {
                answer += temp;
                round = 0;
            }
        } else {
            answer += temp;
            round = 0;
        }
    }

    if (round > 0) {
        answer += round;
    }

    return answer;
}