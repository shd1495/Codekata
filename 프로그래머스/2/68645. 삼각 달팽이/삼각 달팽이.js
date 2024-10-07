function solution(n) {
    let answer = []
    let arr = Array.from({length: n}, (val, idx)=> new Array(idx+1).fill(0));
    // 좌표
    let x = 0;
    let y = -1;
    // 현재 숫자
    let num = 1;
    
    for (let i = 0; i < n; i++) {
        for (let j = i; j<n; j++) {
            // 아래로
            if (i % 3 === 0) {
                y++;
            // 옆으로
            } else if (i % 3 === 1) {
                x++;
            // 위로
            } else {
                y--;
                x--;
            }
            arr[y][x] = num;
            num++;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        answer = [...answer, ...arr[i]]
    }
    
    return answer;
}