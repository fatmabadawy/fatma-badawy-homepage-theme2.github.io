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
    window.location.href="./form.html";
}
function home() {
    window.location.href="./index.html";
}
function login() {
    window.location.href="";
}
function complains() {
    window.location.href="";
} 
function feedback() {
    window.location.href="./feedbacktheme1.html";
}
function theme1() {
    window.location.href="./home3.html";
}
function theme2() {
  window.location.href="./index.html";
}
function signup2() {
    window.location.href="";
}
function home2() {
    window.location.href="./home3.html";
}
function login2() {
    window.location.href="";
}
function complains2() {
    window.location.href="";
} 
function feedback2() {
    window.location.href="./feedbacktheme2.html";
}


let availableKeywords = [
    'clothes',
    'shoes',
    'skin care',
    'supermarket',
    'electronics devices',
    'electricity',
    'medical devices',
    'bags',
  ];

  const resultBox = document.querySelector(".result-box");
  const inputBox = document.getElementById("input-box");

  inputBox.addEventListener('keyup', function() { 
    let results = [];
    let input = inputBox.value.toLowerCase();
    if (input.length) {
      results = availableKeywords.filter((keyword) => {
        return keyword.toLowerCase().includes(input);
      });
      console.log(results);
    }
    display(results);
    if (!results.length) {
      resultBox.innerHTML = '';
    }
  });

  function display(results) {
    const content = results.map((list) => {
      return "<li onclick=selectinput(this)>"+list+"</li>"
    });
    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
  }

  function selectInput(list) { 
    inputBox.value = list.textContent;
    resultBox.innerHTML = '';
  }

  function goButton() {
    let search = inputBox.value.toLowerCase();
    if (search.includes('clothes'))
    {
      window.location.href = "";
    } 
    else if (search.includes('skin care'))
    {
      window.location.href = "";
    }
    else if (search.includes('shoes'))
    {
      window.location.href = "";
    }
    else if (search.includes('medical'))
    {
      window.location.href = "";
    }
    else if (search.includes('super market'))
    {
      window.location.href = "";
    }
    else if (search.includes('bags'))
    {
      window.location.href = "";
    }
    else if (search.includes('electronics'))
    {
      window.location.href = "";
    }
    else if (search.includes('electricity'))
    {
      window.location.href = "";
    }
    
  };
