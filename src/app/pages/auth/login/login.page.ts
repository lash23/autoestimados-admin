import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.innitLoginForm();
  }

  onSubmit() {
    this.globalService.login();

    this.router.navigate(['/estimates']);
  }

  innitLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
}
