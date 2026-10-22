import { IProduct } from "../../types"

export class Products {
    private _items: IProduct[] = [];
    private _selectedItem: IProduct | null = null;

    item(id: string): IProduct | undefined {
        return this._items.find(item => {
            return item.id === id;
        });
    }

    get items(): IProduct[] {
        return this._items;
    }
    set items(list: IProduct[]) {
        this._items = list;
    }
    
    get selectedItem() : IProduct | null {
        return this._selectedItem;
    }
    set selectedItem(item : IProduct | null) {
        this._selectedItem = item;
    }
}