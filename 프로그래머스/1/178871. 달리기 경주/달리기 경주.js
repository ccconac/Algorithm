function solution(players, callings) {
    // 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부름
    // mumu, soe, poe 선수들이 순서대로 달리고 있을 때
    // 해설진이 soe 선수를 불렀다면? => soe 선수가 mumu 선수를 추월한 것
    const ranks = {};
    
    players.forEach((player, index) => ranks[player] = index);
    
    callings.forEach((calling, index) => {
        const rank = ranks[calling];
        const target = players[rank - 1];
        
        ranks[calling] -= 1;
        ranks[target] += 1;
        
        players[rank] = target;
        players[rank - 1] = calling;
    })
    
    // 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 담아 반환
    return players;
    
}