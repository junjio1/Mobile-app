import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})

export class Tab3Page {
  
  constructor(private media: Media) { 
    
  }

 
    file: MediaObject = this.media.create('');
 
  start(){
    this.file = this.media.create('file.mp3');
    this.file.startRecord();
  }
  
  stop(){
    this.file.stopRecord();
    this.file.release();
  }

playRecording(){
   this.file.play();
}
 
// stopRecording(){
//   this.file.pause();
// }


}