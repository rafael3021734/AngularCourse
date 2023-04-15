import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  atributoLegal = "qualquer"

  product: Product = {
    name: 'Produto de teste',
    price: 125.98
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  //  this.productService.showMessage('teste...')
  }

  fazeAlgo(): void {
    console.log('Fazendo Algo!')
  }
  //createProduct(): void {
   // this.router.navigate(['/products'])
  //}
  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
      this.router.navigate(['/products'])
    })
  }
  cancel(): void {
    this.productService.showMessage('operação executada com sucesso')
  }
}
