let a=[];
for(let i=0;i<100;++i){
    a[i]=Math.floor(Math.random()*100+1);
    if(a[i]%2!=0){
        console.log(a[i]);
    }
}