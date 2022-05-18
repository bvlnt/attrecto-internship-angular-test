import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'intership-angular-test-2022';

  counter : number = 0;

  increase(){
    this.counter++;
  }
  
  decrease(){
    if(this.counter==0){
      return;
    }else{
      this.counter--;
    }
  }

}

