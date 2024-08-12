import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'],
})
export class ApiDataComponent implements OnInit {
  photos: any[] = [];

  // Explicitly typing the FormGroup
  apiForm = new FormGroup({
    query: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
  });

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  // Getter for form controls
  getControl() {
    return this.apiForm.controls;
  }

  // Method to fetch data from the API based on form input
  fetchData(): void {
    const query = this.apiForm.get('query')?.value; // Accessing the form control value with bracket notation

    if (this.apiForm.valid && query) {
      this.apiService.getData(query).subscribe(
        (response) => {
          console.log(response);
          this.photos = response.results; // Unsplash returns an array of results under 'results'
        },
        (error) => {
          console.error('Error fetching data from API', error);
        }
      );
    }
  }
}
