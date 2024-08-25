function solution(wallpaper) {
    // wallpaper[i][j]에서 #이 포함된 제일 작은 i값, 제일 큰 i값을 구한다. 세로 넓이
    // #이 포함된 제일 작은 j값, 제일 큰 j값을 구한다. 가로 넓이
    let answer = [];
    let rangeWidth = [];
    let rangeHeight = [];
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[0].length; j++) {
            if (wallpaper[i][j] == '#') {
                rangeWidth.push(j);
                rangeHeight.push(i);
            }
        }
    }
    // 시작점
    answer.push(Math.min(...rangeHeight));
    answer.push(Math.min(...rangeWidth));
    
    // 끝점
    answer.push(Math.max(...rangeHeight) + 1);
    answer.push(Math.max(...rangeWidth)+ 1);
    return answer;
}