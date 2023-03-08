import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationMenuComponent } from './shared/components/navigation-menu/navigation-menu.component';
import { AppComponent } from './app.component';
import { TeamComponent } from './pages/team-page/team.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { BoardComponent } from './components/departments/board/board.component';

@NgModule({
  declarations: [
    AppComponent, NavigationMenuComponent, TeamComponent, EventsPageComponent, BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
