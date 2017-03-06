import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  }


  @Output() onFormResult = new EventEmitter<any>();
  constructor( private tokenAuthService:Angular2TokenService) {  }

  ngOnInit() {
  }

  onSignupSubmit(){
    this.tokenAuthService.registerAccount(this.signUpUser).subscribe(
        res => {
          console.log("signedup");
          if (res.status == 200){
            this.onFormResult.emit({signedUp: true, res});
          }

        },

        err => {
          console.log('err:', err);
          this.onFormResult.emit({signedUp: false, err});
        }
      );
  }

}
