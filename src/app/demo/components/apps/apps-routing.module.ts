import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'calendar', data: { breadcrumb: 'Calendar' }, loadChildren: () => import('./calendar/calendar.app.module').then(m => m.CalendarAppModule) },
        { path: 'tasklist', data: { breadcrumb: 'Task List' }, loadChildren: () => import('./tasklist/tasklist.app.module').then(m => m.TaskListAppModule) },
        { path: 'chat', data: { breadcrumb: 'Chat' }, loadChildren: () => import('./chat/chat.app.module').then(m => m.ChatAppModule) },
        { path: 'files', data: { breadcrumb: 'Files' }, loadChildren: () => import('./file/file.app.module').then(m => m.FileAppModule) },
        { path: 'mail', data: { breadcrumb: 'Mail' }, loadChildren: () => import('./mail/mail.app.module').then(m => m.MailAppModule) },
        { path: 'kanban', data: { breadcrumb: 'Kanban' }, loadChildren: () => import('./kanban/kanban.app.module').then(m => m.KanbanAppModule) },
        { path: 'blog', data: { breadcrumb: 'Blog' }, loadChildren: () => import('./blog/blog.app.module').then(m => m.BlogAppModule) },
        { path: 'screen-manual', data: { breadcrumb: 'Manual' }, loadChildren: () => import('./screen-manual/screen-manual.module').then(m => m.ScreenManualModule) },
        { path: 'screen-error-list', data: { breadcrumb: 'Error' }, loadChildren: () => import('./screen-error-list/screen-error-list.module').then(m => m.ScreenErrorListModule) },
        { path: 'screen-setting', data: { breadcrumb: 'Setting' }, loadChildren: () => import('./screen-setting/screen-setting.module').then(m => m.ScreenSettingModule) },
        { path: 'screen-condition', data: { breadcrumb: 'Condition' }, loadChildren: () => import('./screen-condition/screen-condition.module').then(m => m.ScreenConditionModule) },
        { path: 'screen-params', data: { breadcrumb: 'Parameter' }, loadChildren: () => import('./screen-parameter/screen-parameter.module').then(m => m.ScreenParameterModule) },
        { path: 'screen-io', data: { breadcrumb: 'IO Monitor' }, loadChildren: () => import('./screen-io-monitor/screen-io-monitor.module').then(m => m.ScreenIoMonitorModule) },
    ])],
    exports: [RouterModule]
})
export class AppsRoutingModule { }
