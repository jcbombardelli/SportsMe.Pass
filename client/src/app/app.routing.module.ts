import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { IndexComponent } from "./partials/index/index.component";
import { LoginComponent } from "./partials/login/login.component";
import { UserComponent } from "./partials/user/user.component";
import { EventComponent } from "./partials/event/event.component";
import { EventDetailComponent } from "./partials/event/detail/event-detail.component";
import { PageNotFoundComponent } from "./partials/page-not-found/page-not-found.component";
import { AuthGuard } from "./guardians/auth.guard.service";


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent },
    { path: '', component: IndexComponent },
    { path: '**', component: PageNotFoundComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }