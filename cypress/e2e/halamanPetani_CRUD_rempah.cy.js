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
    it('TC_Tambah Rempah_001', () => {
        // go to /admin/setup_rempah.php
        cy.visit('http://localhost/TanG-it/petani/setup_rempah.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = Kayu Manis, harga = 1500, stok = 25, keterangan = Per, gambar = kayumanis.jpeg
        cy.get('input[name="nama"]').type('Kayu Manis')
        cy.get('input[name="harga"]').type('1500')
        cy.get('input[name="stock"]').type('25')
        cy.get('input[name="keterangan"]').type('Per Bungkus')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('kayumanis.jpeg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'kayumanis.jpeg', { type: 'image/jpeg' })
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

    it('TC_Tambah Rempah_002', () => {
        // go to /admin/setup_rempah.php
        cy.visit('http://localhost/TanG-it/petani/setup_rempah.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = (nama Produk salah) , harga = 2500, stok = 15, keterangan = Per, gambar = cengkeh.jpeg
        cy.get('input[name="nama"]')
        cy.get('input[name="harga"]').type('2500')
        cy.get('input[name="stock"]').type('15')
        cy.get('input[name="keterangan"]').type('Per Bungkus')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('cengkeh.jpeg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'cengkeh.jpeg', { type: 'image/jpeg' })
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

    it('TC_Tambah Rempah_003', () => {

        // go to /admin/setup_rempah.php
        cy.visit('http://localhost/TanG-it/petani/setup_rempah.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = Bawang Merah, harga = (harga salah), stok = 500, keterangan = Per, gambar = bawangmerah.jpg
        cy.get('input[name="nama"]').type('Bawang Merah')
        cy.get('input[name="harga"]')
        cy.get('input[name="stock"]').type('500')
        cy.get('input[name="keterangan"]').type('Per Kilo')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('bawangmerah.jpg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'bawangmerah.jpg', { type: 'image/jpg' })
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


    it('TC_Tambah Rempah_004', () => {
    
        // go to /admin/setup_rempah.php
        cy.visit('http://localhost/TanG-it/petani/setup_rempah.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = Terong, harga = 15000, stok = (stok salah), keterangan = Per, gambar = bawangputih.jpeg
        cy.get('input[name="nama"]').type('Terong')
        cy.get('input[name="harga"]').type('15000')
        cy.get('input[name="stock"]')
        cy.get('input[name="keterangan"]').type('Per Kilo')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('bawangputih.jpeg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'bawangputih.jpeg', { type: 'image/jpeg' })
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

    it('TC_Tambah Rempah_005', () => {
       
        // go to /admin/setup_rempah.php
        cy.visit('http://localhost/TanG-it/petani/setup_rempah.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = Lada Hitam, harga = 5000, stok = 50, keterangan = (keterangan salah), gambar = ladahitam.jpeg
        cy.get('input[name="nama"]').type('Lada Hitam')
        cy.get('input[name="harga"]').type('5000')
        cy.get('input[name="stock"]').type('50')
        cy.get('input[name="keterangan"]')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('ladahitam.jpeg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'ladahitam.jpeg', { type: 'image/jpeg' })
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

    it('TC_Tambah Rempah_006', () => {
       

        // go to /admin/setup_rempah.php
        cy.visit('http://localhost/TanG-it/petani/setup_rempah.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = Ketumbar, harga = 1500, stok = 50, keterangan = Per, gambar = tumbar.jpeg
        cy.get('input[name="nama"]').type('Ketumbar')
        cy.get('input[name="harga"]').type('1500')
        cy.get('input[name="stock"]').type('50')
        cy.get('input[name="keterangan"]').type('Per Bungkus')
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