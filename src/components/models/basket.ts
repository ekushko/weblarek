import { IProduct } from "../../types";

export class Basket {
    private _items: IProduct[] = [];

    get items(): IProduct[] {
        return this._items;
    }

    add(item: IProduct) {
        this._items.push(item);
    }

    remove(id: string) {
        const itemToRemove = this._items.find(item => {
            return item.id === id;
        });

        if (itemToRemove !== undefined) {
            const index = this._items.indexOf(itemToRemove);

            if (index >= 0) {
                this._items.splice(index, 1);
            }
        }
    }

    erase() {
        this._items.splice(0, this._items.length);
    }

    total(): number {
        let sum: number = 0;
        this._items.forEach(item => {
            if (item.price !== null) {
                sum += item.price;
            }
        });
        return sum;
    }

    count(): number {
        return this._items.length;
    }

    contains(id: string) {
        return this._items.find(item => {
            return item.id === id;
        }) != undefined;
    }
}