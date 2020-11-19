import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path: '',component: ListBookComponent},
  {path: 'create',component: CreateBookComponent},
  {path: 'detail/:id', component: DetailBookComponent},
  {path: 'delete/:id',component: DeleteBookComponent},
  {path: 'update/:id',component: UpdateBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
