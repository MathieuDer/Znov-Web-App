import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  // Récupèration du profil utilisateur
  getProfile() {
    this.authService.loadToken();
    this.authService.getUserId();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authService.authToken
    });
    return this.http.get(`http://localhost:3000/users/profiles/${this.authService.user_id}`, { headers: headers });
  }

}
