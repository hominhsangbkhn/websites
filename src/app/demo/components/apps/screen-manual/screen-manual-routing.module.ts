import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScreenManualComponent } from './screen-manual.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ScreenManualComponent }
	])],
	exports: [RouterModule]
})
export class ScreenManualRoutingModule { }
