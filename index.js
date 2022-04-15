const button = document.querySelector('button');

button.addEventListener('mouseover', buttonCatching);

button.addEventListener('click', function() {
    button.removeEventListener('mouseover', buttonCatching);
    button.style.backgroundColor = '#66d9e8';
    button.style.color = '#e3fafc';
    button.innerText = 'Well done!';
});

function buttonCatching() {
    const x = Math.floor(Math.random() * (document.body.clientWidth + 1)) % (document.body.clientWidth + 1 - parseInt(getComputedStyle(button).width));
    const y = Math.floor(Math.random() * (innerHeight + 1)) % (innerHeight + 1 - parseInt(getComputedStyle(button).height));
    
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}