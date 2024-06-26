import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import {MatTable, MatTableModule} from '@angular/material/table';
import { FormFieldValidationErrorsPipe } from './pipes/form-field-validation-errors.pipe';
/*
import { ResaltadoDirective } from './directives/resaltado.directive';
import { RepetirDirective } from './directives/repetir.directive';
*/
import { MatListModule } from '@angular/material/list';
import { FullNamePipe } from './pipes/full-name.pipe';
import { FontSize20Directive } from './directives/font-size20.directive';


@NgModule({
  
  declarations: [
    FormFieldValidationErrorsPipe,
    FullNamePipe,
    FontSize20Directive
  ],
  /*
    FormFieldValidationErrorsPipe,
    ResaltadoDirective,
    RepetirDirective,
  ], 
  */
  imports: [CommonModule],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    FormFieldValidationErrorsPipe,
    FullNamePipe,
    FontSize20Directive,
    /*
    ResaltadoDirective,
    RepetirDirective,
    */
  ],
})
export class SharedModule {}