// Cek Fungsi Login dan Logout (Admin)
describe('Login dan Logout', () => {

    it('Admin Login dan Logout (TC_LOGIN_001)', () => {
        cy.visit('https://localhost/TanG-it')
        // tekan a href=login_form.php
        // ignore uncaught:exception
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        // tekan tombol "Login Admin"
        cy.get('a[href="admin/index.php"]').click()

        // insert username n password
        // username = aku
        // password = 1
        cy.get('input[name="username"]').type('aku')
        cy.get('input[name="password"]').type('1')

        // klik tombol login
        cy.get('input[name="login"]').click() 
        
        //klik profile
        cy.get('.dropdown-toggle').click()

        //klik logout
        cy.get('a[href="logout.php"]').click()
    })
    
    it('Admin Login dan Logout (TC_LOGIN_002)', () => {
        cy.visit('https://localhost/TanG-it')
        // tekan a href=login_form.php
        // ignore uncaught:exception
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        // tekan tombol "Login Admin"
        cy.get('a[href="admin/index.php"]').click()

        // insert username n password
        // username = aku
        // password = 2 (password salah)
        cy.get('input[name="username"]').type('aku')
        cy.get('input[name="password"]').type('2')

        // klik tombol login
        cy.get('input[name="login"]').click() 
        
        // //klik profile
        // cy.get('.dropdown-toggle').click()

        // //klik logout
        // cy.get('a[href="logout.php"]').click()
    })

    it('Admin Login dan Logout (TC_LOGIN_003)', () => {
        cy.visit('https://localhost/TanG-it')
        // tekan a href=login_form.php
        // ignore uncaught:exception
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        // tekan tombol "Login Admin"
        cy.get('a[href="admin/index.php"]').click()

        // insert username n password
        // username = dio (username salah)
        // password = 1 
        cy.get('input[name="username"]').type('dio')
        cy.get('input[name="password"]').type('1')

        // klik tombol login
        cy.get('input[name="login"]').click() 
        
        // //klik profile
        // cy.get('.dropdown-toggle').click()

        // //klik logout
        // cy.get('a[href="logout.php"]').click()
    })

    it('Admin Login dan Logout (TC_LOGIN_004)', () => {
        cy.visit('https://localhost/TanG-it')
        // tekan a href=login_form.php
        // ignore uncaught:exception
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        // tekan tombol "Login Admin"
        cy.get('a[href="admin/index.php"]').click()

        // insert username n password
        // username = dio (username salah)
        // password = 2 (password salah)
        cy.get('input[name="username"]').type('dio')
        cy.get('input[name="password"]').type('2')

        // klik tombol login
        cy.get('input[name="login"]').click() 
        
        // //klik profile
        // cy.get('.dropdown-toggle').click()

        // //klik logout
        // cy.get('a[href="logout.php"]').click()
    })


    
})