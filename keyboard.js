var curr_score="";
var curr_score1="";
var curr_score2 = "";
var flagn = true;
var flag = false;
var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
var green_color = document.querySelectorAll(".last > div");
  green_color[0].addEventListener('click',function green_display(){
    flagn==false;
    if(flag==false){
    green_color[0].style.color = "green";
      flag=true
    }
    else{
      green_color[0].style.color = "black";
      flag=false;
    }
    total();
  });
   
green_color[2].addEventListener('click',function green_display(){
    if(flag2==false){
    green_color[2].style.color = "green";
      flag2=true
    }
    else{
      green_color[2].style.color = "black";
      flag2=false;
    }
  total();
  });
green_color[3].addEventListener('click',function green_display(){
  flagn==false;
    if(flag3==false){
    green_color[3].style.color = "green";
      flag3=true
    }
    else{
      green_color[3].style.color = "black";
      flag3=false;
    }
  total();
  })
green_color[4].addEventListener('click',function green_display(){
  flagn == false;
    if(flag4==false){
    green_color[4].style.color = "green";
      flag4=true
    }
    else{
      green_color[4].style.color = "black";
      flag4=false;
    }
  total();
  })
green_color[1].addEventListener('click',function green_display(){
   green_color[1].style.color = "green";
   flag1=true;
       })

var content = document.getElementById("content");
normal();

function total(){
if(flag2==true){
  
  var val = "";
  sc1(val);
}
else{
    var val = "";
    sc(val)
  }
if(flag3==true){
  
  var val = "";
  sc2(val);
}
  
if(flag4==true){
  var arrrev = [];
  for(var i=curr_score.length; i>=0; i--){
    arrrev.push(curr_score[i]);
  }
  var rev = arrrev.join("");
  content.textContent = rev;
}
}


function normal(){
var num1 = document.querySelectorAll("#first > div:nth-child(n)");
  num1.forEach(ele=>{
    ele.addEventListener('click',function diplay_score(){
      if(flag1==false){
      var val = ele.textContent;
      console.log(val);
      if(val=="DEL"){
        del();
      }
      else{
       sc(val[1]);
      }
      }
      else if(flag1==true){
        var val = ele.textContent;
      console.log(val)
      if(val=="DEL"){
        del();
      }
      else{
       sc(val[0]);
      }
       green_color[1].style.color = "black";
       green_color[1].removeEventListener('click',function green_display(){
       
            })
        flag1=false;
      }
    })
});
var num2 = document.querySelectorAll("#sec > div:nth-child(n)");
  num2.forEach(ele=>{
    ele.addEventListener('click',function diplay_score(){
      var val = ele.textContent;
      if(flag==true){
        sc(val);
      }
      else{
        var val1 = val.toLowerCase();
        sc(val1);
      }
    })
});
var num3 = document.querySelectorAll("#third > div:nth-child(n)");
  num3.forEach(ele=>{
    ele.addEventListener('click',function diplay_score(){
      var val = ele.textContent;
      if(flag==true){
        sc(val);
      }
      else{
        var val1 = val.toLowerCase();
        sc(val1);
      }
    })
});
var num4 = document.querySelectorAll("#four > div:nth-child(n)");
  num4.forEach(ele=>{
    ele.addEventListener('click',function diplay_score(){
      var val = ele.textContent;
        if(flag==true){
        sc(val);
      }
      else{
        var val1 = val.toLowerCase();
        sc(val1);
      }
    })
})
var num5 = document.getElementById("item");
num5.addEventListener('click',function diplay_score(){
  var val = ' ';
  sc(val)
})
}
        
function sc(n){
    console.log(n);
    curr_score += n;
    content.textContent = curr_score;
}
function del(){
  var d = curr_score.length-1;
  var arr1 = [];
  for(var i=0; i<curr_score.length-1; i++){
  arr1.push(curr_score[i]);
  }
  curr_score = arr1.join("");
  content.textContent = curr_score;
}

function sc1(n){
  var arr = [];
  for(var i=0; i<curr_score.length-1; i++){
    arr.push("*")
  }
  arr.push(curr_score[curr_score.length-1]);
  curr_score1 = arr.join("");
  console.log(curr_score1)
  content.textContent = curr_score1;
}

/*function del1(){
  var d = curr_score.length-1;
  var arr1 = [];
  var arr2 =[];
  for(var i=0; i<curr_score.length-1; i++){
  arr1.push(curr_score[i]);
  }
  for(var i=0; i<curr_score.length-1; i++){
    arr2.push("*");
    }
  curr_score = arr1.join("");
  curr_score1 = arr2.join("");
  content.textContent = curr_score1;
}*/
function sc2(n){
  console.log(n);
  curr_score += n;
  var arr = ['a','*','s'];
  /*arr.push(curr_score[0])
  for(var i=1; i<curr_score.length-1; i++){
    arr.push("*")
  }
  arr.push(curr_score[curr_score.length-1])*/
  curr_score2 = arr.join("");
  console.log(curr_score2)
  content.textContent = curr_score2;
}









