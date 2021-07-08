const forms = document.querySelectorAll(".signup-form");


//ejecuta el servicio de red
const func_getTemplate = () => {
    return fetch("./template.html").then ((response) => response.text())
}

// Esta función se conoce como arrow function
const func_sendEmail = (miVariable) => {
    miVariable.preventDefault();
    const email = miVariable.target.querySelector("input").value;

    func_getTemplate()
        .then((response) => {
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