const allGoods = [{ name: 'Колекційна модель Hot Wheels Jeep Grand Cherokee Trackhawk', image: 'images/6108850.jpg', category: 'cars', price: 500, description: 'Зануртеся у світ колекції машинок преміум-серії "Форсаж" з колекційною моделлю Hot Wheels Jeep Grand Cherokee Trackhawk. Насолоджуйтеся захоплюючими подіями на високій швидкості завдяки сучасним і ретро автомобілям з багатосерійного блокбастера, відомого своєю швидкістю і стилем. Зберіть усю колекцію машинок для перегонів.' },
{ name: 'Робот-машинка Dade Toys CJ-2180668', image: 'images/6109050.jpg', category: 'cars', price: 200, description: 'Створіть свій автомобіль з роботом-машинкою Dade Toys CJ-2180668. Знайомтеся з конструюванням в легкій, веселій і креативній формі. Вчіться, граючи з роботами-машинками Dade Toys!' },
{ name: 'Пупс Nenuco Soft 35 см', image: 'images/6108929.jpg', category: 'puppetry', price: 1400, description: 'Пупс Nenuco Soft 35 см приверне увагу дитини своїм реалістичним дизайном та функціональністю. Він потребує дбайливої господині. Його приємно обіймати, колисати і укладати спати поруч з собою. Така іграшка не залишить байдужою жодну майбутню маму.' },
{ name: 'Лялька Miraculous Марінетт 26 см', image: 'images/6108369.jpg', category: 'puppetry', price: 995, description: 'Зустрічайте героїв неймовірного мультсеріалу "Леді Баг і Супер-Кіт"! Марінетт і Едріан весело проводять час з друзями та живуть звичайним життям підлітків. Але якщо хтось в небезпеці, то вони перетворюються в яскравих і харизматичних супергероїв - Леді Баг і Супер-Кота! У кожного з них є свій стиль і спеціальні гаджети для боротьби зі злом.' },
{ name: "М'яка іграшка Aurora Penguin 15 см", image: 'images/6108444.jpg', category: 'softPeas', price: 335, description: 'Діти люблять м"які іграшки і ставляться до них як до справжніх тварин. Вони з ними гуляють, їдять, сплять. М"яка іграшка Aurora Penguin 15 см стане відданою дитині.' },
{ name: "М'яка іграшка Keycraft Фламінго 30 см", image: 'images/6337419.jpg', category: 'softPeas', price: 1400, description: 'М"яка іграшка Keycraft Фламінго 30 см стане справжнім другом для любителів цих яскравих птахів. Іграшка дуже м"яка і приємна на дотик. Її так приємно обіймати та з нею весело грати! А ще вона зможе стати справжньою окрасою будь-якої дитячої кімнати!' }
]

const goods = [];

function filterAllGoods(q) {

    goods.splice(0);

    for (let i = 0; i < allGoods.length; i++) {

        if (allGoods[i].category === q) {
            goods.push(allGoods[i].name);
        }
    }
}

const block = document.getElementById('block');
const listGoods = document.createElement('ol');
listGoods.classList.add('list-goods');
block.appendChild(listGoods);

function itemGoods(categoryName) {

    listGoods.innerHTML = '';

    goodsInfo.style.display = 'none';

    filterAllGoods(categoryName);

    for (let j = 0; j < goods.length; j++) {

        const itemGoods = document.createElement('li');
        itemGoods.classList.add('item-goods');
        itemGoods.textContent = goods[j];
        itemGoods.onclick = function () { info(goods[j]) }
        listGoods.appendChild(itemGoods);
    }

    listGoods.style.display = 'block';
}


const cars = document.getElementById('cars');
cars.addEventListener('click', function () { itemGoods('cars') });

const puppetry = document.getElementById('puppetry');
puppetry.addEventListener('click', function () { itemGoods('puppetry') });

const softPeas = document.getElementById('softPeas');
softPeas.addEventListener('click', function () { itemGoods('softPeas') });



const goodsInfo = document.createElement('div');
block.appendChild(goodsInfo);
goodsInfo.classList.add('goods-info');

const imageInfo = document.createElement('img');
imageInfo.classList.add('image-info')
goodsInfo.appendChild(imageInfo);

const blockInfo = document.createElement('div');
goodsInfo.appendChild(blockInfo);

const titleInfo = document.createElement('h1');
titleInfo.classList.add('title-info');
blockInfo.appendChild(titleInfo);

const textInfo = document.createElement('p');
textInfo.classList.add('text-info')
blockInfo.appendChild(textInfo);

const priceInfo = document.createElement('p');
priceInfo.classList.add('price-info');
blockInfo.appendChild(priceInfo);

const buttonInfo = document.createElement('button');
buttonInfo.classList.add('button-info');
blockInfo.appendChild(buttonInfo);
buttonInfo.textContent = 'Придбати';

function info(x) {

    for (let index = 0; index < allGoods.length; index++) {
        if (x === allGoods[index].name) {

            titleInfo.textContent = allGoods[index].name;
            textInfo.textContent = allGoods[index].description;
            imageInfo.src = allGoods[index].image;
            priceInfo.textContent = 'Ціна ' + allGoods[index].price + ' грн';
        }
    }
    goodsInfo.style.display = 'flex';
}

buttonInfo.addEventListener('click', function(){
    listGoods.style.display = 'none';
    goodsInfo.style.display = 'none';
    alert('Товар куплено!');
})

