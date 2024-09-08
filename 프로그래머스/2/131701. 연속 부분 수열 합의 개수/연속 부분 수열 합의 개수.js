function solution(elements) {
    // 원형 수열
    const circle = elements.concat(elements);
    // 수열의 합의 가지 수
    const sequence = new Set();
    
    for (let i = 1; i <= elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            // 윈도우
            const window = circle.slice(j, j+i);
            // 윈도우 내부 숫자들의 합
            const sum = window.reduce((acc, cur)=> acc + cur, 0);
            sequence.add(sum);
        }
    }
    return sequence.size;
}