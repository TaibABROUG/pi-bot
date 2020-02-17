
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/app/shared/components/profile/nav-bar/nav-bar.component';
import { NavLeftComponent } from 'src/app/shared/components/agent/nav-left/nav-left.component';
import { TestBotComponent } from 'src/app/shared/components/agent/test-bot/test-bot.component';
import { Router, RouterModule } from '@angular/router';
@NgModule({
    imports: [
        CommonModule, RouterModule 
     ],
    declarations: [
         NavBarComponent, 
         NavLeftComponent,
         TestBotComponent
    ],
    exports: [
        NavBarComponent,
        NavLeftComponent,
        TestBotComponent
    ]
})

export class SharedModule {}