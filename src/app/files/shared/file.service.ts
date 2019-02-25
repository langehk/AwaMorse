import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs/internal/Observable';

import {FileMetaData} from './file-metadata';
import {defer} from 'rxjs/internal/observable/defer';
import {first, map, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private storage: AngularFireStorage,
              private db: AngularFirestore) { }

      upload(file: File): Observable<FileMetaData> {
        return this.addFileMetadata(
          {
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified
          }
        ).pipe(
          switchMap(fileMeta => {
            debugger;
            return this.storage.ref('product-pictures/' + fileMeta.id)
                .put(file)
                .snapshotChanges()
            .pipe(
              first(),
               map(fileRef => {
                debugger;
                return fileMeta;
              })
            );
          })
        );
      }


        addFileMetadata(meta: FileMetaData): Observable<FileMetaData> {
          return defer(() =>
            this.db.collection('files')
              .add(meta)
              .then()
          ).pipe(
            map(documentRef => {
              meta.id = documentRef.id;
              debugger;
              return meta;
            })
          );
      }

}
