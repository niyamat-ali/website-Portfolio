document.addEventListener("DOMContentLoaded", function() {
    const typingText = "Welcome to our Portfolio\n\n";
    const typingElement = document.getElementById("typing-text");
    let typingIndex = 0;

    function typeWriter() {
        if (typingIndex < typingText.length) {
            if (typingText.charAt(typingIndex) === '\n') {
            } else {
                typingElement.innerHTML += `<span class="typing">${typingText.charAt(typingIndex)}</span>`;
            }
            typingIndex++;
            setTimeout(typeWriter, 100); // Adjust typing speed here (milliseconds)
        }
    }

    typeWriter();
});


//link is active using javascript 
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-bar ul li a');
    const homeLink = document.querySelector('.nav-bar ul li a[href="#"]');

    // Remove 'active' class from all links
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Add 'active' class to the Home link
    homeLink.classList.add('active');

    // Handle click event to maintain the 'active' class
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
//scroll function handling show the nav bar 


let lastScrollY = window.scrollY;
const navbar = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
    navbar.classList.add('visible');
    lastScrollY = window.scrollY;
});

// Ensure the navbar is visible on page load
document.addEventListener('DOMContentLoaded', () => {
    navbar.classList.add('visible');
});


// read more button control
function readmorebuttoncontrol() {
    var readtext = document.getElementsByClassName("readmetext")[0];
    if (readtext.style.display === "none" || readtext.style.display === "") {
        readtext.style.display = "block";
    } else {
        readtext.style.display = "none";
    }
}



// slider section in projects 
document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll(".video-box video");
    const slider = document.querySelector(".slider");
    const prevArrow = document.querySelector(".arrow-left");
    const nextArrow = document.querySelector(".arrow-right");

    // Video play/pause on hover
    videos.forEach(video => {
        video.addEventListener("mouseenter", () => video.play());
        video.addEventListener("mouseleave", () => video.pause());
    });

    let currentIndex = 0;

    // Slider functionality
    function updateSliderPosition() {
        const slideWidth = 320; // Adjust this based on your container width and margins
        slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    prevArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextArrow.addEventListener("click", () => {
        if (currentIndex < videos.length - 3) { // Show three videos at a time
            currentIndex++;
            updateSliderPosition();
        }
    });
});



