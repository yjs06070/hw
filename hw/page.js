let studentCount =31;
let pageSize =10;
let n=Math.floor(studentCount/pageSize);
if(studentCount%pageSize!=0) {
    n=n+1;
}
console.log(n); 
