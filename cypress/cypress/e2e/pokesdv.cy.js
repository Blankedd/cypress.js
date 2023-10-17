describe('Тестирование покупки аватара', function () {
    it('Верные логин + пароль, кнопка входа, и наличие текста\кнопки выхода на странице поставторизации', function () {
        cy.visit('https://pokemonbattle.me');
        cy.get(':nth-child(1) > .auth__input').type('filtsan@yandex.ru')
        cy.get('#password').type('Tati1122')
        cy.get('.auth__button').click()
        cy.get('.header__btns > [href="/shop"]').click()
        cy.get(':nth-child(1) > .shop__button').click()
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111')
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224')
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('D SMIRNOV')
        cy.wait(5000)
        cy.get('.pay-btn').click()
        cy.get('#cardnumber').type('56456')
        cy.wait(2000)
        cy.get('.payment__submit-button').click()
        cy.contains('Покупка прошла успешно')
        



    })

})