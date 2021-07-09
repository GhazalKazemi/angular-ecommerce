import { Injectable } from '@angular/core';
import {CartItem} from "../common/cart-item";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(cartItem: CartItem){
    let alreadyExistInCart: boolean = false;
    // @ts-ignore
    let existingCartItems: CartItem = undefined;
    if (this.cartItems.length > 0){
      // @ts-ignore
      existingCartItems = this.cartItems.find(tempCartItem => tempCartItem.id === cartItem.id);
      // for (let tempCartItem of this.cartItems){
      //   if (tempCartItem.id === cartItem.id){
      //     existingCartItems = tempCartItem;
      //     break;
      //   }
      // }
      alreadyExistInCart = (existingCartItems != undefined);
    }
    if (alreadyExistInCart){
      existingCartItems.quantity++;
    }else {
      this.cartItems.push(cartItem);
    }

    //total price and total quantity:
    this.computeCartTotals();

  }

  private computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;
    for (let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }
}
