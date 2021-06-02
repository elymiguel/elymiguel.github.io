// Function - Change Body Theme

function changeBodyTheme(){
    let obj=document.getElementById('body');
    if(obj.className=='bodyDark'){
        obj.className='bodyLight';
    }else{
        obj.className='bodyDark';
     }
    }

// Function - Show Email
function myMail(){
    alert('Hey! I am glad you are interested in contacting me. Send me a message on my Linkedin profile at any time :)');
    } 

// Function - Nav Bar | Open - Close

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }