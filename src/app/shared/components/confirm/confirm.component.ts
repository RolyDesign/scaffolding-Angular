
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'scfld-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  @Input() confirmMessage : string = '';
  @Input() modalTitle : string = ''
  @Output() action : EventEmitter<boolean> = new EventEmitter<boolean>()
}
