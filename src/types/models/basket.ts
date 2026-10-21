import { IProduct } from "..";


export class Basket {
    private _items : IProduct[];

    constructor(items: IProduct[] = []) {
        this._items = items;
    }

    get items(): IProduct[] {
        return this._items;
    }

    add(item: IProduct) {
        this._items.push(item);
    }

    remove(item: IProduct) {
        const index = this._items.indexOf(item);

        if (index >= 0) {
            this._items.splice(index, 1);
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