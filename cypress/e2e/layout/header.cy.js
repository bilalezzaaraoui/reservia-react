/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Affichage des modals d'inscription et de connexion", () => {
  it("Affiche de la modal de connexion", () => {
    cy.visit("http://localhost:3000/");

    cy.wait(200);

    cy.get(".connect-link").click();

    cy.get(".title-modal-login").should("have.text", "Se connecter");
    cy.get(".title-modal-welcome").should(
      "have.text",
      "Bienvenue sur Reservia"
    );
  });

  it("Affiche de la modal d'inscription", () => {
    cy.visit("http://localhost:3000/");

    cy.wait(200);

    cy.get(".subscribe-link").click();

    cy.get(".title-modal-subscribe").should("have.text", "S'inscrire");
    cy.get(".title-modal-welcome").should(
      "have.text",
      "Bienvenue sur Reservia"
    );
  });
});

describe("Parcours d'inscription et de connexion d'un nouvelle utilisateur", () => {
  it("Inscription d'un utilisateur", () => {
    cy.visit("http://localhost:3000/");

    cy.wait(200);

    cy.get(".subscribe-link").click();

    cy.get("#firstname-input").type("bilal");
    cy.get("#lastname-input").type("ezzaaraoui");
    cy.get("#email-input").type("bilalezzaa1@gmail.com");
    cy.get("#password-input").type("bangkok83");

    cy.get("#btn-subscribe").click();
    cy.wait(8000);
  });

  it("Affichage du nom de l'utilisateur quand l'utilisateur est connecter", () => {
    cy.visit("http://localhost:3000/");

    cy.wait(200);

    cy.get(".connect-link").click();

    cy.get("#email-login").type("bilalezzaa1@gmail.com");
    cy.get("#email-password").type("bangkok83");

    cy.get("#btn-login-submit").click();
    cy.wait(200);

    cy.get("#user-profil-name").should("have.text", "bilal");
  });

  it("Suppression du compte de l'utilisateur", () => {
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {
        cy.stub(win, "prompt").returns("bangkok83");
      },
    });

    cy.wait(200);

    // Clique pour ouvrir la modal
    cy.get("#user-profil-name").click();

    // Clique pour aller sur la page "modifier-mes-infos"
    cy.get("#modify-info").click();
    cy.wait(200);

    // Clique pour suprimer le compte
    cy.get("#close-account").click();

    cy.wait(8000);

    cy.get(".info-line").should(
      "have.text",
      "En plein centre ville ou en pleine nature"
    );
  });
});
