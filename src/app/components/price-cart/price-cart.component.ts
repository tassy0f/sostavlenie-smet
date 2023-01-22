import { Component, Input, OnInit } from '@angular/core';
import { Rates } from 'src/app/models/rates';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-price-cart',
  templateUrl: './price-cart.component.html',
  styleUrls: ['./price-cart.component.scss'],
})
export class PriceCartComponent implements OnInit {
  @Input()
  ratesListik!: Rates;

  constructor(private msge:MessageService) { }

  ngOnInit() {
  }
 
  modalCall(){
    this.msge.sendMessage(this.ratesListik)
    document.body.style.overflow = 'hidden';
  }
}
