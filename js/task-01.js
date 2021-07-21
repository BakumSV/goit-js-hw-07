const totalItemEl = document.querySelectorAll('.item');
console.log(`В списке ${totalItemEl.length} категории.`);

totalItemEl.forEach(item => {
    console.log('Категория: ', item.querySelector('h2').textContent);
    console.log('Количество элементов: ', item.querySelectorAll('li').length);
});

