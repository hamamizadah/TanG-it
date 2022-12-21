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

    //tambah 
    it('TC_Tambah Buah_001', () => {
        // go to /admin/setup_buah.php
        cy.visit('http://localhost/TanG-it/petani/setup_buah.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = mangga, harga = 10000, stok = 100, keterangan = Per Kilo, gambar = mangga.jpeg
        cy.get('input[name="nama"]').type('mangga')
        cy.get('input[name="harga"]').type('10000')
        cy.get('input[name="stock"]').type('100')
        cy.get('input[name="keterangan"]').type('Per Kilo')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('mangga.jpeg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'mangga.jpg', { type: 'image/jpeg' })
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

        cy.get('a[href="petani/index.php"]').click() 
        cy.get('input[name="username"]').type('cipres')
        cy.get('input[name="password"]').type('password')
        cy.get('input[name="login"]').click()
    })

    it('TC_Tambah Buah_002', () => {
        // go to /admin/setup_buah.php
        cy.visit('http://localhost/TanG-it/petani/setup_buah.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = (nama Produk salah) , harga = 5000, stok = 100, keterangan = Per Kilo, gambar = jeruk.jpg
        cy.get('input[name="nama"]')
        cy.get('input[name="harga"]').type('5000')
        cy.get('input[name="stock"]').type('100')
        cy.get('input[name="keterangan"]').type('Per Kilo')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('jeruk.jpg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'jeruk.jpg', { type: 'image/jpg' })
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

        cy.get('a[href="petani/index.php"]').click() 
        cy.get('input[name="username"]').type('cipres')
        cy.get('input[name="password"]').type('password')
        cy.get('input[name="login"]').click()
    
    })

    it('TC_Tambah Buah_003', () => {
        // go to /admin/setup_buah.php
        cy.visit('http://localhost/TanG-it/petani/setup_buah.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = Pisang, harga = (harga salah), stok = 100, keterangan = Per Sisir, gambar = pisang.jpg
        cy.get('input[name="nama"]').type('Pisang Kipas')
        cy.get('input[name="harga"]')
        cy.get('input[name="stock"]').type('100')
        cy.get('input[name="keterangan"]').type('Per Sisir')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('pisang.jpg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'pisang.jpg', { type: 'image/jpg' })
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

        cy.get('a[href="petani/index.php"]').click() 
        cy.get('input[name="username"]').type('cipres')
        cy.get('input[name="password"]').type('password')
        cy.get('input[name="login"]').click()
    })

    it('TC_Tambah Buah_004', () => {
        // go to /admin/setup_buah.php
        cy.visit('http://localhost/TanG-it/petani/setup_buah.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = nanas, harga = 10000, stok = (stok salah), keterangan = Per 3 Biji, gambar = nanas.jpeg
        cy.get('input[name="nama"]').type('nanas')
        cy.get('input[name="harga"]').type('10000')
        cy.get('input[name="stock"]')
        cy.get('input[name="keterangan"]').type('Per 3 Biji')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('nanas.jpeg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'nanas.jpeg', { type: 'image/jpeg' })
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

        cy.get('a[href="petani/index.php"]').click() 
        cy.get('input[name="username"]').type('cipres')
        cy.get('input[name="password"]').type('password')
        cy.get('input[name="login"]').click()
    })

    it('TC_Tambah Buah_005', () => {
        // go to /admin/setup_buah.php
        cy.visit('http://localhost/TanG-it/petani/setup_buah.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = strawberry, harga = 15000, stok = 50, keterangan = (keterangan salah), gambar = strawberry.jpg
        cy.get('input[name="nama"]').type('strawberry')
        cy.get('input[name="harga"]').type('15000')
        cy.get('input[name="stock"]').type('50')
        cy.get('input[name="keterangan"]')
        // gambar = file
        cy.get('input[name="gambar"]').then(subject => {
            cy.fixture('strawberry.jpg', 'base64')
                .then(Cypress.Blob.base64StringToBlob)
                .then(blob => {
                    const el = subject[0]
                    const testFile = new File([blob], 'strawberry.jpeg', { type: 'image/jpg' })
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

        cy.get('a[href="petani/index.php"]').click() 
        cy.get('input[name="username"]').type('cipres')
        cy.get('input[name="password"]').type('password')
        cy.get('input[name="login"]').click()
    })

    it('TC_Tambah Buah_006', () => {
        // go to /admin/setup_buah.php
        cy.visit('http://localhost/TanG-it/petani/setup_buah.php')
        // press button type submit name = tambah
        cy.get('button[name="tambah"]').click()
        // input nama = alpukat, harga = 1000, stok = 50, keterangan = Per Kilo, gambar = alpukat.jpeg
        cy.get('input[name="nama"]').type('alpukat')
        cy.get('input[name="harga"]').type('1000')
        cy.get('input[name="stock"]').type('50')
        cy.get('input[name="keterangan"]').type('Per Kilo')
        // gambar = file
        // cy.get('input[name="gambar"]').then(subject => {
        //     cy.fixture('alpukat.jpeg', 'base64')
        //         .then(Cypress.Blob.base64StringToBlob)
        //         .then(blob => {
        //             const el = subject[0]
        //             const testFile = new File([blob], 'alpukat.jpg', { type: 'image/jpeg' })
        //             const dataTransfer = new DataTransfer()
        //             dataTransfer.items.add(testFile)
        //             el.files = dataTransfer.files
        //             cy.wrap(subject).trigger('change', { force: true })
        //         })
        // })
        // press button type submit name = submit
        cy.get('button[name="submit"]').click()

        // //klik profile
        // cy.get('.dropdown-toggle').click()

        // //klik logout
        // cy.get('a[href="logout.php"]').click()

        // // tekan tombol "Login Admin"
        // cy.get('a[href="admin/index.php"]').click()

        // // insert username n password
        // // username = aku
        // // password = 1
        // cy.get('input[name="username"]').type('aku')
        // cy.get('input[name="password"]').type('1')

        // // klik tombol login
        // cy.get('input[name="login"]').click() 
         
    })
})