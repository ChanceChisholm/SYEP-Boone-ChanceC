const reviews = [
    {
        id: 1,
        name: 'Laura Barker',
        job: 'English & Special Education Teacher',
        img: 'images/LB.jpeg',
        text: "Chance is one of the hardest working and most diligent 9th graders I've had the pleasure of teaching over a fifteen-year career. He sticks with tasks and problems until he gets them done. His persistence last year resulted in high achievement in the classroom with a GPA consistently on the honor roll.",
    },
    {
        id: 2,
        name: 'Brian Palacios',
        job: 'Mathematics Teacher',
        img: 'images/BRIPAL.png',
        text: "Chance is a wonderful student. He's studious, disciplined, and highly engaged. He's also keenly observant and prepared. I wish there were more students with his work ethic! ",
    },
    {
        id: 3,
        name: 'Lorri Eskanazi',
        job: 'Special Education Teacher',
        img: 'images/LE.jpg',
        text: 'When Chance is faced with challenges, he tackles them head on. His resilience and determination make him the exceptional student that he is. In addition to Chance’s work ethic, Chance is a respectful, helpful and kind young man.',
    }
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

function flashButton(button) {
    button.classList.add('clicked');
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 200); // 200ms flash
}

window.addEventListener('DOMContentLoaded', () => {
    // 1. Greeting - runs first
    const hour = new Date().getHours();
    let greeting = "";
    if (hour < 12) {
        greeting = "Good Morning🌅";
    } else if (hour < 18) {
        greeting = "Good Afternoon⛅";
    } else {
        greeting = "Good Evening🌙";
    }
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }

    // Day of week message
    const dayMessages = [
        "Have a superb Sunday, Take time to relax and recharge!",
        "Have a marvelous Monday, Start your week strong!",
        "Have a terrific Tuesday, Keep up the momentum!",
        "Have a wonderful Wednesday, You're halfway there!",
        "Have a thrilling Thursday, Stay focused!",
        "Have a fantastic Friday, Get ready for a great weekend!",
        "Have a spectacular Saturday, Enjoy your weekend!"
    ];
    const today = new Date().getDay(); // 0 = Sunday, 6 = Saturday
    const dayMessageElement = document.getElementById("day-message");
    if (dayMessageElement) {
        dayMessageElement.textContent = dayMessages[today];
    }

    // 2. Load initial review item
    showPerson(currentItem);

    // 3. Navbar active link highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 4. Button event listeners
    nextBtn.addEventListener('click', () => {
        flashButton(nextBtn);
        currentItem++;
        if (currentItem > reviews.length - 1) {
            currentItem = 0;
        }
        showPerson(currentItem);
    });

    prevBtn.addEventListener('click', () => {
        flashButton(prevBtn);
        currentItem--;
        if (currentItem < 0) {
            currentItem = reviews.length - 1;
        }
        showPerson(currentItem);
    });

    // 5. Collapse navbar on link click (for mobile)
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function () {
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show') && window.bootstrap && window.bootstrap.Collapse) {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});
