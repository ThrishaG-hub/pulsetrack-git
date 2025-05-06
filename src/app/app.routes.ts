
import { Routes } from '@angular/router';
import { BiometricComponent } from './biometric/biometric.component';
import { AttendanceComponent } from './attendance/attendance.component';    

export const routes: Routes = [ 
   { path : 'biometric', 
     component: BiometricComponent,

children:  [
    {
        path: 'attendance' , 
        component: AttendanceComponent},   
      ]
   },
 { 
    path: '' ,
   redirectTo: 'app',          
    pathMatch: 'full' }
];

  