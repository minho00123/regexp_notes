let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/
The quick brown fox jumped over the lazy dog.
abbcccddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
test_1
`;

// 정규식 생성 연습
// const regexp = new RegExp('the', 'gi');
// const regexp = /the/gi;
// console.log(str.match(regexp));

// 메소드 연습
// 1. test
// const regexp = /fox/gi;
// console.log(regexp.test(str)); // true 반환
// const regexp = /mino/gi;
// console.log(regexp.test(str)); // false 반환
// 2. replace
// const regexp = /fox/gi;
// console.log(str.replace(regexp, 'AAA')); // fox가 AAA로 변환

// 플래그 연습
// const regexp = /the/; // 플래그 없을 때
// const regexp = /the/g; // 일치하는 모든 내용을 찾는다.
// const regexp = /the/gi; // 일치하는 모든 내용 + 대소문자 구분 X
// console.log(str.match(regexp));
// console.log(str.match(/\.$/)); // 전체 문장이 끝나는 부분에 '.'이 있는지 찾는다.
// console.log(str.match(/\.$/gim)); // 각 줄이 끝나는 부분에 '.'이 있는지 찾는다.

// 패턴(표현) 연습
console.log(str.match(/d$/gm)); // 각 줄에서 끝이 d인 부분을 찾는다.
console.log(str.match(/^t/gm)); // 각 줄에서 첫번째가 소문자 t인 부분을 찾는다.
console.log(str.match(/./g)); // 모든 글자 하나를 출력
console.log(str.match(/h..p/g)); // h??p인 글자를 찾는다
console.log(str.match(/fox|dog/)); // fox 또는 dog를 찾는다. 둘 중 먼저 찾는 것을 반환
console.log(str.match(/https?/g)); // \?앞에 값인 s의 유무 상관없이 찾는다.
console.log(str.match(/d{2}/));
console.log(str.match(/d{2}/g));
console.log(str.match(/d{2,}/g));
console.log(str.match(/d{2,3}/g));
console.log(str.match(/\w{2,3}/g)); // \w는 숫자를 포함한 영어 알파벳을 의미
console.log(str.match(/\b\w{2,3}\b/g)); // 숫자나 영어 알바벳이 2글자 이상 3글자 이하인 글자를 찾는다. \b는 경계를 만들어주기 때문에 온전한 단어만을 출력해준다.
console.log(str.match(/[fox]/g)); // 'f', 'o', 'x' 단위로 글자를 찾는다.
console.log(str.match(/[0-9]/g));
console.log(str.match(/[0-9]{1,/g)); // 숫자 1개 이상인, 연속되는 해당 부분들을 찾는다.
console.log(str.match(/[가-힣]{1,}/g));
console.log(str.match(/\w/g));
console.log(str.match(/\bf\w{1,}\b/g)); // 소문자 영단어들을 모두 찾는다.
console.log(str.match(/\d/g));
console.log(str.match(/\d{1,}/g));
console.log(str.match(/\s/g));

// 공백 문자 활용
const h = `  the hello  world    !

`;
console.log(h.replace(/\s/g, '')); // 공백 문자들을 찾아 삭제

// 앞쪽/뒤쪽 일치 연습
console.log(str.match(/.{1,}(?=@)/g)); // @ 앞쪽의 글자만 출력
console.log(str.match(/(?<=@).{1,}/g)); // @ 뒤쪽의 글자만 출력
