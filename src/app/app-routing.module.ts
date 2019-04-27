import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'admin', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  {
    path: 'homeAdmin',
    loadChildren: './pages/home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  { path: 'new-proposal', loadChildren: './pages/new-proposal/new-proposal.module#NewProposalPageModule' },
  { path: 'edit-proposal', loadChildren: './pages/edit-proposal/edit-proposal.module#EditProposalPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
