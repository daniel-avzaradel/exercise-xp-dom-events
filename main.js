// Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
const lastp = document.querySelector('article p:last-child')
lastp.remove()


// Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
const h2 = document.querySelector('h2');

h2.addEventListener('click', () => {
    h2.style.backgroundColor = "salmon";
})

// Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
const h1 = document.querySelector('h1');
let random = Math.floor(Math.random() * 101)
h1.style.fontSize = random + 'px';


// Add an event listener which will hide the h3 when it’s clicked on (use the display property).
const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
    h3.style.display = "none";
})


// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const body = document.body;
const button = document.createElement('button')
let t = document.createTextNode("Click me")
button.appendChild(t)
button.style.marginTop = "20px"

const paragraphs = document.querySelectorAll('article p')
console.log(paragraphs)
body.appendChild(button)

button.addEventListener('click', () => {
    for (let i=0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontWeight = "600";
    }
})

// When the “Submit” button of the form is clicked:
// get the values of the input tags
//make sure that they are not empty, then append them to a HTML table, in the div, below the form.
const submit = document.getElementById('submit');
const inputs = document.getElementsByTagName('input');
const table = document.createElement('table');
const tr = document.createElement('tr')
table.appendChild(tr)

submit.addEventListener('click', (event) => {
    event.preventDefault()
    for (let i=0; i < inputs.length; i++) {
        
        if(inputs[i].type === 'text') {
        let value = inputs[i].value;
        console.log(value)
        let th = document.createElement('th')
        th.innerText = value;
        tr.appendChild(th)
        }
        
    }
})
console.log(table)

const usersAnswer = document.querySelector('.usersAnswer')
usersAnswer.appendChild(table)


//When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
paragraphs[1].addEventListener('mouseover', () => {
    paragraphs[1].style.transition = "0.6s";
    paragraphs[1].style.opacity = "0";
})