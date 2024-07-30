function solution(n, m) {
    let answer = [];
    let gcd = 0;
    //두 수를 i로 나눴을 때 둘 다 나머지가 0이면 공약수
    for (let i = 1; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            gcd=i;
        }
    }
    answer.push(gcd);
    //두 수를 곱하고 최대 공약수로 나누면 최소 공배수
    answer.push((n*m)/gcd);
    return answer;
}
