import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Account } from 'src/app/shared/interfaces/accountInterface';

@Component({
  selector: 'app-edit-account-dialog',
  templateUrl: './edit-account-dialog.component.html',
  styleUrls: ['./edit-account-dialog.component.scss']
})
export class EditAccountDialogComponent implements OnInit {

  currencies: string[] = [
    'UZS',
    'USD',
    'RUB',
  ]

  constructor(@Inject(MAT_DIALOG_DATA) public data: Account, private dialogRef: MatDialogRef<EditAccountDialogComponent>) { }

  ngOnInit(): void {
    let i = 0
  }

  onCloseClick() {
    this.dialogRef.close()
  }
}
