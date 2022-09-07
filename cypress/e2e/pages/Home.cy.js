/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Récuperation des données de Firebase", () => {
  it("Rendu des 6 hébergements fourni par la base de données", () => {
    cy.visit("http://localhost:3000/");

    cy.wait(200);
    cy.get("[data-testid=first-bloc]").should("have.length", 6);
  });

  it("Rendu des 6 hébergements fourni par la base de données", () => {
    cy.visit("http://localhost:3000/");

    cy.wait(200);
    cy.get("[data-testid=second-bloc-list]").should("have.length", 3);
  });

  it("Rendu des 6 acitvités fourni par la base de données", () => {
    cy.visit("http://localhost:3000/");

    cy.wait(200);
    cy.get("[data-testid=activity-link]").should("have.length", 6);
  });
});

describe("Affichage de la modal de recherche", () => {
  it("Rendu de la modal", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(100);
    cy.get("[data-testid=search-element]").type("am");
    cy.get("[data-testid=search-response]").should("exist");
  });

  it("Rendu de la modal avec de la data trouvé", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(500);
    cy.get("[data-testid=search-element]").type("ma");
    cy.wait(500);
    cy.get("[data-testid=search-response]").should(
      "have.text",
      "2 resultat trouvé"
    );
  });
});
