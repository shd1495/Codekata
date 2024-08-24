function solution(ingredient) {
    // stack에 4개 이상 쌓였을때 마지막부터 자른 4개의 연속된 숫자가
    // 1231(빵야채고기빵)이면 잘라낸 후에 answer를 카운트한다.
    
    let answer = 0;
    const burger = '1231';
    let stack = [];
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        if (stack.length >= 4 && stack.slice(-4).join('') == burger) {
            stack.splice(-4);
            answer++;
        }
    }
    return answer;
}