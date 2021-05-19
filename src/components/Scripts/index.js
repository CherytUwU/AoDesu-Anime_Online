import React from 'react'

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light');
    btnSwitch.classList.toggle('active');

    // Guardo el modo "dark" en el Local Storage

    if(document.body.classList.contains('light')){
        localStorage.setItem('light-mode', 'true');
    }else{
        localStorage.setItem('light-mode', 'false');
    };
});

    // Obtenemos el modo actual

if(localStorage.getItem('light-mode') === 'true'){
    document.body.classList.add('light');
    btnSwitch.classList.add('active');
}else{
    document.body.classList.remove('light');
    btnSwitch.classList.remove('active');
};

export default btnSwitch