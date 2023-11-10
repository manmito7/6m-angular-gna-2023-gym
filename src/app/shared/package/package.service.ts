import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';
import { Package } from 'src/app/model/package/package.model';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private path = "/packages"

  packageRef: AngularFirestoreCollection<Package>

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    this.packageRef = db.collection("/packages")
  }

  pushFileToStorage(packages: Package): Observable<number | undefined> {
    const filePath = `${this.path}/` + Math.round(Math.random() * 1E9) + `${packages.image?.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, packages.image);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          // console.log("Downloaded URL",downloadURL)
          // console.log("DATA",packages)
          let data: Package = {
            serviceName: packages.serviceName,
            packageName: packages.packageName,
            description: packages.description,
            price: packages.price,
            image: downloadURL,
            status: packages.status,
          }
          this.saveFileData(data);
          console.log(data,"packages inserted")
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
          let mydata: Package = {
            serviceName: data.serviceName,
            packageName: data.packageName,
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

  private saveFileData(packages: Package): void {
    this.packageRef.add({ ...packages })
  }

  getAll(): AngularFirestoreCollection<Package> {
    return this.packageRef
  }
  getAllEnable(): AngularFirestoreCollection<Package> {
    return this.db.collection("/packages", ref=>ref.where('status', '==', 'Enable'))
    
  }

  getSingle(id: any) {
    return this.packageRef.doc(id).get()
  }

  update(id: any, data: any) {
    return this.packageRef.doc(id).update(data)
  }
  getPackageByService(serviceName: any) {
    return this.db.collection(this.path, ref => ref.where("serviceName", "==", serviceName).where('status', '==', 'Enable'))
  }
  getPackageByPackage(packageName: any) {
    return this.db.collection(this.path, ref => ref.where("packageName", "==", packageName))
  }
  packagestatus(id:any,status:any){
    return this.packageRef.doc(id).update({status:status})

  }
}
