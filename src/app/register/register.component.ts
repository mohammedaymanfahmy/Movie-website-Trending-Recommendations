import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerform: FormGroup = new FormGroup({
    'firstName':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    'lastName':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    'age':new FormControl(null,[Validators.required,Validators.minLength(1),Validators.maxLength(2)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z]/)]),
  })
  constructor(private _auth:AuthService,private _Router:Router) { }

  register()
  {
    if (this.registerform.invalid)
    {
      return;
    }
    this._auth.register(this.registerform.valid).subscribe((data) =>
    {
      if (data.message == 'success')
      {
        this._Router.navigateByUrl("/login")
      }
      else
      {
        alert(data.message)
      }

        this._Router.navigateByUrl("/login")

    })
  }
  ngOnInit(): void {
  }

}
