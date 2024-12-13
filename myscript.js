/*makes inquiry form visibile when button not selected*/

document.getElementById("inquiryButton").addEventListener("click", function(){
	var form = document.getElementById("inquiryForm");
	if(form.style.display === "none" || form.style.display === ""){
		form.style.display ="block";
	}else {
		form.style.display = "none";
	}
		
});
    
/*makes sure name, email and dated are not left empty before submitting form*/
document.addEventListener("DOMContentLoaded", function () {
    function validateForm() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
		const date = document.getElementById("datepicker").value.trim();
        if (!name) {
            alert("Please fill out the Name field.");
            return false;
        }

        if (!email) {
            alert("Please fill out the Email field.");
            return false;
        }
		if (!date) {
            alert("Please choose a start date for the event.");
            return false;
        }

        return true; 
    }
 
    const form = document.querySelector(".contact-form");
    form.onsubmit = validateForm;
});