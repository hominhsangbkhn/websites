import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScreenErrorListComponent } from './screen-error-list.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ScreenErrorListComponent }
	])],
	exports: [RouterModule]
})
export class ScreenErrorListRoutingModule { }
