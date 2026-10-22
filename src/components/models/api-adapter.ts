
import { IApi, IApiProductsResponse, IProduct } from "../../types";

export class ApiAdapter {
    private _api : IApi;

    constructor(api: IApi) {
        this._api = api;
    }

    async getProducts(): Promise<IProduct[]> {
        try {
            return (await this._api.get<IApiProductsResponse>('/product')).items;
        } catch (err) {
            console.error('Ошибка:', err);
        }
        return [];
    }
}