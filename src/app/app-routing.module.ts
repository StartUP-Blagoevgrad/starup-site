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
        path: 'speakers', 
        component: TeamComponent, 
        data: { endpoint: 'speakers' } 
    },
    { 
        path: 'it', 
        component: TeamComponent, 
        data: { endpoint: 'it' } 
    },
    { 
        path: 'marketing', 
        component: TeamComponent, 
        data: { endpoint: 'marketing' } 
    },
    { 
        path: 'board', 
        component: TeamComponent, 
        data: { endpoint: 'board' } 
    },
    { 
        path: 'sponsorship', 
        component: TeamComponent, 
        data: { endpoint: 'sponsorship' }
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