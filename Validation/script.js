const formName = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


formName.addEventListener('submit', e =>{

e.preventDefault();
checkInput();
    
});

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

//UserName
    if(usernameValue === ''){
        setError(username, 'Username Cannot be empty');
    }
    else{
        setSuccess(username);
    }

    //Email
    if(emailValue === '')
    {
        setError(email, 'Email Cannot be empty');
    }
    else if(!isEmail(emailValue))
    {
        setError(emailValue, 'Not a Valid Email');
    }    
    else
    {
        setSuccess(email);
    }

    //password1
    if(passwordValue === ''){
        setError(password, 'Password Cannot be empty');
    }else{
        setSuccess(password);
    }

    //password2
    if(password2Value === '')
    {
        setError(password2, 'Password Cannot be empty');
    }
    else if(passwordValue !== password2Value)
    {
        setError(password2, 'Password Not Matched'); 
    }
    else
    {
        setSuccess(password2);
    }

}

    function setError(input, message){
        const formControl = input.parentElement;
        const smalls = formControl.querySelector('small');
        formControl.className = 'form-control error';
        smalls.innerText = message;
    }

    function setSuccess(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }


    function isEmail(email){
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }