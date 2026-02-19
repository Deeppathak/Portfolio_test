document.addEventListener('DOMContentLoaded', function() {
    // 1. Typewriter Effect
    // Cycles through your requested skills while keeping "Enthusiast" static in index.html
    new Typed('#typewriter', {
        strings: [
            'Mechanical Engineer', 
            'Embedded Programming', 
            'Vibration Analysis', 
            '3D Printing'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        cursorChar: '_'
    });

    // 2. Particle Network Effect (Reference Style)
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#58a6ff" },
            "opacity": { "value": 0.3 },
            "size": { "value": 2 },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#58a6ff",
                "opacity": 0.15,
                "width": 1
            },
            "move": { "enable": true, "speed": 1.5 }
        },
        "interactivity": {
            "events": { "onhover": { "enable": true, "mode": "grab" } }
        },
        "retina_detect": true
    });

    // Initialize Feather Icons
    if (window.feather) {
        feather.replace();
    }
});
