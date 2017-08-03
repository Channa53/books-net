import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;

    ngOnInit(){
        // implement form object that angular creates automatically.
        this.signupForm = new FormGroup({
            firstName: new FormControl('', Validators.required),     
            lastName: new FormControl('', Validators.required),     
            email: new FormControl('', Validators.required),     
            password: new FormControl('', Validators.required),     

        });
    }

    onSubmit(){
        console.log(this.signupForm);
        this.signupForm.reset();
    }
}