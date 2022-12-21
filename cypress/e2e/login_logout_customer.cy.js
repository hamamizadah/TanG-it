// Cek Fungsi Login dan Logout (Customer)
describe('Login dan Logout', () => {
    
    it('TC_LOGIN_CUSTOMER_001', () => {
        cy.visit('https://localhost/TanG-it')
        // tekan a href=login_form.php
        // ignore uncaught:exception
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        // tekan tombol "Login Customer"
        cy.get('a[href="login_customer_form.php"]').click()

        // insert username n password
        // username = customer 
        // password = password
        cy.get('input[name="username"]').type('customer')
        cy.get('input[name="password"]').type('password')

        // klik tombol login
        cy.get('input[name="login"]').click() 
        
        // //klik profile
        // cy.get('.dropdown-toggle').click()

        // //klik logout
        // cy.get('a[href="logout.php"]').click()
    })

    it('TC_LOGIN_CUSTOMER_002', () => {
        cy.visit('https://localhost/TanG-it')
        // tekan a href=login_form.php
        // ignore uncaught:exception
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        // tekan tombol "Login Customer"
        cy.get('a[href="login_customer_form.php"]').click()

        // insert username n password
        // username = customer 
        // password = password (PASSWORD SALAH)
        cy.get('input[name="username"]').type('customer')
        cy.get('input[name="password"]').type('customer')

        // klik tombol login
        cy.get('input[name="login"]').click() 
        
        // //klik profile
        // cy.get('.dropdown-toggle').click()

        // //klik logout
        // cy.get('a[href="logout.php"]').click()
    })

    it('TC_LOGIN_CUSTOMER_003', () => {
        cy.visit('https://localhost/TanG-it')
        // tekan a href=login_form.php
        // ignore uncaught:exception
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        // tekan tombol "Login Customer"
        cy.get('a[href="login_customer_form.php"]').click()

        // insert username n password
        // username = customer (USERNAME SALAH)
        // password = password
        cy.get('input[name="username"]').type('password')
        cy.get('input[name="password"]').type('password')

        // klik tombol login
        cy.get('input[name="login"]').click() 
        
    //     //klik profile
    //     cy.get('.dropdown-toggle').click()

    //     //klik logout
    //     cy.get('a[href="logout.php"]').click()
    })

    it('TC_LOGIN_CUSTOMER_004', () => {
        cy.visit('https://localhost/TanG-it')
        // tekan a href=login_form.php
        // ignore uncaught:exception
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        // tekan tombol "Login Customer"
        cy.get('a[href="login_customer_form.php"]').click()

        // insert username n password
        // username = customer (USERNAME SALAH)
        // password = password (PASSWORD SALAH)
        cy.get('input[name="username"]').type('password')
        cy.get('input[name="password"]').type('customer')

        // klik tombol login
        cy.get('input[name="login"]').click() 
        
        // //klik profile
        // cy.get('.dropdown-toggle').click()

        // //klik logout
        // cy.get('a[href="logout.php"]').click()
    })

})