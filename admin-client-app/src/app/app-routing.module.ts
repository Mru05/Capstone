import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { ClientPanelComponent } from './client/client-panel/client-panel.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' }, // Redirect to admin by default
  { path: 'admin', component: AdminPanelComponent },     // Admin panel route
  { path: 'client', component: ClientPanelComponent },     // Client panel route
  { path: '', redirectTo: '/client/client-dashboard', pathMatch: 'full' },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
