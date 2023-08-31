import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
// import {UserService} from "../../services/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
// import {DialogComponent} from "../dialog/dialog.component";
import {DateAdapter} from "@angular/material/core";
import {Title} from "@angular/platform-browser";
import {FormService} from "../../service/form.service";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title = 'Sign-in';
  userForm !: FormGroup;
  actionBtn: string = 'Submit';
  //isDeparted = 1; //signed_out
  departureTime = new Date();
  formTitle = "Sign-In";

  @Input() signed_out = false;

  constructor(private formBuilder: FormBuilder, private formService: FormService, @Inject(MAT_DIALOG_DATA) public editData: any,
              private dateAdapter: DateAdapter<Date>, private titleService:Title) {
    this.dateAdapter.setLocale('en-GB'); //sets the locale to
  }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      dateCreated: ['', Validators.required]
    });

    console.log("This is departure time " + this.departureTime);
    this.titleService.setTitle(this.formTitle);
  }


  addExpense() {
    this.formService.postExpenseForm(this.userForm.value).subscribe({
      next: (response:any) => {
        console.log(response);
        this.userForm.reset();
      },
      error: () => {
        alert("Error while adding the product")
      }
    })
  }//addUser()


}

