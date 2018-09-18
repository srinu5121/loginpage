var students = [{name:"nirosha", class:"btech" }, {name:"madhuri", class:"mba"}, {name:"hari", class:"mca"}];
var studentsInfo = [{name:"hari", rollno: 210,}, {name:"nirosha", rollno:215},
  {name:"madhuri", rollno:551}];
for(i=0;i<students.length;i++){
   for(j=0;j<studentsInfo.length;j++){

     if(students[i].name == studentsInfo[j].name) {
       students[i].rollno = studentsInfo[j].rollno;
     }
   }
}
console.log(students)
var nietos = [];
var obj = {};
obj["01"] = nietos.label;
obj["02"] = nietos.value;
nietos.push(obj);
var nietos = [];
nietos.push({"01": nieto.label, "02": nieto.value});
return nietos;

var n=8;
var op="";
while(n){
if(n%2!==0){
op=op.concat(1);
}
else{
op=op.concat(0);
}
n=Math.floor(n/2);
}
console.log(op);
var bin=op.split("");
var rev=bin.reverse();
var j=rev.join("");
console.log(j)
