import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataManagerComponent } from './data-manager/data-manager.component';
import { VisManagerComponent } from './vis-manager/vis-manager.component';
import { RunManagerComponent } from './run-manager/run-manager.component';
import { NotificationManagerComponent } from './notification-manager/notification-manager.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from './settings/settings.component';
import { DatasetCollectionComponent } from './dataset-collection/dataset-collection.component';
import { DatasetViewComponent } from './dataset-view/dataset-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DataManagerComponent,
    VisManagerComponent,
    RunManagerComponent,
    NotificationManagerComponent,
    SidebarComponent,
    SettingsComponent,
    DatasetCollectionComponent,
    DatasetViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
