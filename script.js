function addNewAQField() {
  // console.log("adding new field");

let newNode=document.createElement('textarea'); 
newNode.classList.add('form-control'); 
newNode.classList.add('Academic');
newNode.classList.add('mt-1');
newNode.setAttribute("rows", 2);

let aqOb = document.getElementById('aq');
let aqAddButtonOb=document.getElementById('aqAddButton');

aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewPQField() {
  // console.log("adding new field");

let newNode=document.createElement('textarea'); 
newNode.classList.add('form-control'); 
newNode.classList.add('Professional');
newNode.classList.add('mt-1');
newNode.setAttribute("rows", 2);

let pqOb = document.getElementById('pq');
let pqAddButtonOb=document.getElementById('pqAddButton');

pqOb.insertBefore(newNode, pqAddButtonOb);
}

function addNewWEField() {
  // console.log("adding new field");

let newNode=document.createElement('textarea'); 
newNode.classList.add('form-control'); 
newNode.classList.add('Workexperience');
newNode.classList.add('mt-1');
newNode.setAttribute("rows", 2);

let weOb = document.getElementById('we');
let weAddButtonOb=document.getElementById('weAddButton');

weOb.insertBefore(newNode, weAddButtonOb);
}

function homepagefront(){
document.getElementById("cvform").style.display='none';
document.getElementById("cvformtemplate3").style.display='none';
document.getElementById("cvformtemplate2").style.display='none';
document.getElementById("cvformtemplate1").style.display='none';
document.getElementById("frontform").style.display='block';

}

function cvgenerateform(){
document.getElementById("frontform").style.display='none';
document.getElementById("cvformtemplate3").style.display='none';
document.getElementById("cvformtemplate2").style.display='none';
document.getElementById("cvformtemplate1").style.display='none';
document.getElementById("cvformtemplate12").style.display='none';
document.getElementById("cvformtemplate22").style.display='none';
document.getElementById("cvformtemplate32").style.display='none';
document.getElementById("cvform").style.display='block';

}




function generatecv1() {
document.getElementById("namet1").innerHTML=document.getElementById("namefield").value;
document.getElementById("namet11").innerHTML=document.getElementById("namefield").value;
document.getElementById("addresst1").innerHTML=document.getElementById("addressfield").value;
document.getElementById("mobilet1").innerHTML=document.getElementById("mobilefield").value;
document.getElementById("emailt1").innerHTML=document.getElementById("emailfield").value;
document.getElementById("dobt1").innerHTML=document.getElementById("dobfield").value;
document.getElementById("fathert1").innerHTML=document.getElementById("fatherfield").value;
document.getElementById("mothert1").innerHTML=document.getElementById("motherfield").value;
document.getElementById("nationalityt1").innerHTML=document.getElementById("nationalityfield").value;
document.getElementById("gendert1").innerHTML=document.getElementById("genderfield").value;
document.getElementById("maritalt1").innerHTML=document.getElementById("maritalfield").value;
document.getElementById("languaget1").innerHTML=document.getElementById("languagefield").value;
document.getElementById("hobbiest1").innerHTML=document.getElementById("hobbiesfield").value;
document.getElementById("careert1").innerHTML=document.getElementById("careerfield").value;
document.getElementById("aqt1").innerHTML=document.getElementById("aqfield").value;
document.getElementById("pqt1").innerHTML=document.getElementById("pqfield").value;
document.getElementById("wet1").innerHTML=document.getElementById("wefield").value;

// setting image

let file = document.getElementById("imgfield").files[0];
console.log(file);

let reader = new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);

reader.onloadend = function () 
{
  document.getElementById("imgt1").src = reader.result;
};
document.getElementById("frontform").style.display='none';
document.getElementById("cvform").style.display='none';
document.getElementById("cvformtemplate3").style.display='none';
document.getElementById("cvformtemplate2").style.display='none';
document.getElementById("cvformtemplate12").style.display='none';
document.getElementById("cvformtemplate22").style.display='none';
document.getElementById("cvformtemplate32").style.display='none';
document.getElementById("cvformtemplate1").style.display='block';

// printing of cv

// $(document).ready(function(){
//   $('#templ1').click(function(){
//     $('#content1').printThis();
//   });
// });



}

