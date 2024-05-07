var website = "https://staging.pdfquick.com/?mode=CIX7RLLJ&flow=01&ppg=23&flow_popup=on"
var website_2 = "https://staging.pdfquick.com/editor/form/420/?ppg=16"
var website_3 = "https://staging.pdfquick.com/editor/form/420/?ppg=01"
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
    cy.wait(1000)
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
    cy.wait(2000)
    getIframeBody().find('#fullname').type(u_name , {timeout:3000})
    getIframeBody().find('#email').type(email , {timeout:3000})
    getIframeBody().find('#password').type(password)
    getIframeBody().find('#btnsignup').click()
  })

  it('Pricing', () => {
    //For Pricing page responsiveness
    cy.wait(5000)
    cy.get('#iframeContainer > div > button').click()
    /*cy.wait(10000)
    getIframeBody().contains('Choose Plan' , {timeout:10000}).click()*/
  })

  it('Editor_2', () => {
    cy.visit(website_2)
    cy.wait(2000)
    cy.get('#bt_get_started').click()
    cy.get('#button_container > .text-center > .btn').click().wait(1000)
  })

  it('Pricing_2', () => {
    //For Pricing page responsiveness
    cy.wait(5000)
    cy.get('#iframeContainer > div > button').click()
    /*cy.wait(10000)
    getIframeBody().contains('Choose Plan' , {timeout:10000}).click()*/
  })

  it('Editor_3', () => {
    cy.visit(website_2)
    cy.wait(2000)
    cy.get('#bt_get_started').click()
    cy.get('#button_container > .text-center > .btn').click().wait(1000)
  })

  it('Pricing_3', () => {
    //For Pricing page responsiveness
    cy.wait(5000)
    cy.get('#iframeContainer > div > button').click()
    /*cy.wait(10000)
    getIframeBody().contains('Choose Plan' , {timeout:10000}).click()*/
  })


 




})