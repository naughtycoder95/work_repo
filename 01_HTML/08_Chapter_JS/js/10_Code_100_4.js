// 10_Code_100_4.js
// 📃 1049) 퀴즈
// 두 정수(a,b) 입력받아 비교하기1(설명)
// a가 b보다 큰 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 : 9 1
// 출력 : 1
// num[0]="9", num[1]="1"
// let num = prompt("정수 2개").split(" ");
// // 임시변수 : 문자열 -> 숫자
// let a  = Number(num[0]); // 9
// let b = Number(num[1]); // 1

// // 조건식 : if/else 문
// if(a > b) {
//     alert(1);
// } else {
//     alert(0);
// }

// 📃 1050) 퀴즈
// 두 정수 (a,b) 입력받아 비교하기2(설명)
// a와 b의 값이 같은 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 : 0 0
// 출력 : 1
// num[0]="0", num[1]="0"
// let num = prompt("정수 2개").split(" ");
// // 임시변수 : 문자열 -> 숫자
// let a  = Number(num[0]); // 0
// let b = Number(num[1]); // 0

// if(a == b) {
//     alert(1);
// } else {
//     alert(0);
// }

// 📃 1051) 퀴즈
// 두 정수 입력받아 비교하기3(설명)
// b가 a보다 크거나 같은 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 : 0 -1
// 출력 : 0
// // num[0]="0", num[1]="-1"
// let num = prompt("정수 2개").split(" ");
// // 임시변수 : 문자열 -> 숫자
// let a  = Number(num[0]); // 0
// let b = Number(num[1]); // -1

// // 조건문
// if(b >= a) {
//     alert(1);
// } else {
//     alert(0);
// }

// 📃 1052) 퀴즈
// 두 정수 입력받아 비교하기4(설명)
// a와 b가 다른 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 : 0 1
// 출력 : 1
// num[0]="0", num[1]="1"
// let num = prompt("정수 2개").split(" ");
// // 임시변수 : 문자열 -> 숫자
// let a  = Number(num[0]); // 0
// let b = Number(num[1]);  // 1

// // 조건문 
// // TODO: !=(같지 않음)
// if(a != b) {
//     alert(1);
// } else {
//     alert(0);
// }

// 📃 1053) 퀴즈
// 참 거짓 바꾸기(설명)
// 입력된 값이 0이면 1, 1이면 0을 출력한다.(단, 0 또는 1 만 입력된다.)
// 입력 : 1
// 출력 : 0
// let num = Number(prompt("정수 1개"));
// // 조건문
// if(num == 0) {
//     alert(1);
// } else {
//     alert(0)
// }

// 📃 1054) 퀴즈
// 둘 다 참(1)일 경우에만 1을 출력하고, 그 외의 경우에는 0을 출력한다.
// 입력 : 1 0
// 출력 : 0
// TODO: 힌트 : 비교연산자(>=, ==), 논리연산자(&&(and,그리고), ||(or, 이거나))
// num[0] = "1", num[1] = "0"
// let num = prompt("정수 2개").split(" ");
// // 임시변수 : 문자열 -> 숫자
// let first  = Number(num[0]); // 1
// let second = Number(num[1]); // 0

// // TODO: 조건문 
// // 1) first 와 , second 가 1인지 각각 비교
// //   (first == 1)  => true/false
// //   (second == 1) => true/false
// // 2) 위의 결과를 다시 &&(and) 연산해서 결과를 나타냄
// if((first == 1) && (second == 1)) {
//     alert(1);
// } else {
//     alert(0);
// }


// 📃 1055) 퀴즈
// 하나라도 참이면 참 출력하기(설명)
// 하나라도 참(1)일 경우 1을 출력하고, 그 외의 경우에는 0을 출력한다.
// 입력 : 1 0
// 출력 : 1
// TODO: 힌트 : 비교연산자(>=, ==), 논리연산자(&&, ||)
// // num[0] = "1", num[1] = "0"
// let num = prompt("정수 2개").split(" ");
// let first  = Number(num[0]); // 1
// let second = Number(num[1]); // 0
// // 조건문
// // 1) first == 1 , second == 1 각각 비교 => 결과 : true/false
// // 2) 위의 각 결과 다시 ||(or, 이거나) 연산 => 결과 : true/false
// if((first == 1) || (second == 1)) {
//     alert(1);
// } else {
//     alert(0);
// }

// 📃 1056) 퀴즈
// 참(1)/거짓(0)이 서로 다를 때에만 1을 출력하고, 그 외의 경우에는 0을 출력한다.
// 입력 : 1 1
// 출력 : 0
// num[0]="1" , num[1]="1"
// let num = prompt("정수 2개").split(" ");
// // 임시변수 : 문자열 -> 숫자
// let first  = Number(num[0]); // 1
// let second = Number(num[1]); // 1
// // 조건문
// if(first != second) {
//     alert(1);
// } else {
//     alert(0);
// }

// 📃 1057) 퀴즈
// 참(1)/거짓(0)이 서로 같을 때에만 참(1) 출력하기
// 입력 : 0 0
// 출력 : 1
// num[0]="0" , num[1]="0"
// let num = prompt("정수 2개").split(" ");
// // 임시변수 : 문자열 -> 숫자
// let first  = Number(num[0]); // 0
// let second = Number(num[1]); // 0
// // 조건문
// if(first == second) {
//     alert(1);
// }


// 📃 1058) 퀴즈
// 둘 다 거짓(0)일 경우에만 1을 출력하고, 그 외의 경우에는 0을 출력한다.
// 입력 : 0 1
// 출력 : 0
// TODO: 힌트 : 비교연산자(>=, ==), 논리연산자(&&, ||)
// // num[0]="0", num[1]="1"
// let num = prompt("정수 2개").split(" ");

// let first  = Number(num[0]); //0
// let second = Number(num[1]); //1
// // 1) first, second 각각 0인지 비교
// // 2) 위의 결과를 다시 &&(and, 그리고) 연산 결과 도출
// // 조건문
// if(first==0 && second==0) {
//     alert(1);
// } else {
//     alert(0);
// }