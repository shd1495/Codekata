function solution(s) {
    if (s.length == 4 || s.length == 6) {
        return +s == parseInt(s) ? true : false
    }
    return false;
}
