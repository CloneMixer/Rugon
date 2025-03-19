// script.js

 // Disable right click
 document.addEventListener('contextmenu', e => e.preventDefault());

 // Disable DevTools through keyboard
 document.addEventListener('keydown', function(e) {
     if (e.key === 'F12' ||
         (e.ctrlKey && e.shiftKey && e.key === 'I') ||
         (e.ctrlKey && e.shiftKey && e.key === 'J') ||
         (e.ctrlKey && e.key === 'U')) {
         e.preventDefault();
     }
 });


 document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".cursor");
    const trailContainer = document.querySelector(".cursor-trail-container");

    document.addEventListener("mousemove", (e) => {
        // Move main cursor
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;

        // Create fire trail particle
        const trailParticle = document.createElement("div");
        trailParticle.classList.add("cursor-trail");
        trailParticle.style.top = `${e.clientY}px`;
        trailParticle.style.left = `${e.clientX}px`;

        // Random size effect
        let size = Math.random() * 15 + 5;
        trailParticle.style.width = `${size}px`;
        trailParticle.style.height = `${size}px`;

        // Append and remove after animation
        trailContainer.appendChild(trailParticle);
        setTimeout(() => {
            trailParticle.remove();
        }, 600);
    });
});

    function disableButton(button) {
        // Disable the button to prevent further clicks
        button.disabled = true;

        // Optionally, you can change the button style to indicate it's disabled
        button.style.opacity = 0.5;
        
        // Prevent the link from opening
        event.preventDefault();
    }


/* // Cursor movement handling
 const cursor = document.querySelector('.cursor');
 const particles = document.querySelector('.particles');
 let lastParticleTime = 0;

 // Optimized mousemove handler with throttling
 document.addEventListener('mousemove', (e) => {
     requestAnimationFrame(() => {
         cursor.style.left = e.clientX + 'px';
         cursor.style.top = e.clientY + 'px';

         // Create particle with time-based throttling
         const now = performance.now();
         if (now - lastParticleTime > 100 && Math.random() > 0.7) {
             createParticle(e.clientX, e.clientY);
             lastParticleTime = now;
         }
     });
 });

 document.addEventListener('mousedown', () => cursor.classList.add('active'));
 document.addEventListener('mouseup', () => cursor.classList.remove('active'));

 // Optimized particle creation
 const particlePool = [];
 const PARTICLE_POOL_SIZE = 50;

 function createParticle(x, y) {
     let particle = particlePool.pop();

     if (!particle) {
         particle = document.createElement('div');
         particle.className = 'particle';
     }

     const size = Math.random() * 4 + 2;
     particle.style.cssText = `
         width: ${size}px;
         height: ${size}px;
         left: ${x}px;
         top: ${y}px;
     `;

     particles.appendChild(particle);

     setTimeout(() => {
         if (particles.contains(particle)) {
             particles.removeChild(particle);
             if (particlePool.length < PARTICLE_POOL_SIZE) {
                 particlePool.push(particle);
             }
         }
     }, 2000);
 }
     */

 // WL message rotation with optimized timing
 const messages = [
     "Searching for 10 worthy subjects... Protocol 7 active",
     "Access restricted... 10 slots remaining",
     "Neural signature verification required",
     "Whitelist status: Scanning candidates",
     "Protocol 7: Selection process initiated"
 ];

 const wlMessage = document.querySelector('.wl-message');
 let currentIndex = 0;

 function updateMessage() {
     wlMessage.style.opacity = '0';
     setTimeout(() => {
         wlMessage.textContent = messages[currentIndex];
         wlMessage.style.opacity = '1';
         currentIndex = (currentIndex + 1) % messages.length;
     }, 1000);
 }

 setInterval(updateMessage, 5000);

 // Secret access
 document.addEventListener('keydown', e => {
     if (e.ctrlKey && e.altKey && e.key === 'w') {
         window.location.href = 'pfp-maker.html';
     }
 });
/*document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");
    const emailInput = document.getElementById("emailInput");

    submitButton.addEventListener("click", function() {
        const email = emailInput.value.trim();
        if (validateEmail(email)) {
            alert("Thank you! Your email has been submitted.");
            emailInput.value = ""; // Clear input field
        } else {
            alert("Please enter a valid email address.");
        }
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}*/
