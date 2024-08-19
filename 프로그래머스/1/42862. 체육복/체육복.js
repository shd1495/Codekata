function solution(n, lost, reserve) {
    // 번호는 체격순, 여분을 가져온 학생이 있고 
    // 앞번호 or 뒷번호 학생에게만 체육복을 빌려줄 수 있음
    // 체육복이 있어야만 수업에 참여 가능. 최대한 많은 학생이 수업에 참여
    
    // 여분을 가져왔지만 도난당하지 않은 학생들만 모음.
   const lostStudent = lost.filter(x => !reserve.includes(x))
                            .sort((x,y)=> x - y);
    const reserveStudent = reserve.filter(x => !lost.includes(x))
                                  .sort((x,y)=> x - y);
    
    // 전체 학생 수 - 도난당한 학생 = 수업에 참여하는 학생
    let answer = n - lostStudent.length;
    
    let front;
    let back;
    
    // 도난당한 학생이 여분을 빌릴 수 있는지 확인
    for (let i = 0; i < lostStudent.length; i++) {
        
        front = reserveStudent.indexOf(lostStudent[i]-1);
        back = reserveStudent.indexOf(lostStudent[i]+1);
        
        // 도난당한 학생의 앞자리에 여분이 있을 경우
        // 빌려준 학생 배열에서 제거 answer++
        if (front > -1) {
            reserveStudent.splice(front, 1);
            answer++;
            
        // 도난당한 학생의 뒷자리에 여분이 있을 경우
        // 빌려준 학생 배열에서 제거 answer++
        } else if (back > -1) {
            reserveStudent.splice(back, 1);
            answer++;
        }
        
    }
    return answer;
}
