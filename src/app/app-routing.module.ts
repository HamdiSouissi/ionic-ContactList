import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-new-contact',
    loadChildren: () => import('./add-new-contact/add-new-contact.module').then( m => m.AddNewContactPageModule)
  },
  {
    path: 'update-contact',
    loadChildren: () => import('./update-contact/update-contact.module').then( m => m.UpdateContactPageModule)
  },
  {
    path: 'view-contact',
    loadChildren: () => import('./view-contact/view-contact.module').then( m => m.ViewContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
