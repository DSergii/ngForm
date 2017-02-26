import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

	loginTitle = 'Login';

    regTitle = 'Registration';

    public formRegistration: FormGroup;

    constructor(private fb: FormBuilder) {

    	this.formRegistration = this.fb.group({
	        email: ['', this.emailValidator],
	        passwordGroup: this.fb.group({
	        	password: [''],
	        	pswconfirm: ['']
	        })
	    })

    }

    public emailValidator(control: FormControl): {[key: string]: boolean} {

    	const value = control.value || '';
    	const valid = value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    	return valid ? null : {emailError: true};
    }

    public loginSubmit(value: any):void {
    	console.log(value);
    }

    

}

