// Tunggu sampai DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Ambil elemen-elemen yang diperlukan
  const hamburger = document.querySelector(".hamburger");
  const navbarMenu = document.querySelector(".navbar-menu");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar-link");
  const contactForm = document.querySelector(".contact-form");
  const heroTitle = document.querySelector(".hero-title");

  // Toggle menu mobile
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  });

  // Tutup menu saat link di klik (untuk tampilan mobile)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navbarMenu.classList.remove("active");
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scroll untuk link anchor
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Animasi fade-in untuk elemen saat di-scroll
  const fadeInElements = document.querySelectorAll(".fade-in");

  const fadeInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeInElements.forEach((element) => {
    fadeInObserver.observe(element);
  });

  // Form submission handler
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Terima kasih! Pesan Anda telah terkirim.");
      contactForm.reset();
    });
  }

  // Animasi typing effect untuk hero title
  if (heroTitle) {
    const text = heroTitle.textContent;
    const speed = 100; // kecepatan mengetik dalam milidetik

    heroTitle.textContent = "";

    function typeWriter(text, i = 0) {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, i), speed);
      }
    }

    // Mulai efek mengetik setelah sedikit penundaan
    setTimeout(() => typeWriter(text), 1000);
  }

  // Fungsi untuk music player
  const toggleMusicBtn = document.getElementById("toggle-music");
  const backgroundMusic = document.getElementById("background-music");
  let isMusicPlaying = false;

  if (toggleMusicBtn && backgroundMusic) {
    toggleMusicBtn.addEventListener("click", () => {
      if (isMusicPlaying) {
        backgroundMusic.pause();
        toggleMusicBtn.textContent = "🔇";
      } else {
        backgroundMusic.play();
        toggleMusicBtn.textContent = "🔊";
      }
      isMusicPlaying = !isMusicPlaying;
    });

    // Pastikan music tidak autoplay saat halaman dimuat
    backgroundMusic.pause();
  }
});
