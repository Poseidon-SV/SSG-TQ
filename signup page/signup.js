const signupBtn = document.getElementById('signup');

signupBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log('clicked');
    location.href = '../TEMPorSCRATCH/templateScratch.html';
})