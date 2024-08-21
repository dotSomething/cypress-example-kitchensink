function login(params) {
    cy.get('#username').type('test-user'); // todo fix importing test user
    cy.get('#password').type('test-pw123');
    cy.get('#log-in').click();
}

describe('Demo test suite', () => {
    beforeEach(() => {
        cy.visit('https://demo.applitools.com/');
        cy.contains('Login Form'); // Not idea. Would recommend adding an id or test-data.
        cy.fixture('testData.json').then(function (data) {
            this.testData = data;
        });
    });
    it('Validate form fields', () => {
        cy.get('#username').should('be.visible');
        cy.get('#password').should('be.visible');
    })
    it.skip('Validate form field validation', () => {
        cy.get('#log-in').click();
        cy.get('#validation-error').should('be.visible'); // Demo site is missing required field validation. Would recommend adding this validation.
    });
    it.skip('Validate social links', () => {
        // No reliable identifies. Would recomment adding test-data properties
    });
    it.skip('Validate "Remember Me"', () => {
        // With the ability to login without username/password, testing this will present false positive.
    });
    it('Validate login', () => {
        login();
    });
    it('Validate dashboard', () => {
        login();
        cy.contains('Financial Overview'); // Not idea. Would recommend adding an id or test-data.
        cy.contains('Recent Transactions'); // Not idea. Would recommend adding an id or test-data.
        cy.get('#time').should('be.visible');
    });
})

