let test = "hi"
console.log(test)
console.log("hi")

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redP = document.createElement('p');
redP.classList.add('redP');
redP.textContent = "Hey I'm red!";
redP.style.color = 'red';
container.appendChild(redP)

const blueH3 = document.createElement('h3');
blueH3.classList.add('blueH3')
blueH3.textContent = "I'm a blue h3!"
blueH3.style.color = 'blue';
container.appendChild(blueH3);

const div = document.createElement('div');
div.classList.add('newStyle');
div.style.background = 'pink';
div.style.border = '1px solid black';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);

const pInDiv = document.createElement('p');
pInDiv.textContent = "ME TOO!";
div.appendChild(pInDiv);

const button = document.createElement('button');
button.textContent = "hi i'm a button";


function alertFunction() {
    alert("CLICKED");
}

button.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
});
div.appendChild(button);

container.appendChild(div);

const buttons = document.querySelectorAll('.pancake');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.textContent);
    });
});
