function solution(x, y, n) {

    // DP 배열 초기화 
    const dp = Array(y + 1).fill(Infinity);
    dp[x] = 0;

    for (let i = x; i <= y; i++) {
        if (dp[i] === Infinity) continue; 

        // 가능한 연산 수행
        if (i + n <= y) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        if (i * 2 <= y) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        if (i * 3 <= y) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    }

    return dp[y] === Infinity ? -1 : dp[y];
}