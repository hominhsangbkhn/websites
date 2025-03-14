import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScreenConditionComponent } from './screen-condition.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ScreenConditionComponent }
	])],
	exports: [RouterModule]
})
export class ScreenConditionRoutingModule { }
