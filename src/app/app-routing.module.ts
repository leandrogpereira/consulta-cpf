import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', children: [
    {
      path: '', component: LayoutComponent, children: [
        { path: '', data: { title: 'Home page'}, component: HomeComponent}
      ]
    }
  ]}
];

// const routes: Routes = [
//   { path: '', children: [
//     {
//       path: '', component: LayoutComponent, children: [
//         { path: '', data: { title: 'Lista de registros' }, component: PessoasComponent },
//         {
//           path: 'pessoas',
//           loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule)
//         }
//       ]
//     }
//   ]}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
