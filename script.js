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
        name: 'Anna Johnson',
        job: 'Web Developer',
        img: 'images/anna.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.',
    },
    {
        id: 3,
        name: 'Peter Jones',
        job: 'Teacher',
        img: 'images/peter.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.',
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
});
