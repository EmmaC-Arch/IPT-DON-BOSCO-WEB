// ==================== MENÚ HAMBURGUESA ====================
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("active");
});

// Cerrar menú al hacer clic en enlaces normales
document.querySelectorAll('.nav-links > li > a:not(.toggle)').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ==================== SUBMENUS (AMBOS) ====================
document.addEventListener('DOMContentLoaded', () => {
  const submenus = document.querySelectorAll('.submenu');
  
  submenus.forEach(submenu => {
    const toggle = submenu.querySelector('.toggle');
    
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Cerrar otros submenús
        submenus.forEach(otherSubmenu => {
          if (otherSubmenu !== submenu) {
            otherSubmenu.classList.remove('open');
          }
        });
        
        // Toggle del actual
        submenu.classList.toggle('open');
      });
    }
  });
  
  // Cerrar submenus al hacer clic fuera (solo desktop)
  document.addEventListener('click', (e) => {
    if (window.innerWidth > 768) {
      let clickedInside = false;
      submenus.forEach(submenu => {
        if (submenu.contains(e.target)) {
          clickedInside = true;
        }
      });
      
      if (!clickedInside) {
        submenus.forEach(submenu => {
          submenu.classList.remove('open');
        });
      }
    }
  });
});

// ==================== INSTAGRAM BUTTON ====================
const btnInsta = document.getElementById("btnInsta");
if (btnInsta) {
  btnInsta.addEventListener("click", function() {
    window.location.href = "https://www.instagram.com/ipt_donbosco?igsh=bDZrYzR1NWt5ZHUz";
  });
}

    document.querySelectorAll(".submenu").forEach(s => {
      if (s !== parent) s.classList.remove("open");
    });

    // Abrir/cerrar el que clickeaste
    parent.classList.toggle("open");
  
    document.querySelectorAll(".submenu .toggle").forEach(toggle => {
  toggle.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();

    const parent = toggle.parentElement;

    // Solo alternar este submenu
    parent.classList.toggle("open");
  });
});

const parallaxText = document.querySelector('.parallax-text');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Ajusta el factor para controlar la velocidad
  const speed = 0.5; 
  parallaxText.style.transform = `translateY(${scrollY * speed}px)`;
});




