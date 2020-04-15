let persons=[
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
]
let max=persons.reduce((p1,p2)=>p1>p2?p1:p2);
console.log(max);

//age 최대값 사람을 찾아서 출력하는 코드를 구현하라. 