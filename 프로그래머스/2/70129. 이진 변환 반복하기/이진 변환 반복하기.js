function solution(s) {
    let cnt = 0;
    let zeroCnt = 0;
    
    // str이 1이 될 때까지 이진 변환을 반복하는 재귀함수
    function transform (str) {
        if (str == '1') {
            return;
        }
        // 삭제된 0의 갯수 카운트
        zeroCnt += str.replaceAll('1', '').length;
        // 0을 삭제하고 남은 1의 길이를 이진 변환한 값을 다시 str에 저장
        str = str.replaceAll('0', '').length.toString(2);
        cnt++;
        // 재귀
        transform(str);
    }
    
    transform(s);
    
    return [cnt, zeroCnt];
}