import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

class UserModel {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  educationStatus: string;
  address: string;
  militaryStatusForMales: string;
  certificates: string;
  foreignLanguageKnowledge: string;
  programmingLanguages: string;

  constructor(u: any) {
    this.firstName = u.firstName != undefined ? u.firstName : '';
    this.lastName = u.lastName != undefined ? u.lastName : '';
    this.age = u.age != undefined ? u.age : '';
    this.gender = u.gender != undefined ? u.gender : '';
    this.educationStatus = u.educationStatus != undefined ? u.educationStatus : '';
    this.address = u.address != undefined ? u.address : '';
    this.militaryStatusForMales = u.militaryStatusForMales != undefined ? u.militaryStatusForMales : '';
    this.certificates = u.certificates != undefined ? u.certificates : '';
    this.foreignLanguageKnowledge = u.foreignLanguageKnowledge != undefined ? u.foreignLanguageKnowledge : '';
    this.programmingLanguages = u.programmingLanguages != undefined ? u.programmingLanguages : '';
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hr-app';
  responseList: UserModel[] = [];
  user = new UserModel({});
  searchUserModel = new UserModel({});

  genderList: string[] = ["Male", "Female"];

  constructor(
    private loginService: LoginService) {

  }

  searchBtn() {
    console.log(this.searchUserModel);
    this.loginService.search(this.searchUserModel).subscribe((res: any) => {
      this.responseList = [];
      for (let i = 0; i < res.length; i++) {
        this.responseList.push(new UserModel(res[i]));
      }
      console.log('response', res);
    });
  }

  clear() {
    this.searchUserModel = new UserModel({});
    this.responseList = [];

    this.loginService.getApplicants().subscribe((res: any) => {
      for (let i = 0; i < res.length; i++) {
        this.responseList.push(new UserModel(res[i]));
      }
    });
  }

  ngOnInit(): void {
    this.responseList = [];
    
    this.loginService.getApplicants().subscribe((res: any) => {
      for (let i = 0; i < res.length; i++) {
        this.responseList.push(new UserModel(res[i]));
      }
    });
  }

}
