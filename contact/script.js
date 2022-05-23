
const serviceID = "service_mww53c4"
const templateID = "template_a9qr938" 
const userID = "UQ_ta2K99B8F7po2b"

function sendEmail(){
    console.log("Klikket på")
    //Hiv fat i de 3 elementer via ID

    const navn = document.getElementById("navn").value
    const email = document.getElementById("email").value
    const besked = document.getElementById("besked").value
    //Hent .value på dem og dem i en variabel

    // gør det på engelsk, da vi skal kommunikere med en ekstern service
    const emailData = {
        name: navn, 
        email: email, 
        message: besked
    }

    emailjs.send(serviceID, templateID, emailData, userID);
}

// bruger EmailJS 