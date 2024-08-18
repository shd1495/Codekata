function solution(X, Y) {
    //공통으로 나타나는 정수 중 같은 정수만
    //같은 정수라도 공통되는 갯수만큼만
    //공통으로 나온 정수를 오름차순으로 정렬해서 가장 큰 정수로 만들기
    //공통 정수가 없으면 -1
    let answer = '';
    
    //0 ~ 9까지의 각 숫자의 빈도를 저장할 배열 생성
    let countX = Array(10).fill(0);
    let countY = Array(10).fill(0);
    
    //X의 각 요소의 갯수만큼 같은 인덱스의 값 ++
    for (let x of X) {
        countX[x]++;
    }
    //Y의 각 요소의 갯수만큼 같은 인덱스의 값 ++
    for (let y of Y) {
        countY[y]++;
    }
    
    //X Y에 공통 요소 중 빈도가 작은 쪽을 사용
    let temp;
    for (let i = 0; i < 10; i++) {
        temp = Math.min(countX[i], countY[i]);
        //i의 빈도 수만큼 i를 문자열로 붙임 
        if (temp !== 0) answer += i.toString().repeat(temp);
    }
    
    //내림차순 정렬
    answer = answer.split('').sort((a,b) => b-a).join('');
    //answer가 없으면 -1
    if (answer === '') answer = '-1';
    //첫번째 요소가 0이면 0이 연속되었으므로 0만
    else if (answer[0] == 0) answer = '0';
    
    return answer;
}