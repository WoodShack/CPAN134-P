//Global variables
const projectsMinContainer =  document.getElementById('projects-minimized-container');
const projectsExpandContainer =  document.getElementById('projects-expanded-container');
const projectExpand1Btn =  document.getElementById('expand-btn-1');
const projectExpand2Btn =  document.getElementById('expand-btn-2');
const projectExpand3Btn =  document.getElementById('expand-btn-3');
const projectCloseBtn = document.getElementById('projects-close-btn');

//Functions
function expandProject(num){
    let selectedProject = document.getElementById('projects-expanded-'+num);

    projectsMinContainer.style.display = 'none';
    projectsExpandContainer.style.display = 'block';
    selectedProject.style.display = 'block';
}

function minimizeProjects(){
    for(let i = 1; i < 4; i++){
        document.getElementById('projects-expanded-'+i).style.display = 'none';
    }

    projectsExpandContainer.style.display = 'none';
    projectsMinContainer.style.display = 'flex';
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