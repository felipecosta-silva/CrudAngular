import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  constructor(private ProductService: ProductService) {
    const id = '1'
    this.ProductService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  ngOnInit(): void {
  }

  deleteProduct(): void {

  }
}
