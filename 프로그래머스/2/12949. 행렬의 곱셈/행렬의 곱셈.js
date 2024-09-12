function solution(arr1, arr2) {
    // 행렬의 곱 [[a1, a2] [a3, a4]] [[b1, b2] [b3, b4]]
    // [a1*b1 + a2*b3, a1*b2 + a2*b4]
    const answer = [];
    let result;
    let multiple;
    for(let i = 0; i < arr1.length; i++) {
        result = [];
        for(let j = 0; j < arr2[0].length; j++) {
            multiple = 0;
            for(let k = 0; k < arr2.length; k++) {
                multiple += (arr1[i][k] * arr2[k][j]);
            }
            result.push(multiple);
        }
        answer.push(result)
    }
    return answer;
}