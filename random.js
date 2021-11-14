
//홀수 짝수 프로그래밍

const prompt = require('prompt-sync')()


//ramdom값 *100 에서 나누기2한 나머지
const num = parseInt( Math.random() * 100) %2

console.log(num)

//사용자에게 입력
const answer = prompt("ODD O? EVEN E?")

//나머지가 0이고, 사용자(user answer)가 EVEN 이면 정답
//나눈 나머지가 1이고, 사용자가 ODD 이면 정답
//둘다 아닌 그 외의 경우는 오답
const condition1 = num === 0 && answer === "E"
const condition2 = num === 1 && answer === "O"

// 맞는지 틀린지 결과
const result = condition1 || condition2 ?"정답":"오답"

console.log(`최종결과는 ${result}`)