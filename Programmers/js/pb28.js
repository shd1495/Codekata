function solution(strings, n) {
    return strings.sort((prev, next) => {
        if(prev[n] > next[n] || (prev[n] == next[n] && prev > next)) return 1;
        else if (prev[n] < next[n] || (prev[n] == next[n] && prev < next)) return-1;
    });
}
