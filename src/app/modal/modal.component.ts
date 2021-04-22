import { Component, OnInit } from '@angular/core';

import * as ALL_ELEMENTS_VALUES from '../constants/all-elements-names'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  elements:any = ALL_ELEMENTS_VALUES;
  modalVal = {
    selectedDate: null as any,
    selectedCheckBoxes: new Array<ICheckBox>()
  } 
  showSlectedValues!:boolean;
  selectedItemsList = [];
  minDate!: Date;
  maxDate!: Date;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }
  constructor() { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
  }

  setDefault() {
    this.modalVal.selectedDate= null;
  }

  displaySelectedValues(){
    this.getSelectedItems();
    this.showSlectedValues = true;
    
  }

  changeSelection() {
    this.selectedItemsList = this.elements.checkBoxes.filter((value:{ isChecked: boolean; name: string; }, index:number) => {
      return value.isChecked
    });
  }

  getSelectedItems(): void {
    this.modalVal.selectedCheckBoxes = [];
    this.elements.checkBoxes.forEach((box:any, index: number) => {
      if (box.isChecked) {
        this.modalVal.selectedCheckBoxes.push(box.value);
      }
    });
  }
}

export class ICheckBox {
  name!: String;
  isChecked!: boolean;
}