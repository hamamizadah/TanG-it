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
    it('TC_Tambah Sayur_001', () => {
        // go to /admin/setup_sayur.php
        cy.visit('http://localhost/TanG-it/petani/setup_sayur.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = buncis, harga = 10000, stok = 5, keterangan = sayur, gambar = buncis.jpg
        cy.get('input[name="nama"]').type('buncis')
        cy.get('input[name="harga"]').type('10000')
        cy.get('input[name="stock"]').type('5')
        cy.get('input[name="keterangan"]').type('per ikat')
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

        //klik profile
        cy.get('.dropdown-toggle').click()

        //klik logout
        cy.get('a[href="logout.php"]').click()

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

    it('TC_Tambah Sayur_002', () => {
        // go to /admin/setup_sayur.php
        cy.visit('http://localhost/TanG-it/petani/setup_sayur.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = (nama Produk salah) , harga = 2500, stok = 5, keterangan = sayur, gambar = kacangPanjang.jpg
        cy.get('input[name="nama"]')
        cy.get('input[name="harga"]').type('2500')
        cy.get('input[name="stock"]').type('5')
        cy.get('input[name="keterangan"]').type('sayur')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('kacangPanjang.jpg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'kacangPanjang.jpg', { type: 'image/jpg' })
                    const dataTransfer = new DataTransfer()
                    dataTransfer.items.add(testFile)
                    el.files = dataTransfer.files
                    cy.wrap(subject).trigger('change', { force: true })
                })
        })
        // press button type submit name = submit
        cy.get('button[name="submit"]').click()

        //klik profile
        cy.get('.dropdown-toggle').click()

        //klik logout
        cy.get('a[href="logout.php"]').click()

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

    it('TC_Tambah Sayur_003', () => {

        // go to /admin/setup_sayur.php
        cy.visit('http://localhost/TanG-it/petani/setup_sayur.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = terong, harga = (harga salah), stok = 500, keterangan = sayur, gambar = cabeRawit.jpeg
        cy.get('input[name="nama"]').type('Cabe Rawit')
        cy.get('input[name="harga"]')
        cy.get('input[name="stock"]').type('500')
        cy.get('input[name="keterangan"]').type('sayur')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('cabeRawit.jpeg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'cabeRawit.jpeg', { type: 'image/jpeg' })
                    const dataTransfer = new DataTransfer()
                    dataTransfer.items.add(testFile)
                    el.files = dataTransfer.files
                    cy.wrap(subject).trigger('change', { force: true })
                })
        })
        // press button type submit name = submit
        cy.get('button[name="submit"]').click()

        //klik profile
        cy.get('.dropdown-toggle').click()

        //klik logout
        cy.get('a[href="logout.php"]').click()

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


    it('TC_Tambah Sayur_004', () => {
    
        // go to /admin/setup_sayur.php
        cy.visit('http://localhost/TanG-it/petani/setup_sayur.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = Terong, harga = 2000, stok = (stok salah), keterangan = sayur, gambar = terong.jpeg
        cy.get('input[name="nama"]').type('Terong')
        cy.get('input[name="harga"]').type('2000')
        cy.get('input[name="stock"]')
        cy.get('input[name="keterangan"]').type('sayur')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('terong.jpeg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'terong.jpeg', { type: 'image/jpeg' })
                    const dataTransfer = new DataTransfer()
                    dataTransfer.items.add(testFile)
                    el.files = dataTransfer.files
                    cy.wrap(subject).trigger('change', { force: true })
                })
        })
        // press button type submit name = submit
        cy.get('button[name="submit"]').click()

        //klik profile
        cy.get('.dropdown-toggle').click()

        //klik logout
        cy.get('a[href="logout.php"]').click()

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

    it('TC_Tambah Sayur_005', () => {
       
        // go to /admin/setup_sayur.php
        cy.visit('http://localhost/TanG-it/petani/setup_sayur.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = paprika, harga = 5000, stok = 50, keterangan = (keterangan salah), gambar = paprika.jpeg
        cy.get('input[name="nama"]').type('paprika')
        cy.get('input[name="harga"]').type('5000')
        cy.get('input[name="stock"]').type('50')
        cy.get('input[name="keterangan"]')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('paprika.jpeg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'paprika.jpeg', { type: 'image/jpeg' })
                    const dataTransfer = new DataTransfer()
                    dataTransfer.items.add(testFile)
                    el.files = dataTransfer.files
                    cy.wrap(subject).trigger('change', { force: true })
                })
        })
        // press button type submit name = submit
        cy.get('button[name="submit"]').click()

        //klik profile
        cy.get('.dropdown-toggle').click()

        //klik logout
        cy.get('a[href="logout.php"]').click()

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

    it('TC_Tambah Sayur_006', () => {
       

        // go to /admin/setup_sayur.php
        cy.visit('http://localhost/TanG-it/petani/setup_sayur.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = jagung, harga = 1500, stok = 50, keterangan = sayur, gambar = jagung.jpeg
        cy.get('input[name="nama"]').type('jagung')
        cy.get('input[name="harga"]').type('1500')
        cy.get('input[name="stock"]').type('50')
        cy.get('input[name="keterangan"]').type('sayur')
        // gambar = file
        // cy.get('input[name="gambar"]').then(subject => {
        //     cy.fixture('greenbeans5.jpg', 'base64')
        //         .then(Cypress.Blob.base64StringToBlob)
        //         .then(blob => {
        //             const el = subject[0]
        //             const testFile = new File([blob], 'greenbeans5.jpg', { type: 'image/jpg' })
        //             const dataTransfer = new DataTransfer()
        //             dataTransfer.items.add(testFile)
        //             el.files = dataTransfer.files
        //             cy.wrap(subject).trigger('change', { force: true })
        //         })
        // })
        // press button type submit name = submit
        cy.get('button[name="submit"]').click()

        //klik profile
        cy.get('.dropdown-toggle').click()

        //klik logout
        cy.get('a[href="logout.php"]').click()

        // tekan tombol "Login Admin"
        cy.get('a[href="admin/index.php"]').click()

        // insert username n password
        // username = aku
        // password = 1
        cy.get('input[name="username"]').type('aku')
        cy.get('input[name="password"]').type('1')

        // klik tombol login
        cy.get('input[name="login"]').click()

    })
})

