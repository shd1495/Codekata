function solution(numbers) {
    const arr = numbers.map(String).sort((a,b)=>{
       return (b + a) - (a + b)
    })
    return arr[0] == "0" ? "0" : arr.join('');
}