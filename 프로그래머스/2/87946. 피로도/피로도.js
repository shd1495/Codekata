function solution(k, dungeons) {
    let answer = 0;
    // 완전탐색 재귀함수
    function brute (k, cnt, visited) {
        answer = Math.max(answer, cnt);
        
        // 모든 경우의 수를 다 돌아서 가장 많이 진행한 값 갱신
        for (let i = 0; i < dungeons.length; i++) {
            if(!visited[i] && k >= dungeons[i][0]) {
                visited[i] = true; // 방문 처리
                brute(k - dungeons[i][1], cnt+1, visited)
                visited[i] = false; // 미방문 처리 (백트래킹)
            }
        }
    }
    
    const visited = Array(dungeons.length).fill(false);
    
    brute(k,0,visited);
    
    return answer;
}