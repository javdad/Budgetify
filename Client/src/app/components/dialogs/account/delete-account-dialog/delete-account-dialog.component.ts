import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-account-dialog',
  templateUrl: './delete-account-dialog.component.html',
  styleUrls: ['./delete-account-dialog.component.scss']
})
export class DeleteAccountDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteAccountDialogComponent>) { }

  ngOnInit(): void {
  }

  onCloseClick() {
    this.dialogRef.close()
  }
}
