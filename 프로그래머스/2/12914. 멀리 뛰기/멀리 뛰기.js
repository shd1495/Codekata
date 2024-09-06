function solution(n) {
    // 피보나치 수열과 유사
    // n까지 도달하기 위한 방법의 수는
    // n-1칸까지 도달하기 위한 방법의 수 + n-2칸까지 도달하기 위한 방법의 수
    const arr = Array(n+1).fill(0);
    arr[1] = 1; // n = 1일때 방법의 수 초기화
    arr[2] = 2; // n = 2일때 방법의 수 초기화
    
    for (let i = 3; i <= n; i++) {
        arr[i] = (arr[i-1] + arr[i-2]) % 1234567; // 모듈러 연산
    }
    
    return arr[n];
}