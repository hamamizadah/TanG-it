// tambah sayur

describe('Tambah', () => {

    // before each test, login as pethany
    beforeEach(() => {
        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="petani/index.php"]').click() 
        cy.get('input[name="username"]').type('cipres')
        cy.get('input[name="password"]').type('password')
        cy.get('input[name="login"]').click()
    })

    // tambah 
    it('Tambah sayur', () => {
        // go to /admin/setup_sayur.php
        cy.visit('http://localhost/TanG-it/petani/setup_sayur.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = buncis, harga = 10000, stok = 5, keterangan = sayur, gambar = buncis.jpg
        cy.get('input[name="nama"]').type('buncis')
        cy.get('input[name="harga"]').type('10000')
        cy.get('input[name="stock"]').type('5')
        cy.get('input[name="keterangan"]').type('sayur')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('greenbeans5.jpg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'greenbeans5.jpg', { type: 'image/jpg' })
                    const dataTransfer = new DataTransfer()
                    dataTransfer.items.add(testFile)
                    el.files = dataTransfer.files
                    cy.wrap(subject).trigger('change', { force: true })
                })
        })
        // press button type submit name = submit
        cy.get('button[name="submit"]').click()
    })

    // tambah buah - buahan
    it('Tambah buah', () => {
        // go to /admin/setup_buah.php
        cy.visit('http://localhost/TanG-it/petani/setup_buah.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = semangka, harga = 10000, stok = 5, keterangan = buah, gambar = Watermeloen.jpg
        cy.get('input[name="nama"]').type('semangka')
        cy.get('input[name="harga"]').type('10000')
        cy.get('input[name="stock"]').type('5')
        cy.get('input[name="keterangan"]').type('buah')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('Watermeloen.jpg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'Watermeloen.jpg', { type: 'image/jpg' })
                    const dataTransfer = new DataTransfer()
                    dataTransfer.items.add(testFile)
                    el.files = dataTransfer.files
                    cy.wrap(subject).trigger('change', { force: true })
                })
        })
        // press button type submit name = submit
        cy.get('button[name="submit"]').click()
    })


     // tambah rempah
     it('Tambah rempah', () => {
        // go to /admin/setup_buah.php
        cy.visit('http://localhost/TanG-it/petani/setup_rempah.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = ketumbar, harga = 2000, stok = 5, keterangan = rempah, gambar = Watermeloen.jpg
        cy.get('input[name="nama"]').type('ketumbar')
        cy.get('input[name="harga"]').type('2000')
        cy.get('input[name="stock"]').type('5')
        cy.get('input[name="keterangan"]').type('rempah')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('tumbar.jpeg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'tumbar.jpeg', { type: 'image/jpeg' })
                    const dataTransfer = new DataTransfer()
                    dataTransfer.items.add(testFile)
                    el.files = dataTransfer.files
                    cy.wrap(subject).trigger('change', { force: true })
                })
        })
        // press button type submit name = submit
        cy.get('button[name="submit"]').click()
    })
})