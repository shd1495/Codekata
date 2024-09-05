function solution(arr) {
    // 세 수의 최대 공배수는 두 수의 최대 공배수와 나머지 수의 최대 공배수이다.
    // 배열을 순회하며 최대 공배수를 갱신한다.
    
    // 두 수의 최대 공약수를 구하는 함수 유클리드 호제법
    function gcdF (a, b) {
        let result = 0;
        while (b !== 0) {
            result = a % b;
            a = b;
            b = result;
        }
        return a;
    }
    
    let gcd = arr[0];
    let lcm = arr[0];
    // 최대 공배수 = 두 수의 곱 / 두 수의 최대 공약수
    arr.forEach(x => {
        gcd = gcdF(lcm, x);
        lcm = lcm * x / gcd;
    })
    
    return lcm;
}