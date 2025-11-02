// Scroll Animation Utilities

/**
 * Initialize scroll animations for elements with 'scroll-reveal' class
 */
export const initScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optionally unobserve after revealing
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  // Observe all elements with scroll-reveal class
  const scrollElements = document.querySelectorAll('.scroll-reveal');
  scrollElements.forEach((el) => observer.observe(el));

  return observer;
};

/**
 * Add parallax effect to elements
 */
export const addParallaxEffect = (selector: string = '.parallax') => {
  const parallaxElements = document.querySelectorAll(selector);

  const handleScroll = () => {
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const yPos = -(scrolled * speed);
      
      (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => window.removeEventListener('scroll', handleScroll);
};

/**
 * Add smooth scroll behavior to anchor links
 */
export const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (this: HTMLElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    });
  });
};

/**
 * Add stagger animation to children elements
 */
export const addStaggerAnimation = (
  containerSelector: string,
  childSelector: string = '*',
  delay: number = 100
) => {
  const containers = document.querySelectorAll(containerSelector);
  
  containers.forEach((container) => {
    const children = container.querySelectorAll(childSelector);
    children.forEach((child, index) => {
      (child as HTMLElement).style.animationDelay = `${index * delay}ms`;
    });
  });
};

/**
 * Create a mouse follow effect
 */
export const initMouseFollowEffect = (selector: string = '.mouse-follow') => {
  const elements = document.querySelectorAll(selector);

  const handleMouseMove = (e: MouseEvent) => {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const strength = parseFloat(element.getAttribute('data-strength') || '0.1');
      
      (element as HTMLElement).style.transform = 
        `translate(${x * strength}px, ${y * strength}px)`;
    });
  };

  const handleMouseLeave = () => {
    elements.forEach((element) => {
      (element as HTMLElement).style.transform = 'translate(0, 0)';
    });
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseleave', handleMouseLeave);
  };
};

/**
 * Add count up animation to numbers
 */
export const animateCountUp = (
  element: HTMLElement,
  target: number,
  duration: number = 2000
) => {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current).toLocaleString();
  }, 16);

  return timer;
};

/**
 * Trigger animation when element enters viewport
 */
export const animateOnScroll = (
  elements: NodeListOf<Element> | Element[],
  animationClass: string = 'animate-fadeInUp'
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
  
  return observer;
};

/**
 * Add ripple effect on click
 */
export const addRippleEffect = (selector: string = '.ripple-effect') => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    element.addEventListener('click', function (this: HTMLElement, e: Event) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const mouseEvent = e as MouseEvent;
      const size = Math.max(rect.width, rect.height);
      const x = mouseEvent.clientX - rect.left - size / 2;
      const y = mouseEvent.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add('ripple');

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
};

// CSS for ripple effect (add to your CSS file)
/*
.ripple-effect {
  position: relative;
  overflow: hidden;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: ripple-animation 0.6s ease-out;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
*/