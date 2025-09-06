
$(document).ready(function () {

    //popup form
    const popup_Name = document.getElementById('popup_Name')
    const popup_Phno = document.getElementById('popup_Phno')
    const popup_email = document.getElementById('popup_email')
    const popupFormsubmit = document.getElementById('popupFormsubmit')
    const popupFormTitleInput =document.getElementById('popupFormTitleInput')
    const popupFormData =document.getElementById('popupFormData');
    const popup_message=document.getElementById('popup_msg')

    //Register Now
    const Register_btn =document.getElementById('register_btn')
    const register_name =document.getElementById('register_name')
    const register_phone =document.getElementById('register_phone')
    const register_email =document.getElementById('register_email')

    //Get Date
    function getCurrentDateTime() {
        const now = new Date();
        // Format date as YYYY-MM-DD
        const date = now.toISOString().split('T')[0];
        // Format time as HH:MM:SS
        const time = now.toTimeString().split(' ')[0];
        return `${date} ${time}`  // e.g., "2025-06-19 14:42:03"

    }

    //Error handle
    const errorMsg = (err, element) => {
        const div = document.createElement("div")
        div.classList.add("err-msg")
        div.textContent = err
        element.parentNode.appendChild(div)
    }
    //Validation
    function formvalidation(name, email, mobNo,message) {
        const result = {}
        //name
        if (name.value.trim().length > 2) {
            result.name = name.value.trim()
            name.value = ""
        } else {
            errorMsg("Enter Valid Name", name)
        }
        //Email
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            result.email = email.value.trim()
            email.value = ""
        } else {
            errorMsg("Enter valid Email", email)
        }
        //Phone No
        if (mobNo.value.length === 10) {
            result.mobNo = mobNo.value
            mobNo.value = ""
        } else {
            errorMsg("Enter valid Phone No", mobNo)
        }
        //message
        if(message){
        if (message.value.trim()!=="") {
            result.message = message.value.trim()
            message.value = ""
        } else {
            errorMsg("Enter Message", message)
        }}
        result.current_date = getCurrentDateTime()
        return result
    }
    //ClearErrors
    const clearAllErrors = () => {
        document.querySelectorAll(".err-msg").forEach(err => err.remove());
    };


    //POPUP FORM
    popupFormsubmit.addEventListener("click",function(e){
        e.preventDefault();
        clearAllErrors()
        const validation =formvalidation(popup_Name,popup_email,popup_Phno,popup_message)

        if(Object.keys(validation).length <5) return

        // console.log(validation)
        // console.log(popupFormTitleInput.value);

        // console.log(popupFormData.value);
         validation.projectName=popupFormTitleInput.value +" " + popupFormData.value
           sendEmail(validation)
        
    }) 

    //Register Form
    Register_btn.addEventListener("click",function(e){
        e.preventDefault();
        clearAllErrors()
        const validation = formvalidation(register_name, register_email, register_phone, null)

        if(Object.keys(validation).length <4) return

        // console.log(validation,"Register Form");
        validation.projectName="Register Form"
        // console.log(validation);       
        sendEmail(validation,"register")

    
    }) 



    const sendEmail = (validData,formtype) => {
        emailjs.send("service_7pjgy1f", "template_bpbvdig", validData)
            .then(() => {
                // alert("Email sent successfully!");
                
              if(formtype == "register"){
                  $('#register_now').css({"display":"none"});
                 // $('#thank_you_msg').css({"display":"block"});
                    window.location.href = "../thankyou.html";
              }else{
                $('#popupForm').css({"display":"none"});
                // $('#thank_you_msg_popup').css({"display":"block"});
                   window.location.href = "../thankyou.html";
              }
                
            }, (error) => {
                alert("Failed to send email: " + JSON.stringify(error));
            });
    }
    


})
