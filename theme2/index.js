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
    window.location.href="form.html";
}
function home() {
    window.location.href="http://127.0.0.1:5500/theme2/home3.html";
}
function login() {
    window.location.href="fatma%20ayman%20theme%202/login%202.html";
}
function complains() {
    window.location.href="table/form.html";
}
function feedback() {
    window.location.href="feedback%20theme2.html";
}
function theme1() {
      window.location.href="http://127.0.0.1:5500/IT_project/index.html";
}
function theme2() {
    window.location.href="http://127.0.0.1:5500/theme2/home3.html";
}
