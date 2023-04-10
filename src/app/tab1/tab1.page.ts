import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { BarcodeScanner , BarcodeScannerOptions   } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule],
})
export class Tab1Page {

  sccanedCode:any 

  constructor(private barcodeScanner: BarcodeScanner) {}

   scan(){
    this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
    this.sccanedCode = barcodeData.text

   }).catch(err => {
       console.log('Error', err);
   });
  }
  

  
} 
