//Global variables
const projectsMinContainer =  document.getElementById('projects-minimized-container');
const projectsExpandContainer =  document.getElementById('projects-expanded-container');
const projectExpand1Btn =  document.getElementById('expand-btn-1');
const projectExpand2Btn =  document.getElementById('expand-btn-2');
const projectExpand3Btn =  document.getElementById('expand-btn-3');
const projectCloseBtn = document.getElementById('projects-close-btn');
const formBtn = document.getElementById('contact-btn');
const formError = document.getElementById('contact-error');
const formSuccess = document.getElementById('contact-success');
const projectFilterSelect = document.getElementById('project-filter');
const darkModeBtn = document.getElementById('dark-mode-btn');

//Functions
function expandProject(num){
    let selectedProject = document.getElementById('projects-expanded-'+num);

    projectsMinContainer.style.display = 'none';
    projectsExpandContainer.style.display = 'block';
    selectedProject.style.display = 'block';
    projectFilterSelect.style.display = 'none';
}

function minimizeProjects(){
    for(let i = 1; i < 4; i++){
        document.getElementById('projects-expanded-'+i).style.display = 'none';
    }

    projectsExpandContainer.style.display = 'none';
    projectsMinContainer.style.display = 'flex';
    projectFilterSelect.style.display = '';
}

function showError(errorMsg){
    formError.style.display = 'block';
    errorMsg = "<b>Error:</b> "+errorMsg;
    formError.innerHTML += errorMsg;
}

function validName(){
    let name = document.getElementById('firstname').value;
    if(name.length < 3){
        showError("Your name must be at least three characters long!");
        return false;
    }

    if(name.length > 100){
        showError("Your name must be less than 100 characters long!");
        return false;
    }

    return true;
}

function validEmail(){
    let emailInput = document.getElementById('email');
    let email = emailInput.value;
    if(email.length < 3){
        showError("Your email must be at least three characters long!");
        return false;
    }

    if(email.length > 100){
        showError("Your email must be less than 100 characters long!");
        return false;
    }

    if(!emailInput.checkValidity()) {
        showError("Your email is invalid!");
        return false;
    }

    return true;
}

function validMessage(){
    let message = document.getElementById('message').value;
    if(message.length < 3){
        showError("Your message must be at least three characters long!");
        return false;
    }

    if(message.length > 1000){
        showError("Your message must be less than 1000 characters long!");
        return false;
    }

    return true;
}

//Event listeners
projectExpand1Btn.addEventListener('click', () => {
    expandProject(1);
});

projectExpand2Btn.addEventListener('click', () => {
    expandProject(2);
});

projectExpand3Btn.addEventListener('click', () => {
    expandProject(3);
});

projectCloseBtn.addEventListener('click', () => {
    minimizeProjects();
});

formBtn.addEventListener('click', () => {
    formSuccess.style.display = 'none';
    formError.innerHTML = "";

    if(validName() && validEmail() && validMessage()){
        formError.style.display = 'none';
        formSuccess.style.display = 'block';
    }
});

//Bonus
var typed = new Typed('#header-title', {
    strings: ['Scott Woodhouse'],
    typeSpeed: 50,
});

//Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

//Project filter
projectFilterSelect.addEventListener('change', function () {
    const selectedValue = this.value;
    const minProject1 = document.getElementById('projects-minimized-1');
    const minProject2 = document.getElementById('projects-minimized-2');
    const minProject3 = document.getElementById('projects-minimized-3');

    switch (selectedValue) {
        case "0":
            minProject1.style.display = "block";
            minProject2.style.display = "block";
            minProject3.style.display = "block";
            break;
        case "1":
            minProject1.style.display = "block";
            minProject2.style.display = "block";
            minProject3.style.display = "none";
            break;
        case "2":
            minProject1.style.display = "none";
            minProject2.style.display = "none";
            minProject3.style.display = "block";
            break;
    }
});

//Dark mode
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = "Light Mode";
    } else {
        darkModeBtn.textContent = "Dark Mode";
    }
});
