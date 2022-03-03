document.querySelector('#submit').addEventListener('click',()=>{
    let nome = document.getElementById('name').value
    let email = document.getElementById('email').value
    let celular = document.getElementById('celular').value
    let empresa = document.getElementById('empresa').value

    console.log ("Nome: " +nome,"E-mail: " +email,"Celular: " +celular, "Empresa: " +empresa)
})
