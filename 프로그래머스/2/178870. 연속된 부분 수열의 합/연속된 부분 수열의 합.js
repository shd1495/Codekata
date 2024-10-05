function solution(sequence, k) {
    const answer = [-1,-1];
    let pointer1 = 0;
    let pointer2 = 0;
    let sum = 0;
    let minLength = Infinity;
    while(1) {
        if (sum >= k) {
            if (sum == k && pointer2 - pointer1 < minLength) {
                minLength = pointer2 - pointer1;
                answer[0] = pointer1;
                answer[1] = pointer2-1;
            } 
            sum -= sequence[pointer1++];
        } else {
            if (pointer2 == sequence.length) break;
            sum += sequence[pointer2++];
        }
    }
    
    return answer;
}