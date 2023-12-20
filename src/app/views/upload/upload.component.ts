import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  status: "initial" | "uploading" | "success" | "fail" = "initial"; // Variable to store file status
  file: File | null = null; // Variable to store file



  ngOnInit(): void {}

  constructor(private HttpClient: HttpClient) {}

  // On file Select
  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.status = "initial";
      this.file = file;
    }
  }

  extracted_results: any = null;

  onUpload() {
    if (this.file) {
      const formData = new FormData();
      const objData: object = {
        'file': this.file,
      }
  
      formData.append('file', this.file);
      console.log(formData)
  
      // const upload$ = this.http.post("https://httpbin.org/post", formData);

        // constructor(private http: HttpClient) {}
      // this.http: HttpClient = new HttpClient();

      const upload$ = this.HttpClient.post("http://cerebrito.edutecno.cl:5000/upload", formData,
      // const upload$ = this.HttpClient.post("http://localhost:5000/upload", formData,
        {
          headers: {
            "security-token": 'BM9!T@%1dVgDD<=l3@Lj%%R&Nk*',
            // 'Content-Type': 'application/json'
          }
        });
  
      this.status = 'uploading';
  
      upload$.subscribe({
        next: (response: any) => {
          console.log("Done 1")
          console.log(response)
          this.extracted_results = response.results;
          this.status = 'success';
        },
        error: (error: any) => {
          this.status = 'fail';
          console.log("ERROR 2")
          console.log(error)
          return throwError(() => error);

        },
      });
    }
  }

  isSubmittingForm = false;

  onSubmit() {
    this.isSubmittingForm = true;
    console.log(this.formData.value);
    
    // this.isSubmittingForm = false;
  }

  formData = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  email = this.formData.controls.email;
  password = this.formData.controls.password;

}
