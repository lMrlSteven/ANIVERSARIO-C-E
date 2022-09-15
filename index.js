const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('PARA EL AMOR DE MI VIDA')
    alert ('GRACIAS POR PERMANECER EN MI VIDA');
    alert ('TU AMOR ES MUY IMPORTANTE PARA MI');
    alert ('A VECES NO ENCUENTRO LA PALABRAS EXACTAS PARA DECIRTE LO MUCHO QUE TE AMO');
    alert ('PUEDES ESTAR LEJOS DE MIS OJOS PERO NO DE MI CORAZÓN');
    alert ('ME ENAMORAS TAL Y COMO ERES');
    alert ('FELIZ ANIVERSARIO 15.09.2022 MI AMOR TE AMO');
    location.href = 'https://www.youtube.com/watch?v=TAZQB8hP9wQ=10s'
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})