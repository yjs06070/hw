let persons1={ };
function createPerson(s,i){
    return{name:s,age:i};
}
for(let i=0;i<10;i++){
persons1[i]=createPerson("홍길동",16);
console.log(persons1[i]);
}
let persons2=JSON.parse(JSON.stringify(persons1));
console.log(persons2);
/*let persons2=Object.assign({ },persons1);
console.log(persons2);*/

//personArray1.js와 동일한 방법으로 persons1 배열을 생성
//persons1 배열을 복제해서 persons2 배열을 생성
//persons2 배열을 새로 배열을 만들어서, persons1배열의 값들을 복사.
//deep copy가 되도록 복제해야한다.
//즉, 배열만 복제되는 것이 아니고, 배열이 참조하는 객체들도 복제되어야 한다.
//persons2 출력