function solution(food) {
    let answer = '';
    let temp = 0;
    for (let i = 0; i < food.length; i++) {
        //짝수일 경우
        if (food[i] % 2 == 0) {
            //절반만큼 만
            for (let x = 0; x < food[i]/2; x++) {
                answer+=temp;
            }
        //홀수일 경우
        } else if (food[i]  % 2 == 1) {
            //짝수로 만든 후 절반만큼 만
            for (let y = 0; y< (food[i]-1)/2; y++) {
                answer+=temp;
            }
        }
        temp++
    }
    //음식 갯수의 절반만큼 구하고  0을 붙힌 후 뒤집어 또 더 한다.
    return answer + 0 + answer.split('').reverse().join('');
}
