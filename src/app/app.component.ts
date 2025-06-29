import { Component, inject } from '@angular/core';
import { SharedModule } from './shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CartComponent } from './features/cart/cart.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ShopStore } from './store/shop.store';

@Component({
  selector: 'app-root',
  imports: [
    SharedModule,
    ToolbarComponent,
    CartComponent,
    ProductListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly store = inject(ShopStore);
}
