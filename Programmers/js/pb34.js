function solution(k, score) {
    let answer = [];
    let arr = []; // 하나씩 넣을 새 배열
    let temp = []; // 내림차순으로 정렬된 배열
    for (let i = 0; i < score.length; i++) {
        arr.push(score[i]);
        //배열을 내림차순으로 정렬 후 k의 길이 만큼만 자른다.
        temp = arr.sort((a,b) => b - a).slice(0, k);
        //자른 배열에서 최솟값을 구해서 answer에 하나 씩 넣는다. 전개 연산자 사용
        answer.push(Math.min(...temp));
    }
    return answer;
}
