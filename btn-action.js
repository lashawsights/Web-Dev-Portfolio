function promotionalEmail(){
    var url="https://lashawsights.com/projects/emails/promotional/";
    var change = document.getElementById("mainframe");
    change.src=url;
    document.getElementById("infoscreen").innerText="Promotional Email Activated"
    }
    function transactionalEmail(){
    var url="https://lashawsights.com/projects/emails/transactional/";
    var change = document.getElementById("mainframe");
    change.src=url;
    // document.getElementById("infoscreen").style.textAlign="center";
    document.getElementById("infoscreen").innerText="Transactional Email Activated"
}
function newsletterEmail(){
    var url="https://lashawsights.com/projects/emails/newsletter/";
    var change = document.getElementById("mainframe");
    change.src=url;

    // document.getElementById("infoscreen").style.textAlign="right";
    document.getElementById("infoscreen").innerText="Newsletter Email Activated"
}

function landingPage1(){
    var url="https://lameadous-shaw.aweb.page/p/5153bbc2-5389-413a-8296-e643dec4ef78";
    var change = document.getElementById("mainframe");
    change.src=url;

    // document.getElementById("infoscreen").style.textAlign="right";
    document.getElementById("infoscreen").innerText="Landing Page 1"
}

function landingPage2(){
    var url="https://lameadous-shaw.aweb.page/p/426192a2-edeb-40aa-9115-5d06011e8873";
    var change = document.getElementById("mainframe");
    change.src=url;

    // document.getElementById("infoscreen").style.textAlign="right";
    document.getElementById("infoscreen").innerText="Landing Page 2"
}

function contact(){
    var url="contact.html";
    var change = document.getElementById("mainframe");
    change.src=url;

    // document.getElementById("infoscreen").style.textAlign="right";
    document.getElementById("infoscreen").innerText="To send me a email just fill out form above."
}


// For typing on screen function needs work
// function typeWriter(){
//     var i=0;
//     var txt = 'You are veiwing a Promotional Email';
//     var speed = 50;
//         if(i < txt.length){
//  document.getElementById("skillsbox").innerHTML += (txt.charAt(i));
//  i++;
//  setTimeout(typeWriter, speed);

//         }
//     }