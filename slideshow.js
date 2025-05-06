let slideIndex = 0;

// Slaytları göster
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  
  if (index >= slides.length) {
    slideIndex = 0; // Eğer son slayta geldiysek başa dön
  }
  if (index < 0) {
    slideIndex = slides.length - 1; // İlk slayta geldiysek sona git
  }

  // Tüm slaytları gizle
  slides.forEach(slide => {
    slide.style.display = "none";
  });

  // Aktif slaytı göster
  slides[slideIndex].style.display = "block";
}

// Sonraki slayta geçiş
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// Önceki slayta geçiş
function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Başlangıçta ilk slaytı göster
document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
});

// Mobil sürükleme desteği
let touchStartX = 0;
let touchEndX = 0;

const slideshowContainer = document.querySelector('.slideshow-container');

slideshowContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX; // Başlangıç noktasını al
});

slideshowContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX; // Bitiş noktasını al
  
  if (touchStartX > touchEndX + 50) {
    nextSlide(); // Sağdan sola kaydırma
  }
  if (touchStartX < touchEndX - 50) {
    prevSlide(); // Soldan sağa kaydırma
  }
});
