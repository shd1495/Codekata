function solution(a, b, n) {
    let answer = 0; //교환한 병의 총합
    let temp = 0; // 남은 병 수
    
    //남은 병으로 교환 할 수 없을 때 까지
    while (n >= a) {
        
        temp = n % a;
        //받은 병 수
        n = Math.floor(n / a) * b;
        
        answer += n;
        //받은 병 + 남은 병
        n += temp;
    }
    return answer;
}
