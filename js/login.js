function postContactFormData(event) {
    event.preventDefault();
    
    //Ambil data dari form 
    const form = event.target;
    const email= form.querySelector('[name="email"]').value;
    const password = form.querySelector('[name="pass"]').value;

    //Buat objek data
    const data = {
        email: email,
        password: password,
    };

    console.log;
    if (data) {
        alert('Login berhasil');
        form.reset();
        window.location.href ='dashboard.html';
    }

    
}

     document.querySelector('.form-container form').addEventListener('submit', postContactFormData);