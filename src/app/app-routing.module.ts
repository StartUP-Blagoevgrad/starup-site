import { TeamComponent } from "./pages/team-page/team.component";
import { EventsPageComponent } from "./pages/events-page/events-page.component";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: 'team',
        component: TeamComponent,
        //canActivate: [AuthGuardService]
    },
    {
        path: 'events',
        component: EventsPageComponent,
        //canActivate: [AuthGuardService]
    }
]

@NgModule({
    providers: [],
    exports: [RouterModule],
    declarations: [],
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    bootstrap: []
})
export class AppRoutingModule { }