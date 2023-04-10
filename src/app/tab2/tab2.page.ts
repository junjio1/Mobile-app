import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';


import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule]
})
export class Tab2Page {
  emailTo :string =''
  subject:string = ''
  emailBody: string = ''

  constructor(private emailComposer: EmailComposer) { }
  
  sendEmail(){
   let email = {
      to: this.emailTo,
      cc: "",
      bcc: [''],
      attachments: [
        
      ],
      subject: this.subject,
      body: this.emailBody,
      isHtml: true
    }
    this.emailComposer.open(email);
   
  }

}
