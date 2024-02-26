// 08_Code_100_3.js
// TODO: 진법 : 2진수/8진수/16진수/10진수
// 10진수 : 0 ~ 9 숫자로 표기
//          10 ~ 19 
//          20 ~ 29
//  2진수 : 0 , 1 만으로 표시
// 예) 2진수 표기 : 0 -> 0
//                 1 -> 1
//                 2 -> 10
// 예제) 진법 변환 : 10진수 -> 8진수 변환
// TODO: 사용법 : 숫자 -> 문자열 변경 
// TODO: 10진수 -> ?진수 변경
// TODO: 숫자.toString(진수); // 진수로 바뀐 숫자문자열
// let num = 12;
// alert(num.toString(16)); // 16진수 숫자문자열 

// TODO: ?진수 -> 10진수로 변경
// Number() : 문자열 -> 숫자 변경
// TODO: 사용법 : parseInt(숫자, 진수표시) => 결과가 10진수로 나옴
// let char = 10; // 16진수 
// alert(parseInt(char, 16)); // 16진수 -> 10진수로 변경

// 📃 1031) 퀴즈
// 8진수로 출력하시요
// 입력 : 10
// 출력 : 12
// let num = Number(prompt("1개 숫자")); // 10
// // TODO: 숫자.toString(진수) // 숫자 -> 문자열로 변경
// alert(num.toString(8)); // "12"

// 📃 1032) 퀴즈
// 16진수로(소문자) 출력하시요
// 입력 : 255
// 출력 : ff
// let num = Number(prompt("1개 숫자")); // 255
// // TODO: 숫자.toString(진수) // 숫자 -> 문자열로 변경
// alert(num.toString(16)); // "ff"


// 📃 1033) 퀴즈
// 16진수로(대문자) 출력하시요
// 입력 : 255
// 출력 : FF
// TODO : 힌트 : 문자열.toUpperCase(); => 대문자로 변경
// let result = "f"
// alert(result.toUpperCase()); // F
// let num = Number(prompt("1개 숫자")); // 255
// // TODO: 숫자.toString(진수) // 숫자 -> 문자열로 변경
// let char = num.toString(16); // "ff"
// alert(char.toUpperCase());   // "FF"

// 📃 1034) 퀴즈
// 8진수 10진수로 출력하시요
// 입력 : 13
// 출력 : 11
// let num = prompt("1개 숫자"); // "13"
// // TODO: 사용법 : parseInt(숫자, 특정진수) => 10진수 숫자
// // TODO: 사용법 : parseInt(문자열, 특정진수) => 10진수 숫자
// // 1) 숫자 -> 숫자(특정 진수의)
// // 2) 문자열 -> 숫자 
// alert(parseInt(num, 8)); // 11

// 📃 1035) 퀴즈
// 16진수 8진수로 출력하시요
// 입력 : f
// 출력 : 17
// let num = prompt("1개 숫자"); // "f"
// // 문자열 -> 숫자 (특정 진수의) 변경
// let num2 = parseInt(num, 16); // 15
// // 10진수 -> 8진수로 변경
// alert(num2.toString(8));      // 17

// TODO: 아스키 코드표
// 컴퓨터는 0, 1의 숫자만 인식함
// 아스키 코드표 : 숫자와 문자를 연결한 표 
// 예제 1) 문자 -> 아스키코드
// let char = "C";
// TODO: 사용법 : 문자열.charCodeAt(배열인덱스번호)
// alert(char.charCodeAt(0)); // 67

// 예제 2) 아스키코드 -> 문자
// let num = 67; // 아스키코드
// // TODO: 사용법 : String.fromCharCode(숫자); 
// alert(String.fromCharCode(num)); // "C"

// 📃 1036) 퀴즈
// 문자를 아스키코드 숫자값으로 출력한다.
// 입력 : A
// 출력 : 65
// let char = prompt("1개 입력");  // A
// // TODO: 사용법 : 문자.charCodeAt(배열인덱스번호);
// alert(char.charCodeAt(0));      // 65

// 📃 1037) 퀴즈
// 아스키코드 값을 문자로 출력한다.
// 입력 : 65
// 출력 : A
// let num = Number(prompt("1개 숫자"));  // 65
// alert(String.fromCharCode(num));       // A


