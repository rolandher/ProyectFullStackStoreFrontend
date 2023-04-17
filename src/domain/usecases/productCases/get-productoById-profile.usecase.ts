import { UseCase } from 'src/base/use-case';
import { Observable } from 'rxjs';
import { ProductRepository } from 'src/domain/repositories/product.repository';
import { NewProductModel } from 'src/domain/interfaces/productInterface/NewProduct.model';

export class GetProductByIdProfileUseCase implements UseCase<number, NewProductModel> {

    constructor(private productRepository: ProductRepository) { }

    execute(id : number): Observable<NewProductModel> {
        return this.productRepository.getProductByIdAsync(id);
  }

}
