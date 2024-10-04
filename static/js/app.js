

let form_data = [];


document.querySelector('.the_form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    // Clear any previous errors
    document.querySelectorAll('.error').forEach(function(errorSpan) {
      errorSpan.textContent = '';
    });
  

    const user_name = document.querySelector('.username-pot').value;
    const pass_word = document.querySelector('.password-pot').value;
    const email_field = document.querySelector('.email-pot').value;
    const comfirm_pass = document.querySelector('.comfim-pot').value;
    const profile_pics = document.getElementById('file').value;

  
    let isValid = true;

  
    // Validate username
    if (user_name === '') {
      document.getElementById('usernameError').textContent = 'Username is required.';
      isValid = false;
    } else if (user_name.length < 3) {
      document.getElementById('usernameError').textContent = 'Username must be at least 3 characters.';
      isValid = false;
    }
  
    // Validate email
    if (email_field === '') {
      document.getElementById('emailError').textContent = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email_field)) {
      document.getElementById('emailError').textContent = 'Invalid email format.';
      isValid = false;
    }
  
    // Validate password
    if (pass_word === '') {
      document.getElementById('passwordError').textContent = 'Password is required.';
      isValid = false;
    } else if (pass_word.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
      isValid = false;
    }

    // comfim validation

    if (comfirm_pass === pass_word){
        alert('correct')
    }else{
        document.getElementById('confirmError').textContent = 'comfirm password must relate to the password above'
    }


    
    if (isValid) {
      window.location.href = 'loginn/login'
    //   document.querySelector('.the_form').submit(); 
      document.getElementById('cre-btn').submit();
    }else{
        alert('form incomplet')
    }


    // let formData = {
    //     user_name: username,
    //     email_field: email,
    //     pass_word: password,
    //     comfirm_pass: confirmPassword,
    //     profile_pics: file,

    // };

    form_data.push(formData);
    console.log(form_data);

    document.querySelector('.the_form').reset();

  });


  





// for the slider
const arrowHead = document.querySelector('.upload-arrow')
arrowHead.addEventListener('click', function(){
    const holderFor = document.querySelector('.photoupload')
    holderFor.classList.toggle("slider")
    // alert('working...')
})



// upload the image 

let imgUrl = ""

const imgpreviwe = document.querySelector('.img-holder')
const uploadField = document.querySelector('#file')


uploadField.addEventListener('input', function(event){
    chosenfile = event.target.files[0]
    imgUrl = URL.createObjectURL(chosenfile)
    imgpreviwe.src = imgUrl
})


