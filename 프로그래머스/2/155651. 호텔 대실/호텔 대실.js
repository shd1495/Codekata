function solution(book_time) {
    // 시간을 분으로 변환하는 함수
    function convertToMinutes(time) {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    }

    // 예약 시간을 시작 시간 기준으로 정렬
    const sortedTimes = book_time.map(([start, end]) => [convertToMinutes(start), convertToMinutes(end)])
                                 .sort((a, b) => a[0] - b[0]);

    const rooms = [];

    // 각 예약 처리
    for (let i = 0; i < sortedTimes.length; i++) {
        const [start, end] = sortedTimes[i];
        
        // 기존 방 중에서 퇴실 시간이 가장 빠른 방 찾기
        let roomAssigned = false;
        for (let j = 0; j < rooms.length; j++) {
            // 방이 청소 후 사용 가능할 때 (청소 시간 10분 후)
            if (rooms[j] + 10 <= start) {
                // 방에 새로운 예약 배정
                rooms[j] = end;  // 방의 종료 시간을 업데이트
                roomAssigned = true;
                break;
            }
        }

        // 사용할 방이 없다면 새로운 방 추가
        if (!roomAssigned) {
            rooms.push(end);  // 새로운 방 추가
        }
    }

    // 필요한 최소 방 개수는 rooms 배열의 길이
    return rooms.length;
}