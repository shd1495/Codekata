function solution(nums) {
    //에라토스테네스의 체 (소수 판별 함수)
    // 2의 배수부터 i의 배수 제거
    function prime (x) {
        for (let i = 2; i * i <= x; i++) {
            if (x % i == 0) return false;
        }
        return true;
    }
    
    let answer = 0;
    let temp;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                //서로 다른 3 인덱스의 합
                temp = nums[i] + nums[j] + nums[k];
                //console.log(temp);
                if (prime(temp)) answer++;
                //console.log(answer);
            }
        }
    }
    return answer;
}