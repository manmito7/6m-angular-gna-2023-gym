import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';
import { Product } from 'src/app/model/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private path = "/products"

  productRef: AngularFirestoreCollection<Product>

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    this.productRef = db.collection("/products")
  }

  pushFileToStorage(product: Product): Observable<number | undefined> {
    const filePath = `${this.path}/` + Math.round(Math.random() * 1E9) + `${product.image?.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, product.image);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          // console.log("Downloaded URL",downloadURL)
          // console.log("DATA",product)
          let data: Product = {
            categoryName: product.categoryName,
            productName: product.productName,
            description: product.description,
            price: product.price,
            image: downloadURL,
            status: product.status,
          }
          this.saveFileData(data);
          console.log(data,"Product inserted")
        });
      })
    ).subscribe(resultdata => {
      // console.log("Result Data",resultdata)
    });
    return uploadTask.percentageChanges();
  }

  updatepushFileToStorage(id: any, file: any, data: any) {
    const filePath = `${this.path}/` + Math.round(Math.random() * 1E9) + `${file?.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);
     
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          // console.log("Downloaded URL",downloadURL)
          let mydata: Product = {
            categoryName: data.categoryName,
            productName: data.productName,
            description: data.description,
            image: downloadURL,
            price: data.price,
            status: data.status,
          }
          console.log("my data", mydata)
          this.update(id, mydata);
        });
      })
    ).subscribe(resultdata => {
      // console.log("Result Data",resultdata)
    });
    return uploadTask.percentageChanges();
  }

  private saveFileData(product: Product): void {
    this.productRef.add({ ...product })
  }

  getAll(): AngularFirestoreCollection<Product> {
    return this.productRef
  }

  getSingle(id: any) {
    return this.productRef.doc(id).get()
  }

  update(id: any, data: any) {
    return this.productRef.doc(id).update(data)
  }
  getProductByCategory(categoryName: any) {
    return this.db.collection(this.path, ref => ref.where("categoryName", "==", categoryName))
  }
  getProductByProduct(productName: any) {
    return this.db.collection(this.path, ref => ref.where("productName", "==", productName))
  }
  productstatus(id:any,status:any){
    return this.productRef.doc(id).update({status:status})

  }
}
