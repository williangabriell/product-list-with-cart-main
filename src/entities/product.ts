import { v4 as uuidv4 } from "uuid";
import { Cart } from "./cart";

export class Product {
  private _id: string = uuidv4();
  private _name: string;
  private _category: string;
  private _price: number;
  private _imageUrl: string;
  private _quantity: number = 0;
  private _total: number = 0;

  constructor(name: string, category: string, price: number, imageUrl: string) {
    this._name = name;
    this._category = category;
    this._price = price;
    this._imageUrl = imageUrl;
  }

  get id() {
    return this._id;
  }

  get quantity() {
    return this._quantity;
  }

  get total() {
    return this._total;
  }

  calculateTotal() {
    this._total = this._quantity * this._price;
  }

  incrementQuantity() {
    this._quantity++;
    this.calculateTotal();

    Cart.addToCart(this);
  }

  decrementQuantity() {
    this._quantity--;
    this.calculateTotal();
    // TODO: remover o produto do carrinho se a quantidade for 0
  }

  get price() {
    return this._price;
  }
}
