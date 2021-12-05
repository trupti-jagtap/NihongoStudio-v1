import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  // created form controls and form data to bind with HTML form
  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // to prevent spam
  submitted: boolean = false; // show and hide success message
  isLoading: boolean = false; // disable the submit button if we are loading
  responseMessage!: string; // the response message to show to the user 

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void {
  }

  isValidForm(): boolean {
    if (this.honeypot.value != "") { return false; } // make sure the honey pot is not filled in
    if (this.name.hasError("required")) { return false; }
    if (this.email.hasError("required") || this.email.hasError("email")) { return false; }
    if (this.message.hasError("required") || this.message.hasError("maxLength")) { return false; }
    return true;
  }

  onSubmit() {
    if (this.isValidForm()) {
      var formData: any = new FormData();
      formData.append("name", this.form.get("name")?.value);
      formData.append("email", this.form.get("email")?.value);
      formData.append("message", this.form.get("message")?.value);
      this.http.post("https://script.google.com/macros/s/AKfycbyfUDllSTGFFdQDNqI1LjmpmgA_YU9V-Mm8tW6agoafoOK_eFo/exec", formData).subscribe(
        (response) => {
          this.submitted = true;
          console.log(response);
        },
        (error) => { console.log(error); this.submitted = true; }
      );
    }
  }
  // onSubmit(){
  //   if(this.form.status == "VALID" && this.honeypot.value == ""){
  //     this.form.disable(); // disable the form if it's valid to disable multiple submissions
  //     var formData: any = new FormData();
  //     formData.append("name", this.form.get("name")?.value);
  //     formData.append("email", this.form.get("email")?.value);
  //     formData.append("message", this.form.get("message")?.value);
  //     this.isLoading = true; // sending the post request async so it's in progress
  //     this.submitted = false; // hide the response message on multiple submits
  //     this.http.post("YOUR GOOGLE WEB APP URL HERE", formData).subscribe(
  //       (response) => {
  //         // choose the response message
  //         if (response["result"] == "success") {
  //           this.responseMessage = "Thanks for the message! I'll get back to you soon!";
  //         } else {
  //           this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
  //         }
  //         this.form.enable(); // re enable the form after a success
  //         this.submitted = true; // show the response message
  //         this.isLoading = false; // re enable the submit button
  //         console.log(response);
  //       },
  //       (error) => {
  //         this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
  //         this.form.enable(); // re enable the form after a success
  //         this.submitted = true; // show the response message
  //         this.isLoading = false; // re enable the submit button
  //         console.log(error);
  //       }
  //     );
  //   }
  // } //onSubmit
}
