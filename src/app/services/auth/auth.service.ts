import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user_id: any;

  constructor(private http: HttpClient) { }

  // Inscription
  registerUser(user) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, { headers: headers });
  }

  // Connexion
  authenticateUser(user) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/login', user, { headers: headers });
  }

  // Création du token en local storage
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('id', JSON.stringify(user.id));
    this.authToken = token;
    this.user_id = user.id;
  }

  // Récupère le token du local storage
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // Check si le token a expiré
  loggedIn() {
    this.loadToken();
    const accessToken = this.authToken;
    return !helper.isTokenExpired(accessToken);
  }

  // Récupère l'id de l'utilisateur du local storage
  getUserId() {
    const id = localStorage.getItem('id');
    this.user_id = id;
  }

  // Déconnexion
  logout() {
    this.authToken = null;
    this.user_id = null;
    localStorage.clear();
  }
}
