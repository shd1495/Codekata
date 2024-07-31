function solution(s) {
    let arr = s.split(' ').map((x) => {
        let temp = "";
        for (let i = 0; i < x.length; i++) {
            if (i % 2 === 0) {
                temp += x[i].toUpperCase();
            } else {
                temp += x[i].toLowerCase();
            }
        }
        return temp;
    });
    return arr.join(' ');
}
