function function1() {
    alert("Added to cart");
}

function function2(){
   
    
    alert("Account made successfully.");
    
}

function show() {
    const sidebar = document.querySelector('.sidebar')  //returns the first child element that matches a specified css selector of an element
    sidebar.style.display = 'flex'; 
}
function hide() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'; 
}

function signup() {
    window.location.href="http://127.0.0.1:5500/theme2/form.html";
}
function home() {
    window.location.href="http://127.0.0.1:5500/theme2/home3.html";
}
function login() {
    window.location.href="file:///C:/Users/ms318/OneDrive/Desktop/project%201/login.html";
}
function complains() {
    window.location.href="";
}
function feedback() {
    window.location.href="file:///C:/html/men%20parts%20theme2/feedback%20theme2.html";
}
function theme1() {
      window.location.href="http://127.0.0.1:5500/IT_project/index.html";
}
function theme2() {
    window.location.href="http://127.0.0.1:5500/theme2/home3.html";
}