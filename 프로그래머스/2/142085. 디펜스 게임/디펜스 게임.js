function solution(n, k, enemy) {
    const canDefend = (round) => {
        const subArray = enemy.slice(0, round); // 해당 라운드까지의 적 배열 가져오기
        subArray.sort((a, b) => b - a); // 내림차순 정렬

        let requiredSoldiers = 0;
        for (let i = k; i < subArray.length; i++) {
            requiredSoldiers += subArray[i];
        }

        return requiredSoldiers <= n; // 병사로 처리 가능한지 확인
    };

    let left = 0;
    let right = enemy.length;

    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        if (canDefend(mid)) {
            left = mid; // 더 많은 라운드를 막을 수 있는지 확인
        } else {
            right = mid - 1; // 라운드 수를 줄임
        }
    }

    return left;
}