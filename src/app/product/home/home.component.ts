import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  allProducts: Product[] = [];
  constructor(private productService: ProductService){}

  ngOnInit(): void {
      this.productService.getAll().subscribe((data) => {
        this.allProducts = data;
      })
  }

}
