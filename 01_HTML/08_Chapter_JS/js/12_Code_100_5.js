// 12_Code_100_5.js
// 📃 1059) 퀴즈
// 비트단위로 NOT 하여 출력하기(설명)
// 힌트 : ~ (비트의 값을 반전시킴)
// 비트 단위로 1 -> 0, 0 -> 1로 바꾼 후 그 값을 10진수로 출력한다.
// 입력 : 2
// 출력 : -3
// let num = Number(prompt("정수 1개"));
// alert(~num); // -3

// 📃 1060) 퀴즈
// 비트단위로 AND 하여 출력하기(설명)
// 힌트 : 2 & 3 (같은 비트몀 1 , 다른 비트면 0으로 바꾸어 출력됨)
// 입력 : 3 5
// 출력 : 1
// num[0]="3", num[1]="5"
// let num = prompt("정수 2개").split(" ");
// let first  = Number(num[0]); // 3
// let second = Number(num[1]); // 5

// alert(first & second);

// 📃 1061) 퀴즈
// 두 정수를 비트단위(bitwise)로 or 계산을 수행한 결과를 10진수로 출력한다.
// 힌트 : 2 | 3 (둘중에 하나라도 1이면 1 , 아니면 0으로 바꾸어 출력됨)
// 입력 : 3 5
// 출력 : 7
// num[0]="3", num[1]="7"
// let num    = prompt("정수 2개").split(" ");
// let first  = Number(num[0]); // 3
// let second = Number(num[1]); // 7
// alert(first | second);

// 📃 1062) 퀴즈
// 비트단위로 XOR(^) 하여 출력하기(설명)
// 힌트 : 2 3 (같은 비트몀 0 , 다른 비트면 1으로 바꾸어 출력됨)
// 입력 : 3 5
// 출력 : 6
// num[0]="3", num[1]="5"
// let num    = prompt("정수 2개").split(" ");
// let first  = Number(num[0]); // 3
// let second = Number(num[1]); // 5
// alert(first ^ second);

// 📃 1063) 퀴즈
// 두 정수 중 큰 값을 10진수로 출력한다.
// 입력 : 123 456
// 출력 : 456
// let num    = prompt("정수 2개").split(" ");
// let first  = Number(num[0]); // 123
// let second = Number(num[1]); // 456
// TODO: 조건문 #1
// if(first > second) {
//     alert(first);
// } else if(first < second){
//     alert(second);
// }

// TODO: Math.max(숫자1, 숫자2 ...) : 수학 js 함수(최대값 구하기) #2
// alert(Math.max(first, second));

// 📃 1064) 퀴즈
// 정수 3개 입력받아 가장 작은 수 출력하기(설명)
// 가장 작은 값을 출력한다.
// 입력 : 3 -1 5
// 출력 : -1
// TODO: 힌트 : 최소값 구하는 js 함수 : Math.min(숫자,숫자2,...) 사용법
let num    = prompt("정수 2개").split(" ");
let first  = Number(num[0]); // 3
let second = Number(num[1]); // -1
let third  = Number(num[2]); // 5

// TODO: 수학 js 함수 : Math.min(숫자,숫자2,...)
alert(Math.min(first, second, third)); // -1