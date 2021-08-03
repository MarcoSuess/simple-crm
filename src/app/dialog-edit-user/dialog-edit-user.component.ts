import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  user: User
  loading = false;
  birthDate: Date;
  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  
  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true
    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result: any) => {
      console.log('adding firebase', result)
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
