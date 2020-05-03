let persons=[];
let persons2=[];
for(let i=0;i<10;++i){
    let info={name: "홍길동", age: 16+i };
    Object.assign(persons,info);
    Object.assign(persons2,persons);
    console.log(persons2);
}

