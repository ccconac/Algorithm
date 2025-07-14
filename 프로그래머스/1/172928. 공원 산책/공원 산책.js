function solution(park, routes) {
    const row = park.length;
    const column = park[0].length;
    const directions = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0],
    };

    let start = [];
    
    for (let i = 0; i < row; i += 1) {
        for (let j = 0; j < column; j += 1) {
            if (park[i][j] === 'S') {
                start = [i, j];
                break;
            }
        }
    }
    
    for (const route of routes) {
        const [direction, distanceString] = route.split(' ');
        
        let distance = Number(distanceString);
        let [nx, ny] = start;
        
        let step = 0;
        
        while (step < distance) {
            nx += directions[direction][0];
            ny += directions[direction][1];
            
            if (nx < 0 || nx >= row || ny < 0 || ny >= column || park[nx][ny] === 'X') break;
            
            step += 1;
        }
        
        if (step === distance) start = [nx, ny];
    }
    
    return start;
}