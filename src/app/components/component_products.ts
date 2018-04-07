import { Component } from '@angular/core';

@Component({
  selector: 'products',
  template: `
  <div class="productsDiv">
    <div class=navTitle>
      La Productos
    </div>
    <div class=navButton>
      <img src="/app/images/001-logout.svg" height="30px" width="30px" alt="Smiley face"  >
    </div>
    <div class=navButton>
      <img src="/app/images/shopping-cart.svg" height="30px" width="30px" alt="Smiley face"  >
    </div>
    <div class=navButton>
      <img src="/app/images/002-shopping-bag.svg" height="30px" width="30px" alt="Smiley face"  >
    </div>

  </div>
   ` ,
})
export class ProductsComponent  { appTitle: string = 'Welcome'; }
