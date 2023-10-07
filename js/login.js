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

    // Kirim data sebagai JSON
    // const apiurl = 'http://localhost:3001/login';
    // fetch(apiurl, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         alert('Login Berhasil');
    //         form.reset();
    //         window.location.href = 'Homepage.html';
    //     } else {
    //         alert('Maaf, terjadi kesalahan. Silahkan coba lagi.');
    //     }
    // })
    // .catch(error => console.error('Error sending contact data:', error));
}


     document.querySelector('.form-container form').addEventListener('submit', postContactFormData);