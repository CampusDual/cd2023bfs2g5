import { NgModule } from "@angular/core";
import { ServiceWorkerModule } from "@angular/service-worker";
import {
  APP_CONFIG,
  ONTIMIZE_MODULES,
  ONTIMIZE_PROVIDERS,
  OntimizeWebModule,
} from "ontimize-web-ngx";

import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CONFIG } from "./app.config";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material";
import { MatDialogModule } from '@angular/material/dialog';
import { AlertDialogComponent } from "./main/alerts/alert-dialog/alert-dialog.component";
import { AlertsModule } from "./main/alerts/alerts.module";

// Standard providers...
// Defining custom providers (if needed)...
export const customProviders: any = [];

@NgModule({
  imports: [
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    AppRoutingModule,
    MatDialogModule,
    AlertsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" },
    },
    ONTIMIZE_PROVIDERS,
    ...customProviders,
  ],
  entryComponents: [AlertDialogComponent],
})
export class AppModule {}
