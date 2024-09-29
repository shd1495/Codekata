function solution(numbers) {
    // 소수 판별 함수
    function isPrime(num) {
        if (num < 2) return false; 
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true; 
    }

    // 가능한 조합의 숫자 생성 함수
    function generateNumbers(digits) {
        const results = new Set();
        
        const generateCombinations = (current, used) => {
            if (current.length > 0) {
                results.add(Number(current));
            }

            for (let i = 0; i < digits.length; i++) {
                if (used[i]) continue; // 이미 사용한 숫자는 건너뛰기
                used[i] = true; 
                generateCombinations(current + digits[i], used); 
                used[i] = false; 
            }
        }

        generateCombinations('', Array(numbers.length).fill(false));
        return [...results];
    }
    const num = numbers.split('').sort();
    
    const possibleNumbers = generateNumbers(num);
    const primeNumbers = possibleNumbers.filter(isPrime);
    return primeNumbers.length;
}