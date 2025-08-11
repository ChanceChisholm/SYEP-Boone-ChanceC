const reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Web Designer',
        img: 'images/susan.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.',
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

// Load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

function flashButton(button) {
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 200); // 200ms flash
}

nextBtn.addEventListener('click', function () {
  flashButton(nextBtn);
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
  flashButton(prevBtn);
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// Highlight active navbar link
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});


// console.log("Hello, World!");

// //Strings have quotes & numbers don't//
// let myTest="123";
// console.log(typeof myTest);

// console.log(10 + " eggs");
// console.log(10 + 8 + " eggs");
// console.log("eggs" + 10 + 8);

// //Both conditions need to be true//
// console.log(7>3 && 5>2);

// //Only one condition must be true//
// console.log(10>3||(10>12))

// //Logical NOT//
// console.log(!5>3)

// function introduction(name,age){
//     console.log("Hello, my name is " + name + " & I'm " + age + " years old.")
// }

// introduction("Chance" , 14)

// const hour = new Date().getHours();
// let greeting = "";

// if (hour<12){
//     greeting = "Good Morning🌅";
// }else if (hour<18){
//     greeting = "Good Afternoon⛅"
// }else{
//     greeting = "Good Evening🌙"
// }
// document.getElementById("greeting").innerText = greeting