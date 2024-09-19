

function solution(n, k) {
    // 소수 판별 함수
    function prime (x) {
        if (x < 2) return false;  // 1과 2 미만의 수는 소수가 아님
        if (x == 2) return true; // 2는 소수
        if (x % 2 == 0) return false; // 짝수는 소수가 아님

        for (let i = 3; i * i <= x; i += 2) {
            if (x % i == 0) return false;
        }
        return true;
    }
    let answer = 0;
    
    // 0을 기준으로 P를 나눔
    let primeArr = n.toString(k).split('0');
    
    for (let i = 0; i < primeArr.length; i++) {
        if(prime(primeArr[i])) answer++;
    }
    
    return answer;
}