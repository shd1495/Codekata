function solution(clothes) {
    // 카테고리별 갯수 구하기
    const kind = {};
    for (const clothe of clothes) {
        if (!kind[clothe[1]]) {
            kind[clothe[1]] = 1;
        } else {
            kind[clothe[1]] += 1;
        }
    }
    
    // (종류 x 종류 x ...) - 1 = 가능한 조합 수
    let answer = 0;
    for (const el in kind) {
        if (answer == 0) {
            answer = kind[el]+1;
        } else {
            answer *= kind[el]+1;
        }
    }
    return answer - 1;
}