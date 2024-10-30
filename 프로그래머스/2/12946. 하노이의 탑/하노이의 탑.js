function solution(n) {
    let moves = [];
    function hanoi(n, curr, next, middle, moves) {
        if (n == 1)  {
            moves.push([curr, next]);
        } else {
            hanoi(n-1, curr, middle, next, moves);
            moves.push([curr, next]);
            hanoi(n-1, middle, next, curr, moves);
        }
    }
    hanoi(n, 1, 3, 2, moves);
    return moves;
}