function generatecv2() {
document.getElementById("namet2").innerHTML=document.getElementById("namefield").value;
document.getElementById("namet12").innerHTML=document.getElementById("namefield").value;
document.getElementById("addresst2").innerHTML=document.getElementById("addressfield").value;
document.getElementById("mobilet2").innerHTML=document.getElementById("mobilefield").value;
document.getElementById("emailt2").innerHTML=document.getElementById("emailfield").value;
document.getElementById("dobt2").innerHTML=document.getElementById("dobfield").value;
document.getElementById("fathert2").innerHTML=document.getElementById("fatherfield").value;
document.getElementById("mothert2").innerHTML=document.getElementById("motherfield").value;
document.getElementById("nationalityt2").innerHTML=document.getElementById("nationalityfield").value;
document.getElementById("gendert2").innerHTML=document.getElementById("genderfield").value;
document.getElementById("maritalt2").innerHTML=document.getElementById("maritalfield").value;
document.getElementById("languaget2").innerHTML=document.getElementById("languagefield").value;
document.getElementById("hobbiest2").innerHTML=document.getElementById("hobbiesfield").value;
document.getElementById("careert2").innerHTML=document.getElementById("careerfield").value;
document.getElementById("aqt2").innerHTML=document.getElementById("aqfield").value;
document.getElementById("pqt2").innerHTML=document.getElementById("pqfield").value;
document.getElementById("wet2").innerHTML=document.getElementById("wefield").value;

// setting image

let file = document.getElementById("imgfield").files[0];
console.log(file);

let reader = new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);

reader.onloadend = function () 
{
  document.getElementById("imgt2").src = reader.result;
};
document.getElementById("frontform").style.display='none';
document.getElementById("cvform").style.display='none';
document.getElementById("cvformtemplate3").style.display='none';
document.getElementById("cvformtemplate1").style.display='none';
document.getElementById("cvformtemplate2").style.display='block';

}

function generatecv3() {
document.getElementById("namet3").innerHTML=document.getElementById("namefield").value;
document.getElementById("namet13").innerHTML=document.getElementById("namefield").value;
document.getElementById("addresst3").innerHTML=document.getElementById("addressfield").value;
document.getElementById("mobilet3").innerHTML=document.getElementById("mobilefield").value;
document.getElementById("emailt3").innerHTML=document.getElementById("emailfield").value;
document.getElementById("dobt3").innerHTML=document.getElementById("dobfield").value;
document.getElementById("fathert3").innerHTML=document.getElementById("fatherfield").value;
document.getElementById("mothert3").innerHTML=document.getElementById("motherfield").value;
document.getElementById("nationalityt3").innerHTML=document.getElementById("nationalityfield").value;
document.getElementById("gendert3").innerHTML=document.getElementById("genderfield").value;
document.getElementById("maritalt3").innerHTML=document.getElementById("maritalfield").value;
document.getElementById("languaget3").innerHTML=document.getElementById("languagefield").value;
document.getElementById("hobbiest3").innerHTML=document.getElementById("hobbiesfield").value;
document.getElementById("careert3").innerHTML=document.getElementById("careerfield").value;
document.getElementById("aqt3").innerHTML=document.getElementById("aqfield").value;
document.getElementById("pqt3").innerHTML=document.getElementById("pqfield").value;
document.getElementById("wet3").innerHTML=document.getElementById("wefield").value;

// setting image

let file = document.getElementById("imgfield").files[0];
console.log(file);

let reader = new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);

reader.onloadend = function () 
{
  document.getElementById("imgt3").src = reader.result;
};
document.getElementById("frontform").style.display='none';
document.getElementById("cvform").style.display='none';
document.getElementById("cvformtemplate1").style.display='none';
document.getElementById("cvformtemplate2").style.display='none';
document.getElementById("cvformtemplate3").style.display='block';

}