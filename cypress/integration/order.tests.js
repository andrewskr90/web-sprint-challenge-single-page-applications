describe('pizza order form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('test for being able to add text to the box', () => {
        nameInput().type("Kyle")
        instructionsInput().type("extra cheese please")
    })

    it('test for being able to add multiple toppings', () => {
        pepperoniInput().check()
        sausageInput().check()
        onionsInput().check()
        pineappleInput().check()
    })
    
    it('test that you can submit form', () => {
        nameInput().type("Kyle")
        sizeSelect().select("medium")
        pepperoniInput().check()
        sausageInput().check()
        onionsInput().check()
        pineappleInput().check()
        instructionsInput().type("extra cheese please")
        orderBtn().click()
    })
})

const nameInput = () => cy.get('input[name="name"]')
const sizeSelect = () => cy.get('select[id="size-dropdown"]')
const pepperoniInput = () => cy.get('input[name="pepperoni"]')
const sausageInput = () => cy.get('input[name="sausage"]')
const onionsInput = () => cy.get('input[name="onions"]')
const pineappleInput = () => cy.get('input[name="pineapple"]')
const instructionsInput = () => cy.get('input[name="instructions"]')
const orderBtn = () => cy.get('button[id="order-button"]')
