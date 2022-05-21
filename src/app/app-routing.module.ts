import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { MoviesComponent } from './pages/movies/movies.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';

const routes: Routes = [
  {path: '', component: SandboxComponent},
  { path: 'sandbox', component: SandboxComponent},
  { path: 'movies', component: MoviesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
