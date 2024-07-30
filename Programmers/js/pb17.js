function solution(arr1, arr2) {
    let answer = [[]];
    if(arr1.length <= 500 && arr2.length <= 500) {
        
        for (let i = 0; i < arr1.length; i++) {
            
            answer[i] = [];
            for (let j = 0; j < arr1[0].length; j++) {
                answer[i][j] = arr1[i][j] + arr2[i][j];
            }
        }
    }
    return answer;
}
