
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/app/shared/components/profile/nav-bar/nav-bar.component';
import { NavLeftComponent } from 'src/app/shared/components/agent/nav-left/nav-left.component';
import { TestBotComponent } from 'src/app/shared/components/agent/test-bot/test-bot.component';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [MatButtonModule,
        MatDialogModule,
        CommonModule,
         RouterModule ,
         MatFormFieldModule,
         MatInputModule,
         FormsModule,
    
     ],
    declarations: [
         NavBarComponent, 
         NavLeftComponent,
         TestBotComponent
    ],
    exports: [
        NavBarComponent,
        NavLeftComponent,
        TestBotComponent,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,FormsModule,
    ],
 
})

export class SharedModule {}