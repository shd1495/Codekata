function solution(picks, minerals) {
  let answer = 0;
  let mineralSort = [];

  let ableDigAmount = Math.min(picks.reduce((acc, val) => acc + val) * 5, minerals.length);
  let diaCnt = 0, ironCnt = 0, stoneCnt = 0;

  for (let i = 0; i < ableDigAmount; i++) {
    if (minerals[i] === 'diamond') {
      diaCnt += 1;
    } else if (minerals[i] === 'iron') {
      ironCnt += 1;
    } else if (minerals[i] === 'stone') {
      stoneCnt += 1;
    }

    if ((i + 1) % 5 === 0 || i === ableDigAmount - 1) {
      mineralSort.push([diaCnt, ironCnt, stoneCnt]);
      diaCnt = 0;
      ironCnt = 0;
      stoneCnt = 0;
    }
  }

  mineralSort.sort((a, b) => {
    return (b[0] - a[0]) || (b[1] - a[1]) || (b[2] - a[2]);
  });
    
  console.log(mineralSort);

  let i = 0;
  for (let [diaCnt, ironCnt, stoneCnt] of mineralSort) {
    while (picks[i] === 0) {
      i += 1;
    }

    if (i === 0) {
      answer += (diaCnt + ironCnt + stoneCnt);
    } else if (i === 1) {
      answer += (diaCnt * 5 + ironCnt + stoneCnt);
    } else if (i === 2) {
      answer += (diaCnt * 25 + ironCnt * 5 + stoneCnt);
    }

    picks[i] -= 1;
  }

  return answer;
}