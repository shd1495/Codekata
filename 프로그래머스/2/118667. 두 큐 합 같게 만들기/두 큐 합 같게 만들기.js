function solution(queue1, queue2) {
    let sum1 = queue1.reduce((acc,cur)=>acc+cur,0);
    let sum2 = queue2.reduce((acc,cur)=>acc+cur,0);
    const half = (sum1+sum2)/2
    const lens = [...queue1, ...queue2]
    let pointer1 = 0;
    let pointer2 = queue1.length;
    for (let i = 0; i < queue1.length * 3; i++) {
        if (sum1 === half) {
            return i;
        }
        sum1 = sum1 > half ?
            sum1 - lens[pointer1++ % lens.length] : 
            sum1 + lens[pointer2++ % lens.length];
    }
    return -1;
}