function solution(id_list, report, k) {
    const answer = [];
    // 신고 내역에 중복값 제거
    const reported = Array.from(new Set(report));
    // 정지된 id
    const banned = [];
    
    // 결과 메일
    const result = {};
    for (const id of id_list) {
        result[id] = [];
    }
    
    // 신고 횟수 계산
    // 누가 누구를 신고했는지
    let temp = [];
    for (let id of reported) {
        id = id.split(' ');
        temp.push(id[1])
        result[id[0]].push(id[1]);
    }
    
    // 신고 횟수에 따라 아이디 정지
    for (let id of id_list) {
        let ban = temp.filter(x => x == id);
        if (ban.length >= k) banned.push(ban[0]);
    }
    
    // 신고 내역에 있는 정지된 아이디의 갯수
    for (let id of id_list) {
        let reportId = result[id].filter(x => x = banned.includes(x));
        answer.push(reportId.length);
    }
    
    return answer;
}