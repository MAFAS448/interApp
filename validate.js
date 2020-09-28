
	function validate(){
		var email = document.forms['frm']['email'];

		if (email.value == "") {
			window.alert("Please enter your E-mail."); 
       		email.focus();  
			return false;
		}
		if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
			return true;
		}else{
			window.alert("Enter valid email"); 
            email.focus(); 
            return false;
        }
        return true;

    }













