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


describe('PDFQuick', () => {
  it('Homepage', () => {
    cy.clearAllCookies().wait(700)
    cy.clearAllLocalStorage().wait(700)
    cy.clearAllSessionStorage().wait(700)
    cy.visit(website)
    cy.get('.resp-tabs-list > [aria-controls="hor_1_tab_item-2"] > :nth-child(2)').click()
    cy.get('#search_form').type(form)
    cy.get('[data-index="0"] > td > .btn').click()
  })

  it('Form LP', () => {
    cy.get('.panel-1 > .btn').click()
  })

  it('Editor', () => {
    cy.wait(400)
    cy.get('#bt_get_started').click()
    /* For fields
    cy.get('#\31 -pdf').click()
    cy.get('#\32 -pdf').click()
    */
    //submit the form
    cy.get('#button_container > .text-center > .btn').click()
    cy.get('iframe').should('be.visible')
  })

  /*it('Registration', () => {

  })*/




})