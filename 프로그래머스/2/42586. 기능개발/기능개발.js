function solution(progresses, speeds) {
    const answer = [];
    // 작업 순서대로 queue 삽입
    const queue = [];
    for (let i = 0; i < speeds.length; i++) {
        queue.push({ progresse: progresses[i], speed: speeds[i]})
    }
    
    while (queue.length > 0) {
        // 완료된 작업
        let success = 0;
        // 진행도 갱신
        for (let i = 0; i < queue.length; i++) {
            queue[i].progresse += queue[i].speed;
        }

        // 진행도가 100이상이면 작업 완료 처리
        while (queue.length > 0 &&queue[0].progresse >= 100) {
            queue.shift();
            success++;
        }

        // 현재 날짜에 완료된 작업 수
        if (success > 0) {
            answer.push(success);
        }
    }
    
    return answer;
}