
// Post data dari form register
function postDataRegister(event) {
    event.preventDefault();

    // Ambil data dari form
    const form = event.target;
    const name = form.querySelector('[name="name"]').value;
    const email = form.querySelector('[name="email"]').value;
    const password = form.querySelector('[name="pass"]').value;
    const c_password = form.querySelector('[name="c_pass"]').value;

    // Buat objek data
    const data = {
        name : name,
        email: email,
        password: password,
        c_password : password,
    };

    // console.log(data);
    // if (data) {
    //     alert('Register Berhasil');
    //     form.reset();
    //     window.location.href ='login.html';
    // }

    // Kirim data sebagai JSON
    fetch('https://be-jayapura-12.vercel.app/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('regist Berhasil');
            form.reset();
            window.location.href ='login.html';
        } else {
            alert('Maaf, terjadi kesalahan. Silahkan coba lagi.');
        }
    })
    .catch(error => console.error('Error sending contact data:', error));
}


// Event listener untuk form submission
document.querySelector('.form-container form').addEventListener('submit', postDataRegister);