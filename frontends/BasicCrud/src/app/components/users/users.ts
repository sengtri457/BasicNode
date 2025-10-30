import { Component, inject, OnInit } from "@angular/core";
import { Apiservices } from "../../services/apiservices";
import { userInterface } from "../../models/userModels";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-users",
  imports: [CommonModule, FormsModule],
  templateUrl: "./users.html",
  styleUrl: "./users.css",
})
export class Users implements OnInit {
  ngOnInit(): void {
    this.displayUser();
  }
  api = inject(Apiservices);
  userlist: userInterface[] = [];

  userItem: userInterface = {
    userName: "",
    password: "",
    email: "",
    address: "",
  };

  displayUser() {
    this.api.getUser("/users").subscribe({
      next: (res: any) => {
        this.userlist = res;
        console.log("This Api Work Well and Data: " + this.userlist);
      },
      error: (err) => {
        console.log("Api Cannot Fetch:" + err);
      },
    });
  }

  addUser() {
    this.api.addUsers("/users", this.userItem).subscribe({
      next: (res: any) => {
        alert("Add User Sucesssful!!");
        this.displayUser();
        this.resetForm();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  resetForm() {
    this.userItem = {
      userName: "",
      password: "",
      email: "",
      address: "",
    };
  }
}
