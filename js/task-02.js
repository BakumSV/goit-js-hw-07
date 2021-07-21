const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const navEl = document.querySelector('#ingredients');

const makeIngredients = ingredients.map(ingr => {
    const navItemEl = document.createElement('li');
        navItemEl.textContent = ingr;
        return navItemEl;
    });
navEl.append(...makeIngredients);