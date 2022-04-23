import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-account-dialog',
  templateUrl: './create-account-dialog.component.html',
  styleUrls: ['./create-account-dialog.component.scss']
})
export class CreateAccountDialogComponent implements OnInit {

  currencies: string[] = [
    'UZS',
    'USD',
    'RUB',
  ]

  constructor(private dialogRef: MatDialogRef<CreateAccountDialogComponent>) { }

  ngOnInit(): void {
    let i = 0
  }

  onCloseClick() {
    this.dialogRef.close()
  }
}
