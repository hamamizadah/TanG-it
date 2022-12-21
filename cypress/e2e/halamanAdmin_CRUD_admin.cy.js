// admin login
describe('Tambah Admin', () => {

    it('TC_Tambah Data Admin_001', () => {

        //login admin
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

        //klik tombol admin
        cy.get('a[href="setup_admin.php"]').click()

        // klik submit name = nambah
        cy.get('button[name="nambah1"]').click()

        // isi username dan password
        // username = zadah (username benar)
        // password = zadah (password benar)
        cy.get('input[name="username"]').type('zadah')
        cy.get('input[name="password"]').type('zadah')

        // press submit button
        cy.get('button[name="nambah1"]').click()

        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('username sudah terdaftar');
         })
        cy.get('a[href="setup_admin.php"]').click()
    })

    it('TC_Tambah Data Admin_002', () => {

        //login admin
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

        //klik tombol admin
        cy.get('a[href="setup_admin.php"]').click()

        // klik submit name = nambah
        cy.get('button[name="nambah1"]').click()

        // isi username dan password
        // username = alfinza (username benar)
        // password =         (password salah)
        cy.get('input[name="username"]').type('alfinza')
        cy.get('input[name="password"]').type('')

        // press submit button
        cy.get('button[name="nambah1"]').click()

        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('username sudah terdaftar');
         })
        cy.get('a[href="setup_admin.php"]').click()
    })

    it('TC_Tambah Data Admin_003', () => {

        //login admin
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

        //klik tombol admin
        cy.get('a[href="setup_admin.php"]').click()

        // klik submit name = nambah
        cy.get('button[name="nambah1"]').click()

        // isi username dan password
        // username = alfinza (username salah)
        // password = alpin   (password benar)
        cy.get('input[name="username"]').type('alfinza')
        cy.get('input[name="password"]').type('alpin')

        // press submit button
        cy.get('button[name="nambah1"]').click()

        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('username sudah terdaftar');
         })
        cy.get('a[href="setup_admin.php"]').click()
    })

    it('TC_Tambah Data Admin_004', () => {

        //login admin
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

        //klik tombol admin
        cy.get('a[href="setup_admin.php"]').click()

        // klik submit name = nambah
        cy.get('button[name="nambah1"]').click()

        // isi username dan password
        // username =  (username salah)
        // password =  (password salah)
        cy.get('input[name="username"]').type('')
        cy.get('input[name="password"]').type('')

        // press submit button
        cy.get('button[name="nambah1"]').click()

        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('username sudah terdaftar');
         })
        cy.get('a[href="setup_admin.php"]').click()
    })


    // masuk ke halaman /admin/transaksi.php
    it('Transaksi', () => {
        cy.visit('https://localhost/TanG-it')
        // masuk ke halaman setup_admin.php

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

        // go to transaksi.php
        cy.get('a[href="transaksi.php"]').click() 

    })
})