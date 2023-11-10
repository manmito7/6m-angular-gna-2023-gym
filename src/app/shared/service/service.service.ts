import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, finalize } from 'rxjs';
import { Service } from 'src/app/model/service/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private path = "/services"

  serviceRef:AngularFirestoreCollection<Service>

  constructor(private db:AngularFirestore,private storage : AngularFireStorage) { 
    this.serviceRef = db.collection("/services")
  }

  pushFileToStorage(services : Service):Observable<number | undefined>{
    const filePath = `${this.path}/`+Math.round(Math.random()*1E9)+`${services.fileName?.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, services.fileName);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          // console.log("Downloaded URL",downloadURL)
          // console.log("DATA",services)
          let data: Service = {
            fileName: downloadURL,
            serviceName : services.serviceName,
            status : services.status,
            // fileName: services.fileName?.name
          }
          this.saveFileData(data);
          console.log(data,"Service Data")
        });
      })
    ).subscribe(resultdata => {
      // console.log("Result Data",resultdata)
    });
    return uploadTask.percentageChanges();
  }

  updatepushFileToStorage(id:any,file:any,data:any){
    const filePath = `${this.path}/`+Math.round(Math.random()*1E9)+`${file?.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath,file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          // console.log("Downloaded URL",downloadURL)
          let mydata: Service = {
            fileName: downloadURL,
            serviceName : data.serviceName,
          }
          this.update(id,mydata);
        });
      })
    ).subscribe(resultdata => {
      // console.log("Result Data",resultdata)
    });
    return uploadTask.percentageChanges();
  }

  private saveFileData(services: Service): void {
    this.serviceRef.add({ ...services })
  }

  getAllEnable():AngularFirestoreCollection<Service>{
    return this.db.collection("/services", ref=>ref.where('status', '==', 'Enable'))
  }
  getAll():AngularFirestoreCollection<Service>{
    return this.db.collection("/services")
  }
  
  getSingle(id:any){
    return this.serviceRef.doc(id).get()
  }

  update(id:any,data:any){
    return this.serviceRef.doc(id).update(data)
  }
  servicestatus(id:any,status:any){
    return this.serviceRef.doc(id).update({status:status})

  }
}
