function solution(number, limit, power) {
    let answer = 0;
    let arr = [];
    let temp;
    
    // 1부터 number까지 숫자의 약수를 구하고 2차원 배열로 만든다.
    for (let i = 1; i <= number; i++) {
        temp = [];
        // 약수는 자신을 제외하고 n/2보다 클 수 없다.
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                temp.push(j);
                // d가 n의 약수이면 n/d도 n의 약수이다.
                if (i / j !== j) temp.push(i / j);
            }
        }
        arr.push(temp);
    }
    
    
    // 각 기사의 약수를 구한 배열의 길이로 공격력을 구하고
    // 제한을 넘을 경우 협약 기관에서 정한 수치로 바꾼다.
    for (let i = 0; i < number; i++) {
        temp = 0;
        arr[i].length > limit ? temp = power : temp = arr[i].length;
        answer += temp;
    }
    return answer;
}