
import { IApi, IApiProductsResponse, IOrder, IOrderResult } from "../../types";

export class ApiAdapter {
    private _api: IApi;

    constructor(api: IApi) {
        this._api = api;
    }

    async getProducts(): Promise<IApiProductsResponse> {
        try {
            return (await this._api.get<IApiProductsResponse>('/product'));
        } catch (err) {
            console.error('Ошибка:', err);
        }
        return { total: 0, items: [] };
    }

    async postOrder(order: IOrder): Promise<IOrderResult> {
        try {
            return (await this._api.post<IOrderResult>('/order', order, 'POST'));
        } catch (err) {
            console.error('Ошибка:', err);
        }
        return { id: '', total: 0 };
    }
}