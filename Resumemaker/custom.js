// $(document).ready(function(){
//   $('#templ1').click(function(){
//     $('#content1').printThis();
//   });
// });

// $(document).ready(function(){
//   $('#templ2').click(function(){
//     $('#content2').printThis();
//   });
// });

// $(document).ready(function(){
//   $('#templ3').click(function(){
//     $('#content3').printThis();
//   });
// });

function printcv1(){
document.getElementById("namet111").innerHTML=document.getElementById("namefield").value;
document.getElementById("namet1111").innerHTML=document.getElementById("namefield").value;
document.getElementById("addresst111").innerHTML=document.getElementById("addressfield").value;
document.getElementById("mobilet111").innerHTML=document.getElementById("mobilefield").value;
document.getElementById("emailt111").innerHTML=document.getElementById("emailfield").value;
document.getElementById("dobt111").innerHTML=document.getElementById("dobfield").value;
document.getElementById("fathert111").innerHTML=document.getElementById("fatherfield").value;
document.getElementById("mothert111").innerHTML=document.getElementById("motherfield").value;
document.getElementById("nationalityt111").innerHTML=document.getElementById("nationalityfield").value;
document.getElementById("gendert111").innerHTML=document.getElementById("genderfield").value;
document.getElementById("maritalt111").innerHTML=document.getElementById("maritalfield").value;
document.getElementById("languaget111").innerHTML=document.getElementById("languagefield").value;
document.getElementById("hobbiest111").innerHTML=document.getElementById("hobbiesfield").value;
document.getElementById("careert111").innerHTML=document.getElementById("careerfield").value;
document.getElementById("aqt111").innerHTML=document.getElementById("aqfield").value;
document.getElementById("pqt111").innerHTML=document.getElementById("pqfield").value;
document.getElementById("wet111").innerHTML=document.getElementById("wefield").value;

// setting image

let file = document.getElementById("imgfield").files[0];
console.log(file);

let reader = new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);

reader.onloadend = function () 
{
  document.getElementById("imgt1111").src = reader.result;
};
document.getElementById("frontform").style.display='none';
document.getElementById("cvform").style.display='none';
document.getElementById("cvformtemplate3").style.display='none';
document.getElementById("cvformtemplate2").style.display='none';
document.getElementById("cvformtemplate1").style.display='none';
document.getElementById("cvformtemplate22").style.display='none';
document.getElementById("cvformtemplate32").style.display='none';
document.getElementById("cvformtemplate12").style.display='block';
  $('#content1').printThis();
}

// print cv template 2

function printcv2(){
document.getElementById("namet121").innerHTML=document.getElementById("namefield").value;
document.getElementById("namet1221").innerHTML=document.getElementById("namefield").value;
document.getElementById("addresst121").innerHTML=document.getElementById("addressfield").value;
document.getElementById("mobilet121").innerHTML=document.getElementById("mobilefield").value;
document.getElementById("emailt121").innerHTML=document.getElementById("emailfield").value;
document.getElementById("dobt121").innerHTML=document.getElementById("dobfield").value;
document.getElementById("fathert121").innerHTML=document.getElementById("fatherfield").value;
document.getElementById("mothert121").innerHTML=document.getElementById("motherfield").value;
document.getElementById("nationalityt121").innerHTML=document.getElementById("nationalityfield").value;
document.getElementById("gendert121").innerHTML=document.getElementById("genderfield").value;
document.getElementById("maritalt121").innerHTML=document.getElementById("maritalfield").value;
document.getElementById("languaget121").innerHTML=document.getElementById("languagefield").value;
document.getElementById("hobbiest121").innerHTML=document.getElementById("hobbiesfield").value;
document.getElementById("careert121").innerHTML=document.getElementById("careerfield").value;
document.getElementById("aqt121").innerHTML=document.getElementById("aqfield").value;
document.getElementById("pqt121").innerHTML=document.getElementById("pqfield").value;
document.getElementById("wet121").innerHTML=document.getElementById("wefield").value;

// setting image

let file = document.getElementById("imgfield").files[0];
console.log(file);

let reader = new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);

reader.onloadend = function () 
{
  document.getElementById("imgt121").src = reader.result;
};
document.getElementById("frontform").style.display='none';
document.getElementById("cvform").style.display='none';
document.getElementById("cvformtemplate3").style.display='none';
document.getElementById("cvformtemplate2").style.display='none';
document.getElementById("cvformtemplate1").style.display='none';
document.getElementById("cvformtemplate12").style.display='none';
document.getElementById("cvformtemplate32").style.display='none';
document.getElementById("cvformtemplate22").style.display='block';
  $('#content2').printThis();
}

// print cv template 3

function printcv3(){
document.getElementById("namet131").innerHTML=document.getElementById("namefield").value;
document.getElementById("namet1331").innerHTML=document.getElementById("namefield").value;
document.getElementById("addresst131").innerHTML=document.getElementById("addressfield").value;
document.getElementById("mobilet131").innerHTML=document.getElementById("mobilefield").value;
document.getElementById("emailt131").innerHTML=document.getElementById("emailfield").value;
document.getElementById("dobt131").innerHTML=document.getElementById("dobfield").value;
document.getElementById("fathert131").innerHTML=document.getElementById("fatherfield").value;
document.getElementById("mothert131").innerHTML=document.getElementById("motherfield").value;
document.getElementById("nationalityt131").innerHTML=document.getElementById("nationalityfield").value;
document.getElementById("gendert131").innerHTML=document.getElementById("genderfield").value;
document.getElementById("maritalt131").innerHTML=document.getElementById("maritalfield").value;
document.getElementById("languaget131").innerHTML=document.getElementById("languagefield").value;
document.getElementById("hobbiest131").innerHTML=document.getElementById("hobbiesfield").value;
document.getElementById("careert131").innerHTML=document.getElementById("careerfield").value;
document.getElementById("aqt131").innerHTML=document.getElementById("aqfield").value;
document.getElementById("pqt131").innerHTML=document.getElementById("pqfield").value;
document.getElementById("wet131").innerHTML=document.getElementById("wefield").value;

// setting image

let file = document.getElementById("imgfield").files[0];
console.log(file);

let reader = new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);

reader.onloadend = function () 
{
  document.getElementById("imgt131").src = reader.result;
};
document.getElementById("frontform").style.display='none';
document.getElementById("cvform").style.display='none';
document.getElementById("cvformtemplate3").style.display='none';
document.getElementById("cvformtemplate2").style.display='none';
document.getElementById("cvformtemplate1").style.display='none';
document.getElementById("cvformtemplate12").style.display='none';
document.getElementById("cvformtemplate22").style.display='none';
document.getElementById("cvformtemplate32").style.display='block';
  $('#content3').printThis();
}