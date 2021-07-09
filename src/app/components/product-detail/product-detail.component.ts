import { Component, OnInit } from '@angular/core';
import {Product} from "../../common/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../common/cart-item";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product =new Product();

  constructor(private route: ActivatedRoute, private productService: ProductService,
              private cartService: CartService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.handleProductDetails();
      }
    )
  }

  private handleProductDetails() {
    // @ts-ignore
    const productId: number  = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(productId).subscribe(
      data => {
        this.product = data;
      }
    )
  }

  addToCart() {
    const cartItem = new CartItem(this.product);
    this.cartService.addToCart(cartItem);
  }
}
