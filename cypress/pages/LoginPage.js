class homeSaucePage {
  elements = {
    usernameInput: () => cy.get('#user_login'),
    passwordInput: () => cy.get('#user_pass'),
    loginBtn: () => cy.get('#wp-submit'),
    errorMessage: () => cy.get('h3[data-test="error"]'),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }
}

module.exports = new homeSaucePage();
