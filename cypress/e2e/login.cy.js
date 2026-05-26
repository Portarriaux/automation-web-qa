/// <reference types="cypress" />

// Funcionalidade
describe("Login", () => {
  // Cenario 1

  it("Login com sucesso", () => {
    // Abre a aplicação e preencher emial/senha
    cy.visit("https://portal.placar.app/users/sign_in");

    // preencher email
    cy.get("#user_email").type("superadmin@test.com");

    //preencher senha
    cy.get("#user_password").type("password");

    cy.get(".btn-primary").click();
    cy.get(".navbar-item-title").should("have.text", "Dashboard");
  });

  // Cenario 2
  it("Login com senha inválida", () => {
    cy.visit("https://portal.placar.app/users/sign_in");
    cy.get("#user_email").type("superadmin@test.com");
    cy.get("#user_password").type("12345");
    cy.get(".btn-primary").click();
    cy.contains("Email ou senha inválida.").should("be.visible");
  });

  // // Cenario 3
  it("Login com usuário inválido", () => {
    cy.visit("https://portal.placar.app/users/sign_in");
    cy.get("#user_email").type("superadmin@t.com");
    cy.get("#user_password").type("123456");
    cy.get(".btn-primary").click();
    cy.contains("Email ou senha inválida.").should("be.visible");
  });


});
