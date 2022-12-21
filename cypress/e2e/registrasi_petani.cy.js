// register user

describe('Register user', () => {

    it('TC_Daftar Baru (Petani)_001', () => {
        // 1. visit homepage (Tang-it)
        // 2. press Login button (a href=login_form.php)
        // 3. press "Login Petani" button (a href=petani/index.php)
        // 4. press button "Buat akun" (a href=petani/daftar_form.php)
        // 5. input username(user1), password(password), password2(password), alamat(text), telepon(text)
        // 6. press button "Daftar" name="register2"
        // 7. login with new account
        // 8. username = user1, password = password
        // 9. press Submit button  name="login"

        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="petani/index.php"]').click() 
        cy.get('button[type="button"]').last().click() 
        cy.get('input[name="username"]').type('user1')
        cy.get('input[name="password"]').type('password')
        cy.get('input[name="password2"]').type('password')
        cy.get('input[name="alamat"]').type('Jl. User1 No. 1')
        cy.get('input[name="telepon"]').type('081234567890')
        cy.get('button[type="submit"]').click()
        cy.get('input[name="username"]').type('user1')
        cy.get('input[name="password"]').type('password')
        cy.get('input[name="login"]').click()
    })

    it('TC_Daftar Baru (Petani)_002', () => {
        // 1. visit homepage (Tang-it)
        // 2. press Login button (a href=login_form.php)
        // 3. press "Login Petani" button (a href=petani/index.php)
        // 4. press button "Buat akun" (a href=petani/daftar_form.php)
        // 5. input username(), password(user2), password2(user2), alamat(text), telepon(text)
        // 6. press button "Daftar" name="register2"
        // 7. login with new account
        // 8. username = -, password = user
        // 9. press Submit button  name="login"

        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="petani/index.php"]').click() 
        cy.get('button[type="button"]').last().click() 
        cy.get('input[name="username"]') // username salah
        cy.get('input[name="password"]').type('user2')
        cy.get('input[name="password2"]').type('user2')
        cy.get('input[name="alamat"]').type('Jl. User2 No. 1')
        cy.get('input[name="telepon"]').type('082222222222')
        cy.get('button[type="submit"]').click()
        // cy.get('input[name="username"]')
        // cy.get('input[name="password"]').type('user2')
        // cy.get('input[name="login"]').click()
    })
    
    it('TC_Daftar Baru (Petani)_003', () => {
        // 1. visit homepage (Tang-it)
        // 2. press Login button (a href=login_form.php)
        // 3. press "Login Petani" button (a href=petani/index.php)
        // 4. press button "Buat akun" (a href=petani/daftar_form.php)
        // 5. input username(user3'), password(), password2(user3), alamat(text), telepon(text)
        // 6. press button "Daftar" name="register2"
        // 7. login with new account
        // 8. username = user3, password = -
        // 9. press Submit button  name="login"

        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="petani/index.php"]').click() 
        cy.get('button[type="button"]').last().click() 
        cy.get('input[name="username"]').type('user3')
        cy.get('input[name="password"]')//password salah
        cy.get('input[name="password2"]').type('user3')
        cy.get('input[name="alamat"]').type('Jl. User3 No. 1')
        cy.get('input[name="telepon"]').type('083333333333')
        cy.get('button[type="submit"]').click()
        // cy.get('input[name="username"]').type('user3')
        // cy.get('input[name="password"]')
        // cy.get('input[name="login"]').click()
    })

    it('TC_Daftar Baru (Petani)_004', () => {
        // 1. visit homepage (Tang-it)
        // 2. press Login button (a href=login_form.php)
        // 3. press "Login Petani" button (a href=petani/index.php)
        // 4. press button "Buat akun" (a href=petani/daftar_form.php)
        // 5. input username(user4), password(user4), password2(password), alamat(text), telepon(text)
        // 6. press button "Daftar" name="register2"
        // 7. login with new account
        // 8. username = user4, password = user4
        // 9. press Submit button  name="login"

        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="petani/index.php"]').click() 
        cy.get('button[type="button"]').last().click() 
        cy.get('input[name="username"]').type('user4')
        cy.get('input[name="password"]').type('user4')
        cy.get('input[name="password2"]')//repassword salah
        cy.get('input[name="alamat"]').type('Jl. User4 No. 1')
        cy.get('input[name="telepon"]').type('084444444444')
        cy.get('button[type="submit"]').click()
        // cy.get('input[name="username"]').type('user4')
        // cy.get('input[name="password"]').type('user4')
        // cy.get('input[name="login"]').click()
    })

    it('TC_Daftar Baru (Petani)_005', () => {
        // 1. visit homepage (Tang-it)
        // 2. press Login button (a href=login_form.php)
        // 3. press "Login Petani" button (a href=petani/index.php)
        // 4. press button "Buat akun" (a href=petani/daftar_form.php)
        // 5. input username(user5), password(user5), password2(user5), alamat(text), telepon(text)
        // 6. press button "Daftar" name="register2"
        // 7. login with new account
        // 8. username = user5, password = user5
        // 9. press Submit button  name="login"

        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="petani/index.php"]').click() 
        cy.get('button[type="button"]').last().click() 
        cy.get('input[name="username"]').type('user5')
        cy.get('input[name="password"]').type('user5')
        cy.get('input[name="password2"]').type('user5')
        cy.get('input[name="alamat"]')// alamat salah
        cy.get('input[name="telepon"]').type('08555555555')
        cy.get('button[type="submit"]').click()
        // cy.get('input[name="username"]').type('user5')
        // cy.get('input[name="password"]').type('user5')
        // cy.get('input[name="login"]').click()
    })

    it('TC_Daftar Baru (Petani)_006', () => {
        // 1. visit homepage (Tang-it)
        // 2. press Login button (a href=login_form.php)
        // 3. press "Login Petani" button (a href=petani/index.php)
        // 4. press button "Buat akun" (a href=petani/daftar_form.php)
        // 5. input username(user6), password(user6), password2(user6), alamat(text), telepon(text)
        // 6. press button "Daftar" name="register2"
        // 7. login with new account
        // 8. username = user6, password = user6
        // 9. press Submit button  name="login"

        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="petani/index.php"]').click() 
        cy.get('button[type="button"]').last().click() 
        cy.get('input[name="username"]').type('user6')
        cy.get('input[name="password"]').type('user6')
        cy.get('input[name="password2"]').type('user6')
        cy.get('input[name="alamat"]').type('Jl. User6 No. 1')
        cy.get('input[name="telepon"]')//no telp salah
        cy.get('button[type="submit"]').click()
        // cy.get('input[name="username"]').type('user6')
        // cy.get('input[name="password"]').type('user6')
        // cy.get('input[name="login"]').click()
    })
})