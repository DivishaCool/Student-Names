var studentNameArray=[];
function submit() {
var name1 = document.getElementById("student_name1").value;
var name2 = document.getElementById("student_name2").value;
var name3 = document.getElementById("student_name3").value;
var name4 = document.getElementById("student_name4").value;

studentNameArray.push(name1);
studentNameArray.push(name2);
studentNameArray.push(name3);
studentNameArray.push(name4);

document.getElementById("display_name").innerHTML=studentNameArray;

document.getElementById("sub_btn").style.display="none";
document.getElementById("sort_btn").style.display="inline-block";



}

function sorting(){
    studentNameArray.sort();
    document.getElementById("display_name").innerHTML=studentNameArray;

    document.getElementById("sub_btn").style.display="inline-block";
    document.getElementById("sort_btn").style.display="none";
}



