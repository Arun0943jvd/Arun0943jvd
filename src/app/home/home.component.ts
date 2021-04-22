import { Component, OnInit, ViewChild} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import * as ALL_ELEMENTS_VALUES  from '../constants/all-elements-names';

import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  elements = ALL_ELEMENTS_VALUES;
  constructor(public dialog: MatDialog) { 
   
  }

  ngOnInit(): void {
  }

  
  openModal(){
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
}


