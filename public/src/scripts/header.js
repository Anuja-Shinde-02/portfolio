window.onload = function () {
    fetch('/components/header.html')
      .then(res => res.text())
      .then(data => {
        const headerEl = document.getElementById('header');
        headerEl.innerHTML = data;
  
        // Function to type text with clearing and canceling previous intervals
        function typeText(element, text, delay = 50) {
          // Clear existing typing if any
          if (element.typingInterval) {
            clearInterval(element.typingInterval);
            element.typingInterval = null;
          }
  
          element.textContent = ''; // Clear before typing
          element.classList.add('typing'); // ✅ show cursor
          let index = 0;
  
          element.typingInterval = setInterval(() => {
            element.textContent += text.charAt(index);
            index++;
            if (index >= text.length) {
              clearInterval(element.typingInterval);
              element.typingInterval = null;
              element.classList.remove('typing'); // ✅ hide cursor
            }
          }, delay);
        }
  
        const navLinks = headerEl.querySelectorAll('.nav-links a');
  
        navLinks.forEach(link => {
          const originalText = link.getAttribute('data-original');
          const hindiText = link.getAttribute('data-hindi');
  
          if (!originalText || !hindiText) return;
  
          // Track current typing text to prevent weird overlaps
          let isTyping = false;
  
          link.addEventListener('mouseenter', () => {
            if (isTyping) return;
            isTyping = true;
            typeText(link, hindiText);
          });
  
          link.addEventListener('mouseleave', () => {
            if (isTyping) return;
            isTyping = true;
            typeText(link, originalText);
          });
  
          // Reset isTyping after each full type
          link.addEventListener('transitionend', () => {
            isTyping = false;
          });
        });
      })
      .catch(err => console.error('Failed to load header:', err));
  };
  