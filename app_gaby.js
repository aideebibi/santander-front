const forms = document.querySelectorAll(".signup-form");


//ejecuta el servicio de red
const func_getTemplate = () => {
    return fetch("./template.html").then ((response) => response.text())
}
const func_sendEmailToApi = (address, template) => {
    fetch(`https://bedu-email-sender-api.herokuapp.com/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: address,
        template: template,
      }),
    })
      .then((results) => {
        console.log(results);
        document.getElementById("email").value = ""
        alert("E-mail send!!!")
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("email").value = ""
        alert("Send failed")
      });
  };
  


// Esta función se conoce como arrow function
const func_sendEmail = (miVariable) => {
    miVariable.preventDefault();
    const email = miVariable.target.querySelector("input").value;

    func_getTemplate()
        .then((response) => {
            func_sendEmailToApi(email, template);
            console.log("Response: ", response);
        })
        .catch((error) => {
            console.log("Error:", error);
        })
    
    console.log("Mi variable: ", miVariable);
    console.log("Email: ", email);
}


for(let i = 0; i < forms.length; i++){
    forms[i].addEventListener("submit", func_sendEmail);
}