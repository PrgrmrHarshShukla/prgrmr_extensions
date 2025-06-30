const invertButton = document.getElementById('invertButton');


const clickFunc = () => {
}



invertButton.addEventListener('click', function () {
    const body = document.body;
    console.log('Button clicked! Current filter:', body.style.filter);
    
    
    body.style.filter = body.style.filter === 'invert(100%)' ? 'invert(0%)' : 'invert(100%)';

    location.reload();
  }
);