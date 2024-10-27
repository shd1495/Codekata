function solution(data, col, row_begin, row_end) {
    let answer = 0;
    const result = [];
    const sortedData = data.sort((x,y)=>  {
        if (x[col-1] === y[col-1]) {
            return y[0] - x[0];
        }
        return x[col-1] - y[col-1];
    })
    
    for (let i = row_begin-1; i < row_end; i++) {
        let temp = 0;
        for (let j = 0; j < sortedData[i].length; j++) {
            temp += sortedData[i][j] % (i+1);
        }
        result.push(temp);
    }
    
    answer = result.reduce((acc, curr) => acc ^ curr, 0);
    return answer;
}