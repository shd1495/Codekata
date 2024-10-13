function solution(k, d) {
    let count = 0;
    const maxX = Math.floor(d / k);
    
    for (let i = 0; i <= maxX; i++) {
        // 피라고라스 정리 a^2 + b^2 = c^2
        const x = i*k;
        const y = Math.sqrt(d*d - x*x);
        const maxY = Math.floor(y / k);
        count += (maxY + 1);
    }
    return count;
}