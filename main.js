const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', function(e) {
  // console.log(e.clientX, e.clientY);
  // h1.textContent = `${e.screenX}, ${e.screenY}`;
  // h1.textContent = `${e.pageX}, ${e.pageY}`;
  h1.textContent = `${e.clientX}, ${e.clientY}`;
  let x = e.clientX;
  let y = e.clientY;
  let red = x/window.innerWidth * 100;
  let green = y/window.innerHeight * 100;;
  let blue = ((x/window.innerWidth + y/window.innerHeight)*100)/2;

  document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;

})