function solution(players, callings) {
    // 선수의 이름과 등수를 map으로 저장
    const playersMap = new Map();
    
    for (let i = 0; i < players.length; i++) {
        playersMap.set(players[i], i);
    }
    
    // 호명된 선수를 등수를 map에서 찾는다.
    for (let i = 0; i < callings.length; i++) {
        //console.log(playersMap.get(callings[i]));
        let idx = playersMap.get(callings[i]);
        // 호명된 선수와 앞 선수의 등수를 바꾼다.
        let temp = players[idx - 1];
        
        players[idx - 1] = players[idx];
        players[idx] = temp;
        
        // 바뀐 등수를 map에도 반영한다.
        playersMap.set(players[idx - 1], idx-1);
        playersMap.set(players[idx], idx);
    }
    
    return players;
}