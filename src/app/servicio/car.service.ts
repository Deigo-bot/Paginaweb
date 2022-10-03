// Los servicios son clases que se encargan de acceder a los datos para entregarlos a los componentes.
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { Car } from '../model/car';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carCollection: AngularFirestoreCollection<Car>

  constructor(private db: AngularFirestore) {
    this.carCollection = db.collection('Cars');
  }
  obtenerCars() {
    return this.carCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }
  crearCar(nuevoCar: Car) {
    return new Promise(async (resolve, rejects) => {
      try {
        const id = this.db.createId();
        nuevoCar.idCar = id;
        const resultado = await this.carCollection.doc(id).set(nuevoCar);
        resolve(resultado);
      }
      catch (error) {
        rejects(error);
      }
    })


  }
  modificarCar(idCar: string, nuevaData: Car) {

    return this.db.collection("Cars").doc(idCar).update(nuevaData)

  }
  eliminarCar(idCar: string) {
    return new Promise((resolve, reject) => {
      try {
        const resp = this.carCollection.doc(idCar).delete()
        resolve(resp)
      } catch (error) {
        reject(error)
      }
    })
  }
}

