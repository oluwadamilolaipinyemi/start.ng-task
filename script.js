function validate() {
    if (document.myForm.name.value == " " || document.myForm.name.value.length < 4){
        alert("Enter your name!");
        document.myForm.name.focus();
        return false;
    }

    if (document.myForm.message.value == " " || document.myForm.value.length < 20) {
        alert("Please write some more!!")
    }
    
    if (document.myForm.email.value == " " || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.myForm.email.value)){
        return true;
    }
    
}