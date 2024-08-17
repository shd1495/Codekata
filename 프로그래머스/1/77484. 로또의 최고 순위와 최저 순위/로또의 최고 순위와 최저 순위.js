function solution(lottos, win_nums) {
    function rank(x) {
        if (x < 2) return 6;
        else return 7 - x;
    }
    
    let answer = [];
    //포함된 번호의 갯수
    const includes = lottos.filter(x => win_nums.includes(x)).length;
    //알 수 없는 번호의 갯수
    const unknown = lottos.filter(x => x == 0).length;
    
    //최대 등수
    if (unknown == 0 && includes !== 0) answer.push(rank(includes));
    else answer.push(rank(includes + unknown));
    console.log(answer);
    
    //최하 등수
    answer.push(rank(includes));
    console.log(answer);
    
    return answer;
}