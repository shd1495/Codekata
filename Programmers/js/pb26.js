//1
function solution1(s, n) {
  
    let temp = s.split('').map(x => x.charCodeAt());
    
    let answer = temp.map(x => x !== 32 ?
                          ((x >=65 && x <= 90) && x+n > 90 || x+n > 122 ?
                           (x+n)-26 : x+n)
                          : 32);
  
    return answer.map(x => String.fromCharCode(x)).join('');
}

//2
function solution2(s, n) {
  
    const ff = function (x) {
        if (x !== 32) {
            if (((x >=65 && x <= 90) && x+n > 90) || x+n > 122) return (x+n)-26;
            else return x+n;
        } else {
            return 32;
        }
    }
    let temp = s.split('').map(x => x.charCodeAt());
    
    let answer = temp.map(x => ff(x)).map(x => String.fromCharCode(x)).join('');
  
    return answer;
}
