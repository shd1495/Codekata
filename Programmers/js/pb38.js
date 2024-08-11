function solution(answers) {
    let answer = [];
    let answer1 = [1, 2, 3, 4, 5];
    let answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let temp1 = 0;
    let temp2 = 0;
    let temp3 = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answer1.length < answers.length) {
            answer1 = answer1.concat(answer1);
        }
        if (answer2.length < answers.length) {
            answer2 = answer2.concat(answer2);
        }
        if (answer3.length < answers.length) {
            answer3 = answer3.concat(answer3);
        }
        
        if (answers[i] == answer1[i]) temp1++;
        if (answers[i] == answer2[i]) temp2++;
        if (answers[i] == answer3[i]) temp3++;
    }
    if (temp1 >= temp2 && temp1 >= temp3) {
        answer.push(1);
    }
    if (temp2 >= temp1 && temp2 >= temp3) {
        answer.push(2);
    }
    if (temp3 >= temp1 && temp3 >= temp2) {
        answer.push(3);
    }
    return answer;
}


function solution(answers) {
    let answer = [];
    let answer1 = [1, 2, 3, 4, 5];
    let answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let temp = [0, 0, 0]
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == answer1[i % 5]) temp[0]++;
        if (answers[i] == answer2[i % 8]) temp[1]++;
        if (answers[i] == answer3[i % 10]) temp[2]++;
    }
    let a = Math.max(...temp);
    for (let i = 0; i < temp.length; i++) {
        if (a == temp[i]) answer.push(i+1);
    }
    return answer;
}
