import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ScreenManualRoutingModule } from './screen-manual-routing.module';
import { ScreenManualComponent } from './screen-manual.component';

@NgModule({
	imports: [
		CommonModule,
		ScreenManualRoutingModule,
		ButtonModule,
		RippleModule,
		SplitButtonModule,
		ToggleButtonModule,
	],
	declarations: [ScreenManualComponent]
})
export class ScreenManualModule { }
