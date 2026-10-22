import { TPayment, IBuyer, TBuyerValidationResult } from "../../types";

export class Buyer {
    private _payment: TPayment = '';
    private _email: string = '';
    private _phone: string = '';
    private _address: string = '';

    get payment(): TPayment {
        return this._payment;
    }

    get email(): string {
        return this._email;
    }

    get phone(): string {
        return this._phone;
    }

    get address(): string {
        return this._address;
    }

    toData(): Partial<IBuyer> {
        return {
            payment: this._payment,
            email: this._email,
            phone: this._phone,
            address: this._address
        };
    }
    fromData(data: Partial<IBuyer>) {
        if (data.payment !== undefined) {
            this._payment = data.payment;
        }
        if (data.email !== undefined) {
            this._email = data.email;
        }
        if (data.phone !== undefined) {
            this._phone = data.phone;
        }
        if (data.address !== undefined) {
            this._address = data.address;
        }
    }

    validate(): TBuyerValidationResult {
        let validationResult: TBuyerValidationResult = {};
        if (this._payment.trim().length === 0) {
            validationResult.payment = 'Не указан способ оплаты';
        } 
        if (this._email.trim().length === 0) {
            validationResult.email = 'Не указан E-mail';
        }
        if (this._phone.trim().length === 0) {
            validationResult.phone = 'Не указан номер телефона';
        } 
        if (this._address.trim().length === 0) {
            validationResult.address = 'Не указан адрес';
        }
        return validationResult;
    }

    erase() {
        this._payment = '';
        this._email = '';
        this._phone = '';
        this._address = '';
    }
}