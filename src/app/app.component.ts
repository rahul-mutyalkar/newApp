import { Component } from '@angular/core';

// declare const LogRocket:any;
import LogRocket from 'logrocket';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  constructor()
  {
    // LogRocket.init('x0nkgi/myapp');
    this.initLogrocket();
  }

  initLogrocket()
  {
    // console.log('LogRocket : ',LogRocket);
    try {
      LogRocket.init('icra/newapp');
      LogRocket.identify('250892', {
        name: 'Rahul M',
        email: 'rahulm@gmail.com',
      
        // Add your own custom user variables here, ie:
        subscriptionType: 'pro'
      });
      console.log('try block : ',LogRocket);
      
    } catch (error) {
      console.log('error : ',error);
    }

    
  }
}
