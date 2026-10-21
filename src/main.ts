//import './scss/styles.scss';

import { Products } from './types/models/products'
import { Basket } from './types/models/basket';
import { Buyer } from './types/models/buyer';
import { ApiAdapter } from './types/models/api-adapter';
import { apiProducts } from './utils/data';



function testProducts() {
    const productsModel = new Products();
    productsModel.items = apiProducts.items; 
    console.log('Массив товаров из каталога: ', productsModel.items);
}

function testBasket() {
    const basketModel = new Basket();

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
    }
    
    {
        const item = apiProducts.items.at(1);
        if (item !== undefined) {
            basketModel.remove(item);
        }
    }
    
    console.log('Массив товаров из корзины: ', basketModel.items);
}

function testBuyer() {
    const buyerModel = new Buyer();
    
    {
        const validationResult = buyerModel.validate();
        console.log('Результат валидации покупателя: ', validationResult);
    }

    {
        buyerModel.payment = 'card';
        buyerModel.email = 'email@email.com';
        buyerModel.address = 'Адрес';
        buyerModel.phone = '+1111111111';
    }

    {
        const validationResult = buyerModel.validate();
        console.log('Результат валидации покупателя: ', validationResult);
    }
}

async function testApiAdapter() {
    const apiAdapterModel = new ApiAdapter();
    const productsModel = new Products();
    productsModel.items = await apiAdapterModel.getProducts(); 
    console.log('Массив товаров из каталога: ', productsModel.items);
}

testProducts();
testBasket();
testBuyer();
testApiAdapter();
