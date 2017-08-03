import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: 'signin.component.html'
})
export class SigninComponent{
    signinForm: FormGroup;

    ngOnInit(){
        // implement form object that angular creates automatically.
        this.signinForm = new FormGroup({
            email: new FormControl('', Validators.required),     
            password: new FormControl('', Validators.required),     
        });
    }

    onSubmit(){
        console.log(this.signinForm);
        this.signinForm.reset();
    }
}