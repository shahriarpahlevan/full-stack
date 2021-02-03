import './styles.css';
export const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.side-nav');
  const sideNav = document.querySelectorAll('.side-nav li');

  if (burger != null) {
    burger.addEventListener('click', () => {
      if (nav != null) {
        // Toggle Nav
        nav.classList.toggle('nav-active');
      }

      //Animate Links
      sideNav.forEach((link: any, index: any) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
            0.5}s`;
        }
      });

      //Burger Animation
      burger.classList.toggle('toggle');
    });
  }
};
