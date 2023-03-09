import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MinistoreService } from '../ministore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  data: any;
  constructor(private router: Router, private mStore: MinistoreService) {}

  ngOnInit() {
    this.data = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login() {
    this.mStore.verify_login(this.data.value).subscribe((res) => {
      this.data.reset();
      this.router.navigate(['/home']);
    });
  }
}
