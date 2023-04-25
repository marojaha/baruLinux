const container = document.querySelector('.container');
const containerMenu = document.querySelector('.container-menu');
const containerAngkut = document.querySelector('.container-angkut');
const containerKumpul = document.querySelector('.container-kumpul');

const menus = document.querySelectorAll('.menu');
const mKumpuls = document.querySelectorAll('.m-kumpul');
const mAngkut = document.querySelector('.m-angkut');

menus.forEach(function(tombol){
    tombol.addEventListener('click', function(e){
        if (e.target.innerText == 'Pengumpulan'){
        containerMenu.style.display = 'none';
        containerKumpul.style.display = 'block';
        }
    })
})