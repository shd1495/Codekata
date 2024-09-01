function solution(n) {
    
    // 피보나치 수열 함수
    function fibo (n) {
        if (n < 2) return n;
        
        let x = 0;
        let y = 1;
        let result = 0;
        
        for (let i = 0; i < n-1; i++) {
            result = (x + y) % 1234567;
            x = y;
            y = result;
        }
        return result;
    }
    
    return fibo(n);
}