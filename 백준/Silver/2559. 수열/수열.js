const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
});

rl.on('close', () => {
  const [N, K] = input[0].split(' ').map(Number); 
  const arr = input[1].split(' ').map(Number);

  console.log(sequence(N, K, arr));
});

function sequence(N, K, arr) {
  // 윈도우의 초기값 계산
  let sum = 0;
  for (let i = 0; i < K; i++) {
    sum += arr[i];
  }

  let max = sum;

  // 최대값 갱신
  for (let i = K; i < N; i++) {
    sum += arr[i] - arr[i - K]; // 원소 추가 및 제거
    max = Math.max(max, sum);
  }

  return max;
}