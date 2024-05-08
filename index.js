function function1() {
  alert("Added to cart");
}

function function2(){
 
  
  alert("Account made successfully.");
  
}

function show() {
  const sidebar = document.querySelector('.sidebar') 
  sidebar.style.display = 'flex'; 
}
function hide() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'; 
}
function signup() {
  window.location.href="./form2.html";
}
function home() {
  window.location.href="https://fatmabadawy.github.io/fatma-badawy-homepage.github.io/index.html";
}
function login() {
  window.location.href="https://fatmabadawy.github.io/fatma-badawy-homepage.github.io/login%201.html";
}
function complains() {
  window.location.href="table/form.html";
} 
function feedback() {
  window.location.href="https://fatmabadawy.github.io/fatma-badawy-homepage.github.io/feedback%20theme1.html";
}
function theme1() {
  window.location.href="./index.html";
}
function theme2() {
window.location.href="./home3.html";
}
function signup2() {
  window.location.href="./form.html";
}
function home2() {
  window.location.href="./home3.html";
}
function login2() {
  window.location.href="./login 2.html";
}
function complains2() {
  window.location.href="";
} 
function feedback2() {
  window.location.href="./feedback theme2.html";
}

let availablekeywords1 = [
  'clothes',
  'shoes',
  'skin care',
  'supermarket',
  'electronics devices',
  'electricity',
  'medical devices',
  'books',
  'video games',
];
const resultbox=document.querySelector(".result-box");
const inputbox=document.getElementById("input-box");

inputbox.onkeyup = function()
{
  let result=[];
  let input=inputbox.value;
  if(input.length){
      result=availablekeywords1.filter((keyword)=>{
          return   keyword.toLowerCase().includes(input.toLowerCase());
      });
      console.log(result);
  }
 display(result);
  if(!result.length)
  {
      resultbox.innerHTML='';
  }
}
function display(result){
  const content = result.map((list)=>{
      return "<li onclick=selectinput(this)>"+list+"</li>";
  });
  resultbox.innerHTML="<ul>"+ content.join('') +"</ul>";
}

function selectinput(list){
  inputbox.value=list.innerHTML;
  resultbox.innerHTML='';
}
function goButton() {
    let search = inputbox.value.toLowerCase();
    if (search.includes('clothes'))
    {
      window.location.href = "clothes%20part/men%20part%20theme1.html";
    } 
    else if (search.includes('skin care'))
    {
      window.location.href = "fatma%20ayman%20theme%201/fatma%20ayman%20.html";
    }
    else if (search.includes('shoes'))
    {
      window.location.href = "shoes_page.FM/index.html";
    }
    else if (search.includes('medical'))
    {
      window.location.href = "https://fatmabadawy.github.io/mohamedabdall.github.io/";
    }
    else if (search.includes('super market'))
    {
      window.location.href = "./sm.html";
    }
    else if (search.includes('bags'))
    {
      window.location.href = "https://fatmabadawy.github.io/mazen.github.io/";
    }
    else if (search.includes('electronics'))
    {
      window.location.href = "https://fatmabadawy.github.io/Aliaamohamed-theme1.github.io/";
    }
    else if (search.includes('electricity'))
    {
      window.location.href = "https://fatmabadawy.github.io/minaayman2.github.io/product1.html";
    }
    else if (search.includes('video games'))
    {
      window.location.href = "video_games_page.FM/index.html";
    }
    
  };
