let s= "When I find myself in times of trouble Mather Mary comes to me Speaking words of wisdom, let it be.";
let n=["a","e","i","o","u"];
for(let i=0;i<n.length;i++){
    n[i]= console.log(s.search(/[a-z]*i[a-z]*/i));
}
// /[a-z]*n[a-z]*/i
// /i\w/i