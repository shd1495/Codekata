function solution(a, b) {
    // 요일 배열
    const strArr = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    // 2016년의 a월 b일의 date 객체 생성
    let date = new Date(2016, a-1, b);
    console.log(date);
    //date 객체에서 요일의 인덱스 값을 가져온 후 strArr에서 해당 값을 대입, 해당 요일의 문자열 반환
    return strArr[date.getDay()];
}
