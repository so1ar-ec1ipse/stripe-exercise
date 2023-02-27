describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("validate card number input", () => {
    const cardNumberInput = cy.get("#card-number");
    cardNumberInput.type("123");
    cardNumberInput.should("have.value", "123");
    cardNumberInput.type("456");
    cardNumberInput.should("have.value", "1234 56");
    cardNumberInput.type("7890123456789");
    cardNumberInput.should("have.value", "1234 5678 9012 3456");
  });

  it("validate expiration date input", () => {
    const expDateInput = cy.get("#exp-date");
    expDateInput.type("1");
    expDateInput.should("have.value", "1");
    expDateInput.type("23");
    expDateInput.should("have.value", "12 / 3");
    expDateInput.type("15678");
    expDateInput.should("have.value", "12 / 31");
  });

  it("validate cvc input", () => {
    const cvcInput = cy.get("#cvc-number");
    cvcInput.type("12");
    cvcInput.should("have.value", "12");
    cvcInput.type("345");
    cvcInput.should("have.value", "123");
  });

  it("disable pay button when the form is invalid", () => {
    const cardNumberInput = cy.get("#card-number");
    const expDateInput = cy.get("#exp-date");
    const cvcInput = cy.get("#cvc-number");

    cardNumberInput.type("12345678901234567890");
    cy.get("#pay-button").should("be.disabled");
    cvcInput.type("12345");
    cy.get("#pay-button").should("be.disabled");
    expDateInput.type("12");
    cy.get("#pay-button").should("be.disabled");
    expDateInput.type("31");
    cy.get("#pay-button").should("be.enabled");
  });
});