// 📃 1038) 퀴즈
// 두 정수의 합을 출력한다.
// 입력 : 123 -123
// 출력 : 0
// num[0] = "123", num[1] = "-123"
// let num = prompt("2개 숫자").split(" "); // 
// let first = Number(num[0]);    // 123
// let second = Number(num[1]);   // -123

// alert(first + second);         // 0

// 📃 1039) 퀴즈
// 두 정수의 합을 출력한다.
// 입력 : 2147483648 2147483648
// 출력 : 4294967296
// let num = prompt("2개 숫자").split(" "); // 2147483648 2147483648
// let first = Number(num[0]);    // 2147483648
// let second = Number(num[1]);   // 2147483648

// alert(first + second);         // 4294967296

// 📃 1040) 퀴즈
// 부호를 바꿔 출력한다.
// 입력 : -1
// 출력 : 1
// let num = Number(prompt("숫자 입력")); // -1
// alert(num * -1); // 1

// 📃 1042) 퀴즈
// 정수 2개 입력된다. a를 b로 나눈 몫을 출력한다.
// 입력 : 1 3
// 출력 : 0
// 힌트 : 산술연산 : a/b => 실수(정수.소수점) : 정수(몫)
//  parseInt() : 1) 문자열 -> 숫자 변경
//               2) 숫자   -> ?진수의 숫자 변경
//          위의 숫자(정수) * => 예) parseInt(1.234) => 1(결과)
// num[0] = 1, num[1] = 3
// let num = prompt("정수 2개").split(" ");
// // 임시변수 활용 => 문자열 -> 정수 변환
// let first  = Number(num[0]); 
// let second = Number(num[1]); 
// // 나눈 결과 : 정수만 취함 : 몫
// alert(parseInt(first/second)); // 정수(몫)

// 📃 1043) 퀴즈
// 정수 2개 입력된다. a를 b로 나눈 나머지를 출력한다.
// 입력 : 10 3
// 출력 : 1
// TODO: 힌트 : % (나머지 연산자)
// num[0]=10, num[1]=3
// let num = prompt("정수 2개").split(" ");
// // 임시변수 활용: 문자열 -> 숫자 변경
// let first = Number(num[0]);
// let second = Number(num[1]);

// alert(first%second);

// 📃 1044) 퀴즈
// 입력된 정수에 1을 더해 출력한다.
// 입력 : 2147483647
// 출력 : 2147483648
// let num = Number(prompt("정수 1개"));
// alert(num + 1);

// 📃 1045) 퀴즈
// 정수 2개 입력받아 자동 계산하기
// 첫 줄에 합 (+)
// 둘째 줄에 차, (-)
// 셋째 줄에 곱, (*)
// 넷째 줄에 몫, (parseInt(), /)
// 다섯째 줄에 나머지, (%)
// 입력 : 10 3
// 출력 : 13
//        7
//        30
//        3
//        1
// let num = prompt("숫자 2개").split(" ");
// // 임시변수 : 문자열 -> 숫자 변경
// let first  = Number(num[0]); // 10
// let second = Number(num[1]); // 3
// // 사칙연산 + 나머지 연산
// let plus    = (first + second) + "\n"; 
// let minus   = (first - second) + "\n"; 
// let multy   = (first * second) + "\n"; 
// let divide  = (parseInt(first / second)) + "\n"; // 몫(정수) 
// let rest    = (first % second) + "\n";
// // 결과 출력
// alert(plus + minus + multy + divide + rest); 

// 📃 1046) 퀴즈
// 정수 3개 입력받아 합과 평균 출력하기
// 입력 : 1 2 3
// 출력 : 6
//       2
// TODO: 3개값의합/3 = 평균
// num[0]="1", num[1]="2", num[2]='3'
// let num    = prompt("숫자 3개").split(" ");
// let first  = Number(num[0]); //1
// let second = Number(num[1]); //2
// let third  = Number(num[2]); //3
// // 결과 계산 : 합
// let sum = first + second + third;
// // 평균
// let avg = sum/3;
// // 결과 출력
// alert(sum + "\n" + avg);

// 📃 1047) 퀴즈
// 정수 1개 입력받아 2배 곱해 출력하기(설명)
// 입력 : 1024
// 출력 : 2048
let num = Number(prompt("정수 1개")); // 1024
alert(num * 2);