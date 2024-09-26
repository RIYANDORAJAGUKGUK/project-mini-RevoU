// ini javascript 1
function displayWelcomeMessage() {
    const welcomeMessage = document.createElement('h2'); 
    welcomeMessage.textContent = 'Hi Riyando, Welcome To Website'; 
    document.getElementById('welcome-container').appendChild(welcomeMessage); 

    const subMessage = document.createElement('p'); 
    subMessage.textContent = 'Ini adalah website latihan pertama.';
    subMessage.style.fontSize = '14px'; 
     
    document.getElementById('welcome-container').appendChild(subMessage);
    startImageSlider();
}

function startImageSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return; 

    let currentSlide = 0;
    slides[currentSlide].classList.add('active'); 


    let autoSlide = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000); 

    document.getElementById('next-btn').onclick = () => {
        showSlide(currentSlide + 1);
        resetAutoSlide(); 
    };

    
    document.getElementById('prev-btn').onclick = () => {
        showSlide(currentSlide - 1);
        resetAutoSlide(); 
    };

    
    const slider = document.getElementById('image-slider');

    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlide); 
    });

    slider.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 3000); 
    });

    function showSlide(index) {
        slides[currentSlide].classList.remove('active'); 
        currentSlide = (index + slides.length) % slides.length; 
        slides[currentSlide].classList.add('active'); 
    }

}

window.onload = displayWelcomeMessage;
const form = document.getElementById('messageForm');
const submittedData = document.getElementById('submittedData');
const nameData = document.getElementById('nameData');
const birthdateData = document.getElementById('birthdateData');
const genderData = document.getElementById('genderData');
const messageData = document.getElementById('messageData');
const editDataButton = document.getElementById('editData');
const deleteDataButton = document.getElementById('deleteData');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById('message').value;

  nameData.textContent = 'Nama: ' + name;
  birthdateData.textContent = 'Tanggal Lahir: ' + birthdate;
  genderData.textContent = 'Jenis Kelamin: ' + gender;
  messageData.textContent = 'Pesan: ' + message;

  submittedData.style.display = 'block';
  form.style.display = 'none';
  alert('Pesan Telah Terkirim!');
});

editDataButton.addEventListener('click', () => {
    submittedData.style.display = 'none';
    form.style.display = 'block';
    document.getElementById('name').value = nameData.textContent.split(': ')[1];
    document.getElementById('birthdate').value = birthdateData.textContent.split(': ')[1];
    document.querySelector('input[name="gender"][value="' + genderData.textContent.split(': ')[1] + '"]').checked = true;
    document.getElementById('message').value = messageData.textContent.split(': ')[1];
});

deleteDataButton.addEventListener('click', () => {
  submittedData.style.display = 'none';
  form.style.display = 'block';
  nameData.textContent = '';
  birthdateData.textContent = '';
  genderData.textContent = '';
  messageData.textContent = '';

  document.getElementById('name').value = '';
  document.getElementById('birthdate').value = '';
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.getElementById('message').value = '';
});


const navLinks = document.querySelectorAll('nav ul li a');


navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    switch (href) {
      case 'home':
        console.log('Navigating to home page');
        break;
      case 'profile':
        document.querySelector('.introduction-container').scrollIntoView({ behavior: 'smooth' });
        break;
      case 'portofolio':
        console.log('Navigating to portofolio page');
        break;
      case 'message us':
        console.log('Navigating to message us page');
        break;
      default:
        console.log('Unknown navigation link');
    }
  });
});