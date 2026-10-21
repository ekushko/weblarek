import { Api } from "../../components/base/Api"
import { IProduct } from "..";

export class ApiAdapter {
    private _api : Api = new Api(import.meta.env.VITE_API_ORIGIN);

    async getProducts(): Promise<IProduct[]> {
        try {
            return await this._api.get<IProduct[]>('/product');
        } catch (err) {
            console.error('Ошибка:', err);
        }
        return [];
    }
}