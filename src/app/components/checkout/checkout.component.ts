import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // @ts-ignore
  checkoutFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        country: [''],
        city: [''],
        state: [''],
        street:[''],
        zipCode: ['']
      }),
      billingAddress: this.formBuilder.group({
        country: [''],
        city: [''],
        state: [''],
        street:[''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode:[''],
        expirationMonth: [''],
        expirationYear: ['']
      }),
    });
  }

  onSubmit() {

  }
}
