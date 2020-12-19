const gradients = [{
        c1: '#48c6ef',
        c2: '#6f86d6'
    },
    {
        c1: '#9795f0',
        c2: '#fbc8d4'
    },
    {
        c1: '#a18cd1',
        c2: '#fbc2eb'
    },
    {
        c1: '#8BC6EC',
        c2: '#9599E2'
    },
    {
        c1: '#4568DC',
        c2: '#B06AB3'
    },
    {
        c1: '#000428',
        c2: '#004e92'
    },
    {
        c1: '#FF5ACD',
        c2: '#FBDA61'
    },
    {
        c1: '#b993d6',
        c2: '#8ca6db'
    },
    {
        c1: '#a18cd1',
        c2: '#fbc2eb'
    },
    {
        c1: '#3a7bd5',
        c2: '#00d2ff'
    }
];

const generator = document.querySelector('.generator'),
    generatorButton = generator.querySelector('.generator__button'),
    generatorButtonText = generatorButton.querySelector('span'),
    generatedText = generator.querySelector('.generator__output');

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

const pickRandomFrom = items => items[Math.floor(Math.random() * items.length)];

function changeGradient() {
    const randomGradient = pickRandomFrom(gradients),
        gradientAngle = Math.round(Math.random() * 360);

    generator.style.background = `linear-gradient(${gradientAngle}deg, ${randomGradient.c1} 0%, ${randomGradient.c2} 100%)`;
    generatorButtonText.style.backgroundImage = `linear-gradient(${360 - gradientAngle}deg, ${randomGradient.c1} 0%, ${randomGradient.c2} 100%)`;
}

function generate(e) {
    e.preventDefault();
    const inputText = document.querySelector('.generator__input').value;

    if (inputText) {
        const firstLetter = inputText.charAt(0).toLowerCase(),
            adjectiveList = adjectives.filter(adjective => adjective.startsWith(`${firstLetter}`)),
            randomAdjective = pickRandomFrom(adjectiveList);

        generatedText.innerHTML = `${capitalizeFirstLetter(randomAdjective)}${capitalizeFirstLetter(inputText)}`;
        changeGradient();
    } else
        generatedText.innerHTML = "Enter a name, dumbass.";
}

generatorButton.addEventListener('click', generate);
window.addEventListener('load', changeGradient);