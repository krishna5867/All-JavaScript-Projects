let input = document.querySelector("input");
let camel = document.getElementById("camel-case");
let pascal = document.getElementById("pascal-case");
let snake= document.getElementById("snake-case");
let screaming = document.getElementById("screaming-snake-case");
let kebab = document.getElementById("kebab-case");
let screamingKebab = document.getElementById("screaming-kebab-case");
let btn = document.getElementById("convert-btn");


btn.addEventListener("click", ()=>{
camel.innerText = camelCase(input.value);
pascal.innerText = pascalCase(input.value);
snake.innerText = snakeCase(input.value);
screaming.innerText = screamingSnakeCase(input.value);
kebab.innerText = kebabCase(input.value);
screamingKebab.innerText = screamingKebabCase(input.value);
});



const camelCase = (str)=>{
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
        }
        
const pascalCase = (str)=>{
    return (str.match(/[a-zA-Z0-9]+/g) || []).map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join('');
    }

const snakeCase = (str)=>{
    return str.replaceAll(" ", "_");
        }

const screamingSnakeCase = (str)=>{
    return str.toUpperCase().replaceAll(" ", "_");
        }

const kebabCase = (str)=>{
    return str.replaceAll(" ", "-");
        }

const screamingKebabCase = (str)=>{
    return str.toUpperCase().replaceAll(" ", "-");
        }
