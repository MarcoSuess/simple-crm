import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate: Date;
  loading = false;
  constructor(private firestore: AngularFirestore) { 

  
  }

  ngOnInit(): void {
  }


  saveUser() {
    
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this.loading = true;
    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result: any) => {
      console.log('adding firebase', result)
      this.loading = false;
    });
    
     
      
  }
}
