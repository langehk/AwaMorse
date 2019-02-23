import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs/internal/Observable';
import {map, switchMap} from 'rxjs/operators';
import {defer} from 'rxjs/internal/observable/defer';
import {FileMetadata} from './file-metadata';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private storage: AngularFireStorage,
              private db: AngularFirestore) { }

      upload(file: File): Observable<FileMetadata> {
        this.storage.ref('product-pictures/' + file.name)
          .put(file)
          .then(() => {
            debugger;
          });
        return Observable.create();
      }
}
