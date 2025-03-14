import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScreenIoMonitorComponent } from './screen-io-monitor.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ScreenIoMonitorComponent }
	])],
	exports: [RouterModule]
})
export class ScreenIoMonitorRoutingModule { }
