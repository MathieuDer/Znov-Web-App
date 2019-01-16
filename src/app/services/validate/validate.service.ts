import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  // Methode pour verifier que les champs ne sont pas undefined
  validateRegister(user) {
    if (user.prenom === undefined ||
       user.nom === undefined ||
        user.email_perso === undefined ||
        user.email_ecole === undefined ||
        user.password === undefined ||
        user.telephone === undefined ||
        user.adresse === undefined ||
        user.date_naissance === undefined ||
        user.ville_naissance === undefined) {
          return false;
    } else {
      return true;
    }
  }

  // Methode pour verifier l'email -> Regex a vérifier (https://www.regular-expressions.info/email.html)
  validateEmail(email) {
    // tslint:disable-next-line:max-line-length
    const regexPerso = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexPerso.test(String(email).toLowerCase());
  }

  // Ajouter les autres regex tel, adresse, etc...

}
