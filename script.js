const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("msg");

function sendEmail(){
               const bodyMessage = `Full Name: ${fullName.value}<br>  Email: ${email.value}<br> Phone number: ${phone.value}<br> Message: ${message.value}<br>`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shalinmodi60@gmail.com",
        Password : "5CD8F55FE9BACFCC9C91922583878F4DA481",
        To : 'shalinmodi60@gmail.com',
        From : "shalinmodi60@gmail.com",
        Subject : "This is the message",
        Body : bodyMessage
    }).then(
      message => {
        if(message=="OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );

}
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    sendEmail();

});