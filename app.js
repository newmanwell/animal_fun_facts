import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const title = '' ;
const background = <img className="background" alt="ocean" src="/images/ocean.jpg"/>
let images = [];
for (const animal in animals) {
  images.push(<img 
    onClick={displayFact}
    key= {animal}
    className= 'animal'
    alt= {animal}
    src= {animals[animal].image}
    aria-label= {animal}
    role= 'button'  />);
}

function displayFact(e) {
  const animal = e.target.alt;
  const randoFact = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[randoFact];
  const p = document.getElementById('fact');
  p.innerHTML = funFact;
}

const animalFats = (
  <div>
    <h1>{ title === '' ? 'Click an animal for a fun fact' : title }</h1>
    { background }
    <div className="animals">{ images }</div>
    <p id="fact"></p>
  </div>
  );
  

root.render(animalFats);