import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScreenParameterComponent } from './screen-paramenter.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ScreenParameterComponent }
	])],
	exports: [RouterModule]
})
export class ScreenSettingRoutingModule { }
