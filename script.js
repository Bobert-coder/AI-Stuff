document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Мобильное бургер-меню ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Закрываем меню при клике на любую ссылку (теперь включая "Отзывы")
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }


    // --- 2. Галерея и Мемы (Lightbox) ---
    // Собираем все изображения из галереи и изображение мема
    const galleryImages = document.querySelectorAll('.gallery-item img');
    const memeImage = document.querySelector('.meme-image');
    
    let imagesToLightBox = [...galleryImages];
    if (memeImage) {
        imagesToLightBox.push(memeImage);
    }

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');

    if (lightbox && lightboxImg) {
        imagesToLightBox.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
            });
        });

        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.style.display = 'none';
            }
        });
    }


    // --- 3. Форма подписки ---
    const subscribeForm = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email-input');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userEmail = emailInput.value;
            alert(`Готово! Командир, жди инструкции на почту: ${userEmail}`);
            subscribeForm.reset();
        });
    }
});
