document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "-50px",
  }
);

document
  .querySelectorAll(".scroll-trigger, .stagger-children")
  .forEach((el) => {
    scrollObserver.observe(el);
  });

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".ai-features");
  const scrollIndicator = document.querySelector(".scroll-indicator");

  if (scrolled > 100 && scrollIndicator) {
    scrollIndicator.style.opacity = "0";
    scrollIndicator.style.transform = "translate(-50%, 20px)";
    scrollIndicator.style.transition = "all 0.5s ease";
  } else if (scrollIndicator) {
    scrollIndicator.style.opacity = "1";
    scrollIndicator.style.transform = "translate(-50%, 0)";
  }

  parallaxElements.forEach((el) => {
    const speed = 0.5;
    const yPos = -(scrolled * speed);
    el.style.backgroundPositionY = yPos + "px";
  });
});

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      document
        .querySelector(`nav a[href="#${sectionId}"]`)
        ?.classList.add("active");
    } else {
      document
        .querySelector(`nav a[href="#${sectionId}"]`)
        ?.classList.remove("active");
    }
  });
});
