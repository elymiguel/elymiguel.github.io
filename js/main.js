// PROFILE PAGE 
// Function - Change Body Theme

function changeBodyTheme(){
    let obj=document.getElementById('body');
    if(obj.className=='bodyDark'){
        obj.className='bodyLight';
    }else{
        obj.className='bodyDark';
     }
    }




setTimeout(function() { 
    document.querySelector('.title').classList.add('animate');
    document.querySelector('.sub-title').classList.add('animate');
    
    
},1)


// Function - Nav Bar | Open - Close 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("myContent").style.opacity = 0.85;
    document.getElementById("footer").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("myContent").style.opacity = 1;
    document.getElementById("footer").style.display = "flex";
}

// Funciton MSG Project Page
function myProjectPage(){
    alert('This is the "Project Page" developed with Bootstrap.')
    
}
