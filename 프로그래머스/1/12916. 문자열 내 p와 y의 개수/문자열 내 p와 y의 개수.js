function solution(s){
    let p = s.toUpperCase().split('').filter((a)=> a == "P");
    let y = s.toUpperCase().split('').filter((a)=> a == "Y");
    return p.length == y.length ? true : false;
}