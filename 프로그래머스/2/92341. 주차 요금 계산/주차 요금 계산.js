function solution(fees, records) {
    var answer = [];
    // 차량별 주차 시간
    const parkingTimes = {}
    // 차량별 입차 시간
    const inTimes = {}
    
    for (let record of records) {
        let [time, car, inout] = record.split(' ');
        const [hour, minute] = time.split(':');
        time = +hour * 60 + +minute;
        
        if (inout == "IN") {
            inTimes[car] = time;
        } else {
            const inTime = inTimes[car];
            const outTime = time;
            delete inTimes[car];
            
            // 주차 시간 계산
            if (!parkingTimes[car]) parkingTimes[car] = 0;
            parkingTimes[car] += (outTime - inTime);
        }
    }
    
    // 23시 59분까지 출차하지 않은 차량 계산
    for (const car in inTimes) {
        const inTime = inTimes[car];
        
        let time = "23:59";
        const [ hour, minute ] = time.split(':');
        time = +hour * 60 + +minute;
        const outTime = time;
        
        if (!parkingTimes[car]) parkingTimes[car] = 0;
        parkingTimes[car] += (outTime - inTime);
        
    }
    
    // 주차시간에 따라 요금 계산
    const result = Object.keys(parkingTimes).sort().map(car => {
        const [basicTime, basicFee, unitTime, unitFee] = fees;
        // 주차 시간이 기본 시간보다 작거나 같으면 기본 요금 
        if (parkingTimes[car] <= basicTime) {
            return basicFee;
        } else {
            const extraTime = parkingTimes[car] - basicTime;
            const extraFee = Math.ceil(extraTime / unitTime) * unitFee;
            return basicFee + extraFee;
        }
    });
    
    return result;
}