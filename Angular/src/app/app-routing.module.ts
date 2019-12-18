import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VisitorProductListComponent } from './visitor-product-list/visitor-product-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';
import { UserCartComponent } from './user-cart/user-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserProductListComponent } from './user-product-list/user-product-list.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserOrderHistoryComponent } from './user-order-history/user-order-history.component';
import { AdminDiscussionBoardComponent } from './admin-discussion-board/admin-discussion-board.component';
import { UserDiscussionBoardComponent } from './user-discussion-board/user-discussion-board.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'visitor-product-list', component: VisitorProductListComponent },
  {
    path: 'admin-profile', component: AdminProfileComponent
  },
  {
    path: 'admin-product-list', component: AdminProductListComponent,
    canActivate: [AuthGuard], data: { expectedRole: ['Admin'] }
  },
  {
    path: 'admin-add-product', component: AdminAddProductComponent,
    canActivate: [AuthGuard], data: { expectedRole: ['Admin'] }
  },
  {
    path: 'user-list', component: UserListComponent,
    canActivate: [AuthGuard], data: { expectedRole: ['Admin'] }
  },
  {
    path: 'admin-discussion-board', component: AdminDiscussionBoardComponent,
    canActivate: [AuthGuard], data: { expectedRole: ['Admin'] }
  },
  {
    path: 'user-discussion-board', component: UserDiscussionBoardComponent,
    canActivate: [AuthGuard], data: { expectedRole: ['User'] }
  },
  {
    path: 'user-profile', component: UserProfileComponent,
    canActivate: [AuthGuard], data: { expectedRole: ['User'] }
  },
  {
    path: 'user-cart', component: UserCartComponent,
    canActivate: [AuthGuard], data: { expectedRole: ['User'] }
  },
  {
    path: 'user-product-list', component: UserProductListComponent,
    canActivate: [AuthGuard], data: { expectedRole: ['User'] }
  },
  {
    path: 'user-order-history', component: UserOrderHistoryComponent,
    canActivate: [AuthGuard], data: { expectedRole: ['User'] }
  },
  {
    path: 'contact-us', component: ContactUsComponent,
   },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
