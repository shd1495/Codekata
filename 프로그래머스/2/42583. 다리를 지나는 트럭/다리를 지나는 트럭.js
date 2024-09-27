function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let queue = Array(bridge_length).fill(0);

    while (queue.length) {
        queue.shift();
        answer++;

        if (truck_weights.length) {
            let sum = queue.reduce((pre, curr) => pre + curr, 0);
          if (sum + truck_weights[0] <= weight) {
            queue.push(truck_weights.shift());
          } else {
            queue.push(0);
          }
        }
      }
    return answer;
}