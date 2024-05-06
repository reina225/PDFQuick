var website = "https://staging.pdfquick.com/?mode=CIX7RLLJ&flow=03&ppg=15&flow_popup=on"
var u_name = "Test Arjay"
var emailuser = "testarjay"
const d = new Date();
d.toLocaleString('en-GB', { timeZone: 'Asia/Manila' })
var emaildomain = "@dispostable.com"
const email = ''.concat(emailuser, d.getMonth(), d.getDate(), d.getFullYear(), d.getHours(), d.getMinutes(), d.getSeconds(), emaildomain)
var password = "123123"
var cardnumber_fs = "4242424242424242"
var cardexp_month = "12"
var cardexp_year = "2024"
var cvv = "*R5NH"
var zio = "84001" 
var form = "Doctors Note"

const getIframeDocument = () => {
  return cy
  .get('#iframeContainer > iframe')
  // Cypress yields jQuery element, which has the real
  // DOM element under property "0".
  // From the real DOM iframe element we can get
  // the "document" element, it is stored in "contentDocument" property
  // Cypress "its" command can access deep properties using dot notation
  // https://on.cypress.io/its
  .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  // automatically retries until body is loaded
  .its('body').should('not.be.undefined')
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  .then(cy.wrap)
}


describe('PDFQuick', () => {
  it('Homepage', () => {
    cy.clearAllCookies().wait(500)
    cy.clearAllLocalStorage().wait(500)
    cy.clearAllSessionStorage().wait(500)
    cy.visit(website)
    cy.get('.resp-tabs-list > [aria-controls="hor_1_tab_item-2"] > :nth-child(2)').click()
    cy.get('#search_form').type(form)
    cy.get('[data-index="0"] > td > .btn').click()
  })

  it('Form LP', () => {
    cy.wait(2000)
    cy.get('.panel-1 > .btn').click()
  })

  it('Editor', () => {
    cy.wait(2000)
    cy.get('#bt_get_started').click()
    /* For fields
    cy.get('#\31 -pdf').click()
    cy.get('#\32 -pdf').click()
    */
    //submit the form
    cy.get('#button_container > .text-center > .btn').click().wait(1000)
    //cy.get('iframe').should('be.visible')
  })

  it('Registration', () => {
    // cy.wait(3000)
    getIframeBody().find('#email_f3').type(email,{timeout:3000})
    getIframeBody().find('#password_f3').type(password).wait(500)
    getIframeBody().find('#password_con_f3').type(password)
    getIframeBody().find('#btnsignup_f3').click()
  })

  it('Pricing', () => {
    cy.wait(15000)
    cy.get('#iframeContainer > div > button').click()
  })



})