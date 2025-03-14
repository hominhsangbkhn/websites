import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScreenSettingComponent } from './screen-setting.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ScreenSettingComponent }
	])],
	exports: [RouterModule]
})
export class ScreenSettingRoutingModule { }
