// admin login
describe('Tambah Admin', () => {

    // Tambah member
    it('TC_Tambah Member_001', () => {
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

        // go to setup_admin.php
        cy.get('a[href="setup_member.php"]').click()

        // klik submit name = nambah
        cy.get('button[name="nambah"]').click()

        // isi username dan password
        // username = dio
        // username1 = customer
        // email = dio@gmail.com
        // id = 007
        // tlp = 081111111111
        // alamat = Jl Jagung Jagung
        // password = password
        // password2 = password
        cy.get('input[name="username"]').type('dio')
        cy.get('input[name="username2"]').type('customer')
        cy.get('input[name="email"]').type('dio@gmail.com')
        cy.get('input[name="id"]').type('007')
        cy.get('input[name="tlp"]').type('081111111111')
        cy.get('input[name="alamat"]').type('Jl Jagung Jagung')

        // press submit button
        cy.get('button[name="nambah"]').click()

        cy.get('a[href="setup_member.php"]').click()
    })

    //Tambah member
    it('TC_Tambah Member_002', () => {
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

        // go to setup_admin.php
        cy.get('a[href="setup_member.php"]').click()

        // klik submit name = nambah
        cy.get('button[name="nambah"]').click()

        // isi username dan password
        // username = (namadepan salah)
        // username1 = customer
        // email = ilham@gmail.com
        // id = 008
        // tlp = 081111111111
        // alamat = Jl sidomulyo
        // password = password
        // password2 = password
        cy.get('input[name="username"]')
        cy.get('input[name="username2"]').type('customer')
        cy.get('input[name="email"]').type('ilham@gmail.com')
        cy.get('input[name="id"]').type('008')
        cy.get('input[name="tlp"]').type('081111111111')
        cy.get('input[name="alamat"]').type('Jl sidomulyo')

        // press submit button
        cy.get('button[name="nambah"]').click()

        cy.get('a[href="setup_member.php"]').click()
    })

    // Tambah member
    it('TC_Tambah Member_003', () => {
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

        // go to setup_admin.php
        cy.get('a[href="setup_member.php"]').click()

        // klik submit name = nambah
        cy.get('button[name="nambah"]').click()

        // isi username dan password
        // username = rony
        // username1 = (nama akhir salah)
        // email = rony@gmail.com
        // id = 009
        // tlp = 081111111111
        // alamat = Jl Pakis
        // password = password
        // password2 = password
        cy.get('input[name="username"]').type('rony')
        cy.get('input[name="username2"]')
        cy.get('input[name="email"]').type('rony@gmail.com')
        cy.get('input[name="id"]').type('008')
        cy.get('input[name="tlp"]').type('081111111111')
        cy.get('input[name="alamat"]').type('Jl Pakis')

        // press submit button
        cy.get('button[name="nambah"]').click()

        cy.get('a[href="setup_member.php"]').click()
    })

    // Tambah member
    it('TC_Tambah Member_004', () => {
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

        // go to setup_admin.php
        cy.get('a[href="setup_member.php"]').click()

        // klik submit name = nambah
        cy.get('button[name="nambah"]').click()

        // isi username dan password
        // username = prat
        // username1 = customer
        // email = (email salah)
        // id = 010
        // tlp = 081111111111
        // alamat = Jl Lawang
        // password = password
        // password2 = password
        cy.get('input[name="username"]').type('prat')
        cy.get('input[name="username2"]').type('customer')
        cy.get('input[name="email"]')
        cy.get('input[name="id"]').type('010')
        cy.get('input[name="tlp"]').type('081111111111')
        cy.get('input[name="alamat"]').type('Jl Lawang')

        // press submit button
        cy.get('button[name="nambah"]').click()

        // cy.get('a[href="setup_member.php"]').click()
    })

    // Tambah member
    it('TC_Tambah Member_005', () => {
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

        // go to setup_admin.php
        cy.get('a[href="setup_member.php"]').click()

        // klik submit name = nambah
        cy.get('button[name="nambah"]').click()

        // isi username dan password
        // username = dyko
        // username1 = customer
        // email = dyko@gmail.com
        // id = (identitas salah)
        // tlp = 081111111111
        // alamat = Jl Pare
        // password = password
        // password2 = password
        cy.get('input[name="username"]').type('dyko')
        cy.get('input[name="username2"]').type('customer')
        cy.get('input[name="email"]').type('dyko@gmail.com')
        cy.get('input[name="id"]')
        cy.get('input[name="tlp"]').type('081111111111')
        cy.get('input[name="alamat"]').type('Jl Pare')

        // press submit button
        cy.get('button[name="nambah"]').click()

        cy.get('a[href="setup_member.php"]').click()
    })

    // Tambah member
    it('TC_Tambah Member_006', () => {
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

        // go to setup_admin.php
        cy.get('a[href="setup_member.php"]').click() 

        // klik submit name = nambah
        cy.get('button[name="nambah"]').click()

        // isi username dan password
        // username = Reza
        // username1 = customer
        // email = reza@gmail.com
        // id = 010
        // tlp = (no telp salah)
        // alamat = Jl Pare
        // password = password
        // password2 = password
        cy.get('input[name="username"]').type('Reza')
        cy.get('input[name="username2"]').type('customer')
        cy.get('input[name="email"]').type('reza@gmail.com')
        cy.get('input[name="id"]').type('010')
        cy.get('input[name="tlp"]')
        cy.get('input[name="alamat"]').type('Jl Pare')

        // press submit button
        cy.get('button[name="nambah"]').click()

        cy.get('a[href="setup_member.php"]').click()
    })

    //Tambah member
    it('TC_Tambah Member_007', () => {
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

        // go to setup_admin.php
        cy.get('a[href="setup_member.php"]').click()

        // klik submit name = nambah
        cy.get('button[name="nambah"]').click()

        // isi username dan password
        // username = corndog
        // username1 = customer
        // email = corndog@gmail.com
        // id = 011
        // tlp = (009988776655)
        // alamat = 
        // password = password
        // password2 = password
        cy.get('input[name="username"]').type('corndog')
        cy.get('input[name="username2"]').type('customer')
        cy.get('input[name="email"]').type('corndog@gmail.com')
        cy.get('input[name="id"]').type('011')
        cy.get('input[name="tlp"]').type('009988776655')
        cy.get('input[name="alamat"]')

        // press submit button
        cy.get('button[name="nambah"]').click()

        cy.get('a[href="setup_member.php"]').click()
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