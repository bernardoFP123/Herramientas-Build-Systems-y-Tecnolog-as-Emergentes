import { Component } from '@angular/core';

@Component({
  selector: 'shop',
  template: `
   <navigation></navigation>
   <products></products>
   <cart></cart>
   ` ,
})
export class ShopComponent  {
  appTitle: string = 'Welcome';
}
