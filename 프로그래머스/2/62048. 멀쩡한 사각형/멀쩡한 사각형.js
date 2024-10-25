function solution(w, h) {
    const answer = w * h;
    let cnt = 0;
    
    for (let y = 0; y < h; y++) {
        const xStart = (y * w) / h;            
        const xEnd = ((y + 1) * w) / h;          
        cnt += Math.ceil(xEnd) - Math.floor(xStart);
    }
    
    return answer - cnt;
}