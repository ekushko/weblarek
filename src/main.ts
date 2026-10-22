import './scss/styles.scss';

import { Products } from './components/models/products'
import { Basket } from './components/models/basket';
import { Buyer } from './components/models/buyer';
import { API_URL } from './utils/constants';
import { Api } from './components/base/Api';
import { ApiAdapter } from './components/models/api-adapter';
import { apiProducts } from './utils/data';



function testProducts() {
    const productsModel = new Products();
    const item = apiProducts.items.at(1);

    // тестирование геттера и сеттера каталога товаров
    {
        productsModel.items = apiProducts.items;
        console.log('Массив товаров из каталога: ', productsModel.items);
    }

    // тестирование получения одного товара по id
    {
        if (item !== undefined) {
            console.log('Товар из каталога: ', productsModel.item(item.id));
        }
    }

    // тестирование сохранения и получения товара для отображения
    {
        if (item !== undefined) {
            productsModel.selectedItem = item;
            console.log('Товар для отображения: ', productsModel.selectedItem);
        }
    }
}

function testBasket() {
    const basketModel = new Basket();

    // тестирование геттера массива корзины и добавления товара в массив корзины
    {
        function addFromApi(index: number) {
            const item = apiProducts.items.at(index);
            if (item !== undefined) {
                basketModel.add(item);
            }
        }

        addFromApi(0);
        addFromApi(1);
        addFromApi(2);

        console.log('Массив товаров из корзины: ', basketModel.items);
    }

    // тестирование удаления товара из массива корзины и проверки наличия
    {
        const item = apiProducts.items.at(1);
        if (item !== undefined) {
            console.log('Проверяем: Товар ', item.id, ' в корзине: ', basketModel.contains(item.id));
            basketModel.remove(item.id);
            console.log('Удаляем... Проверяем: Товар ', item.id, ' в корзине: ', basketModel.contains(item.id));
        }
    }

    // тестирование получения количества и стоимости всех товаров
    {
        console.log('В корзине товаров: ', basketModel.count, ' на сумму: ', basketModel.total);
    }

    // тестирование очистки корзины
    {
        basketModel.erase();
        console.log('Массив товаров из корзины: ', basketModel.items);
    }
}

function testBuyer() {
    const buyerModel = new Buyer();

    // тестирование валидации
    {
        let validationResult = buyerModel.validate();
        console.log('Результат валидации покупателя: ', validationResult);

        buyerModel.fromData({
            payment: 'card',
            email: 'oldemail@email.com',
            phone: '+11111111111',
            address: 'address 123'
        });

        validationResult = buyerModel.validate();
        console.log('Результат валидации покупателя: ', validationResult);
    }

    // тестирование получения и сохранения данных в модели
    {
        console.log('Данные о покупателе: ', buyerModel.toData());

        buyerModel.fromData({
            payment: 'card',
            email: 'newemail@email.com'
        });

        console.log('Данные о покупателе: ', buyerModel.toData());
    }

    // тестирование очистки данных покупателя
    {
        buyerModel.erase();
        console.log('Данные о покупателе: ', buyerModel.toData());
    }
}

async function testApiAdapter() {
    const apiAdapterModel = new ApiAdapter(new Api(`${API_URL}`));
    const productsModel = new Products();
    productsModel.items = await apiAdapterModel.getProducts();
    console.log('Массив товаров из каталога: ', productsModel.items);
}

testProducts();
testBasket();
testBuyer();
testApiAdapter();
