function solution(priorities, location) {
    const queue = [];
    
    // 인덱스 값과 우선 순위를 같이 저장한다.
    for (let i = 0; i < priorities.length; i++) {
        queue.push({ idx: i, prioritie: priorities[i]});
    }
    
    let cnt = 0;
    let max;
    
    while (queue.length > 0) {
        max = 0;
        // 현재 프로세스 중 우선 순위가 가장 높은 프로세스의 우선 순위 값 구하기
        for (const item of queue) {
            max = Math.max(max, item.prioritie);
        }
        
        // 현재 대기 중인 큐의 우선 순위가 가장 높은 우선 순위일 경우 꺼내서 실행
        if (queue[0].prioritie === max) {
            const recent = queue.shift();
            cnt++;
            
            // 방금 실행한 프로세스가 몇번째 실행되는지 알고 싶은 프로세스면 실행 순서를 리턴
            if (recent.idx == location && recent.prioritie == max) return cnt;
        } else {
            // 가장 높은 우선 순위가 아닌 경우 마지막으로 보냄
            const temp = queue.shift();
            queue.push(temp);
        }
    }
}