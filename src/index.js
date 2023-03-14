import "../css/index.css";
import pick from '../assets/odinokij-volk23.jpg';


console.log('Hello, World!');
const imgW = document.createElement('div');
//imgW.classList.add('img-style');
const pickche = document.createElement('img');
pickche.classList.add('pick_style');
pickche.src = pick;
imgW.append(pickche);

const bodyHTML = document.querySelector('body');

bodyHTML.append(imgW);