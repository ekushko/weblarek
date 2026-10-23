
import { IApi, IApiProductsResponse, IOrder, IOrderResult } from "../../types";

export class ApiAdapter {
    private _api: IApi;

    constructor(api: IApi) {
        this._api = api;
    }

    async getProducts(): Promise<IApiProductsResponse> {
        return (await this._api.get<IApiProductsResponse>('/product'));
    }

    async postOrder(order: IOrder): Promise<IOrderResult> {
        return (await this._api.post<IOrderResult>('/order', order, 'POST'));
    }
}