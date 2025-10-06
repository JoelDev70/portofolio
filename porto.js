 
 //sentence2
 const texte = "Moi c'est le code que j'aime.";
 const speed = 300;
 let i = 0;
 function typeWriter(){
        if (i < texte.length){
        document.getElementsByClassName("text")[0].innerHTML += texte.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
  }}
    typeWriter();

  //welcome sentence
 const phrases = ["We Design & Build Creative Products","Ensemble,Créons Ce Qui Nous Ressemble"];
 const el = document.querySelector(".descriptionText");
 let phraseIndex = 0;
 let letterIndex = 0;
 let isDeleting = false;
 let currentPhrase = "";
 let delay = 100;

 function type(){
    currentPhrase = phrases[phraseIndex];
if(!isDeleting){
    el.textContent = currentPhrase.substring(0,letterIndex++)
  if(letterIndex > currentPhrase.length){
    isDeleting = true;
    setTimeout(type,1500);
    return;
}}else{
    el.textContent = currentPhrase.substring(0,letterIndex--);
    if(letterIndex < 0){
      isDeleting = false;
      phraseIndex = (phraseIndex + 1)%phrases.length;
    }
}
setTimeout(type,delay);
} type();


//data sharing 
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const texte = `%0ANew contact from your portfolio%0A
        Nom : ${name}%0A
        Email : ${email}%0A
        Téléphone : ${phone}%0A
        Message : ${message}`;
  const numeroWhatsApp = "243972173663";

    // Lien vers WhatsApp
  const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${texte}`;
  alert("Votre message est prêt à être envoyé sur WhatsApp !");
  window.open(whatsappURL, "_blank");
  document.getElementById("form").reset();
});

//scroll for manage the navigattion
const navB = document.querySelector(".container");
console.log(navB);

window.addEventListener("scroll", () => {
if(window.scrollY > 1500){
    navB.style.top = "0px";
}
else if(window.scrollY <= 20){
    navB.style.top = "0px"
}else{
    navB.style.top = "-70px";
}});

//The ball
window.onload = function () {
  try {
     TagCanvas.Start('tagcanvas', '', {
      textColour: '#0f0',
      outlineColour: '#f00',
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05
    });
  } catch(e) {
    console.log("Canvas error", e);
  }
};



 