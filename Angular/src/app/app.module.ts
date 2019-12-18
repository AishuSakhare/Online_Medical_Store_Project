import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserOrderHistoryComponent } from './user-order-history/user-order-history.component';
import { UserProductListComponent } from './user-product-list/user-product-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VisitorProductListComponent } from './visitor-product-list/visitor-product-list.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminDiscussionBoardComponent } from './admin-discussion-board/admin-discussion-board.component';
import { UserDiscussionBoardComponent } from './user-discussion-board/user-discussion-board.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        AdminAddProductComponent,
        AdminProductListComponent,
        ContactUsComponent,
        LoginComponent,
        PageNotFoundComponent,
        RegisterComponent,
        UserCartComponent,
        UserListComponent,
        UserOrderHistoryComponent,
        UserProductListComponent,
        UserProfileComponent,
        VisitorProductListComponent,
        AdminProfileComponent,
        AdminDiscussionBoardComponent,
        UserDiscussionBoardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
