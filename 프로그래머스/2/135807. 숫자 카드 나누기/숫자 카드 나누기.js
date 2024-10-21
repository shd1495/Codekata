function solution(arrayA, arrayB) {
    // 한 배열의 모든 요소를 나눌 수 있으나 다른 배열은 나눌 수 없는 최대 공약수 구하기
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    // 각 배열의 최대 공약수 구하기
    let gcdA = arrayA.reduce((acc, curr) => gcd(acc, curr), arrayA[0]);
    let gcdB = arrayB.reduce((acc, curr) => gcd(acc, curr), arrayB[0]);
    
    // 다른 배열이 나누어지는지 구하기
    let resultA = arrayB.every(num => num % gcdA !== 0) ? gcdA : 0;
    let resultB = arrayA.every(num => num % gcdB !== 0) ? gcdB : 0;
    
    return Math.max(resultA, resultB);
}