import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input()
  public price: number = 0;
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('priceComponent ngOnInit');

    this.interval$ = interval(1000).subscribe( value => console.log(`Tick: ${ value }`));

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('priceComponent ngOnChanges');
    console.log({changes})
  }
  ngOnDestroy(): void {
    console.log('priceComponent ngOnDestroy');
    this.interval$?.unsubscribe();
  }


}
