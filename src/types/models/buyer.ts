import { TPayment, IBuyer } from "..";

type TBuyerValidationResult = {
    payment: string;
    email: string;
    phone: string;
    address: string;
}

export class Buyer {
    private _payment: TPayment;
    private _email: string;
    private _phone: string;
    private _address: string;

    constructor(
        payment: TPayment = '',
        email: string = '',
        phone: string = '',
        address: string = ''
    ) {
        this._payment = payment;
        this._email = email;
        this._phone = phone;
        this._address = address;
    }

    get payment(): TPayment {
        return this._payment;
    }
    set payment(value: TPayment) {
        this._payment = value;
    }

    get email(): string {
        return this._email;
    }
    set email(value: string) {
        this._email = value;
    }

    get phone(): string {
        return this._phone;
    }
    set phone(value: string) {
        this._phone = value;
    }

    get address(): string {
        return this._address;
    }
    set address(value: string) {
        this._address = value;
    }

    fromData(data: IBuyer) {
        this._payment = data.payment;
        this._email = data.email;
        this._phone = data.phone;
        this._address = data.address;
    }

    validate(): TBuyerValidationResult {
        let validationResult: TBuyerValidationResult = {
            payment: '',
            email: '',
            phone: '',
            address: ''
        };

        if (this._payment.length === 0) {
            validationResult.payment = 'Не указан способ оплаты';
        } else if (this._email.length === 0) {
            validationResult.email = 'Не указан E-mail';
        } else if (this._phone.length === 0) {
            validationResult.phone = 'Не указан номер телефона';
        } else if (this._address.length === 0) {
            validationResult.phone = 'Не указан адрес';
        }
        return validationResult;
    }
}