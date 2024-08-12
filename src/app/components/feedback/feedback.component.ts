import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent {
  emailRegex = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  isModalVisible = false;
  feedbackForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailRegex),
    ]),
    feedback: new FormControl('', [Validators.required]),
  });
  getControl() {
    return this.feedbackForm.controls;
  }
  Submit() {
    console.log(this.feedbackForm.value);
    if (this.feedbackForm.valid) {
      this.isModalVisible = true;
    }
  }
  handleModalClose() {
    this.isModalVisible = false;
    this.feedbackForm.reset();
  }
}
