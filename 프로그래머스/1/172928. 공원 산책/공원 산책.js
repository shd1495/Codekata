function solution(park, routes) {
    let answer = [];
    const graph = {};
    let position = [];
    let obstacle = [];
    // S에서 시작 방향으로 이동
    // 장애물 있으면 장애물 앞에서 멈춤
    // 이동 명령이 공원 밖으로 나가는 경우 시행X
    // E = [1]+ / W = [1]- / S = [0]+  / N = [0]-
    
    // 공원을 행과 열로 저장
    for (let i = 0; i < park.length; i++) {
        graph[i] = park[i].split('');
    }
    
    // 공원에서 시작 위치와 장애물 위치를 저장
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            if (graph[i][j] == 'S') {
                position = [i, j];
            }
            if (graph[i][j] == 'X') {
                obstacle.push([i, j]);
            }
        }
    }
    
    
    for (let route of routes) {
        route = route.split(' ');
        const steps = parseInt(route[1]);
        const tempPosition = [...position];
        // 이동 실패 여부
        let failedToMove = false;
        
        // 1번씩 steps만큼 이동
        for (let step = 1; step <= steps; step++) {
            switch (route[0]) {
                case 'E':
                    tempPosition[1] += 1;
                    break;

                case 'W':
                    tempPosition[1] -= 1;
                    break;

                case 'S':
                    tempPosition[0] += 1;
                    break;

                case 'N':
                    tempPosition[0] -= 1;
                    break;
            }
            
            // 공원 밖으로 나가는 경우
            if (tempPosition[0] >= park.length || tempPosition[0] < 0 ||
                tempPosition[1] >= park[0].length || tempPosition[1] < 0) {
                failedToMove = true;
                break;
            }
            
            // 장애물이 있는 경우
            for (const obs of obstacle) {
                if (tempPosition[0] == obs[0] && tempPosition[1] == obs[1]) {
                    failedToMove = true;
                    break;
                }
            }
            if (failedToMove) break;
        }
        if (!failedToMove) position = tempPosition;
    }
    
    return position;
}