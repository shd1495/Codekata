function solution(citations) {
    // h-index 논문의 피인용수를 내림차순으로 정렬한 후
    // 발표 논문수와 같아지거나 작아지기 시작하는 수
    let answer = 0;
    citations = citations.sort((x,y)=> y - x);

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] > i) answer++;
        else break;
    }
    return answer;
}