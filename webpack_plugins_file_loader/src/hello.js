import helloThere from './helloThere.jpg';

export function insertObiwan() {
  console.log("it's a string!", helloThere);

  const img = document.createElement('img')
  img.setAttribute('src', helloThere)

  document.body.appendChild(img);
}
