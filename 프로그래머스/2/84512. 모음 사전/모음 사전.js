function solution(word) {
    // 알파벳 모음
    const str = ["A","E","I","O","U"];
    // 단어
    const dictionary = [];
    
    function words (curWord, length) {
        // 깊은 호출 방지
        if (length > 5) return;

        // 단어 추가
        if (curWord.length > 0) {
            dictionary.push(curWord)
        }
        
        // 재귀
        for (const s of str) {
            words(curWord + s, length + 1);
        }
    }
    
    words('', 0);
    return dictionary.indexOf(word) + 1;
}