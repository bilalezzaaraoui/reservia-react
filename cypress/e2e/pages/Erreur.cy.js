/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Affichage de la page d'erreur", () => {
  it("Url d'un hébergment avec un faux id", () => {
    cy.visit("http://localhost:3001/accommodation/gbrbg");

    cy.wait(200);

    cy.get(".error-message").should("have.text", "Erreur 404");
  });

  it("Url d'une activitée avec un faux id", () => {
    cy.visit("http://localhost:3001/activity/gbrbg");

    cy.wait(200);

    cy.get(".error-message").should("have.text", "Erreur 404");
  });

  it("Url d'un hébergment avec une fausse recherche", () => {
    cy.visit("http://localhost:3001/accommodation/gbrbg");

    cy.wait(200);

    cy.get(".error-message").should("have.text", "Erreur 404");
  });

  it("Url d'un hébergment avec une faux filtre", () => {
    cy.visit("http://localhost:3001/accommodation/filter=ok");

    cy.wait(200);

    cy.get(".error-message").should("have.text", "Erreur 404");
  });
});

describe("Affichage de la page d'erreur pour les routes protégées", () => {
  it("Rediriction du panier vers la page erreur quand il est vide", () => {
    cy.visit("http://localhost:3001/panier");

    cy.wait(200);

    cy.get(".error-message").should("have.text", "Erreur 404");
  });

  it("Rediriction du panier vers la page erreur quand il est vide", () => {
    cy.visit("http://localhost:3001/panier");

    cy.wait(200);

    cy.get(".error-message").should("have.text", "Erreur 404");
  });

  it("Rediriction de la page 'mes-reservation' vers la page erreur quand l'utilisateur n'est pas connecter", () => {
    cy.visit("http://localhost:3001/mes-reservation");

    cy.wait(200);

    cy.get(".error-message").should("have.text", "Erreur 404");
  });

  it("Rediriction de la page 'modifier-mes-infos-personnelles' vers la page erreur quand l'utilisateur n'est pas connecter", () => {
    cy.visit("http://localhost:3001/modifier-mes-infos-personnelles");

    cy.wait(200);

    cy.get(".error-message").should("have.text", "Erreur 404");
  });
});
