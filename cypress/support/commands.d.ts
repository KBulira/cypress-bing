/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Login given user by saving details to storage
     * @param [path] redirect to path after login, default '/home'
     * @param [user] user name from fixtures, default 'admin'
     * @example
     * cy.login('/home/tickets', 'admin')
     */
    login(path?: string | null, user?: string): Chainable<Subject>;

    /**
     * Clears cookies localStorage and logout users
     */
    logout(): Chainable<Subject>;

    /**
     * Click escape on body
     */
    escape(): Chainable<Subject>;

    /**
     * Request login to keep session
     *
     * @param [user] user name from fixtures, default 'admin'
     */
    requestLogin(user?: string): Chainable<Subject>;

    /**
     * Select element from p-multiselect
     * @param [subject]
     * @param options option to select from p-dropdown
     */
    selectMultiselect(options: string | string[]): Chainable<Subject>;

    /**
     * Select element from dropdown
     * @param [subject]
     * @param option option to select from p-dropdown
     */
    selectDropdown(option: string): Chainable<Subject>;

    /**
     * Checks if toast popup shown with expected content
     * @param content content of toast
     */
    shouldShowToast(content: string): Chainable<Subject>;

    /**
     * Click element in some point but count distance in percentage instead px
     * @param xPerc percentage from left, [0] is left, [100] is right
     * @param yPerc percentage from top, [0] is top, [100] is bottom
     * @param xOffset horizontal offset, [+15] is 15px to right, [-15] is 15px to left
     * @param yOffset vertical offset, [+15] is 15px to bottom, [-15] is 15px to top
     */
    clickPercent(xPerc: number, yPerc?: number, xOffset?: number, yOffset?: number): Chainable<Subject>;

    /**
     * Click outside
     */
    clickOutside(xPerc: number, yPerc?: number, xOffset?: number, yOffset?: number): Chainable<Subject>;

    /**
     * Select duplicate values
     */
    ChooseVisualValue(options: string | string[]): Chainable<Subject>;
  }
}
