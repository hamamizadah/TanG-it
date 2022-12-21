// registrasi customer

describe('Registrasi user', () => {

    it('TC_Daftar Baru (Customer)_001', () => {
        // 1. visit homepage (Tang-it)
        // 2. press Login button (a href=login_form.php)
        // 3. press "Login Customer" button (a href=login_customer_form.php)
        // 4. press button "Buat akun" (a href=daftar_form.php)
        // 5. input username(customer), username2(customer lastn), email(custom@email.com), password(password), password2(password), alamat(text), tlp(text)
        // 6. press button type="submit" name="Sign up"
        // 7. login with new account
        // 8. username = customer, password = password
        // 9. press Submit button  name="login"

        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="login_customer_form.php"]').click()
        cy.get('button[type="button"]').last().click()
        cy.get('input[name="username"]').type('customer')
        cy.get('input[name="username2"]').type('customer')
        cy.get('input[name="email"]').type('custom@email.com')
        cy.get('input[name="password"]').type('password')
        cy.get('input[name="password2"]').type('password')
        cy.get('input[name="alamat"]').type('Jl. Customer No. 1')
        cy.get('input[name="tlp"]').type('081234567890')
        cy.get('button[type="submit"]').click()
        cy.get('a[href="login_customer_form.php"]').click()
        cy.get('input[name="username"]').type('customer')
        cy.get('input[name="password"]').type('password')
        cy.get('input[name="login"]').click()
    })

    it('TC_Daftar Baru (Customer)_002', () => {
        // 1. visit homepage (Tang-it)
        // 2. press Login button (a href=login_form.php)
        // 3. press "Login Customer" button (a href=login_customer_form.php)
        // 4. press button "Buat akun" (a href=daftar_form.php)
        // 5. input username(), username2(dio lastn), email(dio@email.com), password(dio), password2(dio), alamat(text), tlp(text)
        // 6. press button type="submit" name="Sign up"
        // 7. login with new account
        // 8. username = customer, password = password
        // 9. press Submit button  name="login"

        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="login_customer_form.php"]').click()
        cy.get('button[type="button"]').last().click()
        cy.get('input[name="username"]') //username(first name) salah
        cy.get('input[name="username2"]').type('dio')
        cy.get('input[name="email"]').type('dio@email.com')
        cy.get('input[name="password"]').type('dio')
        cy.get('input[name="password2"]').type('dio')
        cy.get('input[name="alamat"]').type('Jl. Banjar No. 1')
        cy.get('input[name="tlp"]').type('081122223333')
        cy.get('button[type="submit"]').click()
        // cy.get('a[href="login_customer_form.php"]').click()
        // cy.get('input[name="username"]').type('')
        // cy.get('input[name="password"]').type('dio')
        // cy.get('input[name="login"]').click()
    })

    it('TC_Daftar Baru (Customer)_003', () => {
        // 1. visit homepage (Tang-it)
        // 2. press Login button (a href=login_form.php)
        // 3. press "Login Customer" button (a href=login_customer_form.php)
        // 4. press button "Buat akun" (a href=daftar_form.php)
        // 5. input username(ilham), username2( lastn), email(ilhamlutfi@email.com), password(ilham), password2(ilham), alamat(text), tlp(text)
        // 6. press button type="submit" name="Sign up"
        // 7. login with new account
        // 8. username = customer, password = password
        // 9. press Submit button  name="login"

        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="login_customer_form.php"]').click()
        cy.get('button[type="button"]').last().click()
        cy.get('input[name="username"]').type('ilham')
        cy.get('input[name="username2"]')//username2(lastname)salah
        cy.get('input[name="email"]').type('ilham@email.com')
        cy.get('input[name="password"]').type('ilham')
        cy.get('input[name="password2"]').type('ilham')
        cy.get('input[name="alamat"]').type('Jl. Donomulyo No. 1')
        cy.get('input[name="tlp"]').type('0812222333344')
        cy.get('button[type="submit"]').click()
        cy.get('a[href="login_customer_form.php"]').click()
        cy.get('input[name="username"]').type('ilham')
        cy.get('input[name="password"]').type('ilham')
        cy.get('input[name="login"]').click()
    })

    it('TC_Daftar Baru (Customer)_004', () => {
        // 1. visit homepage (Tang-it)
        // 2. press Login button (a href=login_form.php)
        // 3. press "Login Customer" button (a href=login_customer_form.php)
        // 4. press button "Buat akun" (a href=daftar_form.php)
        // 5. input username(rony), username2(krnwn lastn), email(), password(rony), password2(rony), alamat(text), tlp(text)
        // 6. press button type="submit" name="Sign up"
        // 7. login with new account
        // 8. username = customer, password = password
        // 9. press Submit button  name="login"

        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="login_customer_form.php"]').click()
        cy.get('button[type="button"]').last().click()
        cy.get('input[name="username"]').type('rony')
        cy.get('input[name="username2"]').type('krnwn')
        cy.get('input[name="email"]')//email salah
        cy.get('input[name="password"]').type('rony')
        cy.get('input[name="password2"]').type('rony')
        cy.get('input[name="alamat"]').type('Jl. LA Sucipto No. 1')
        cy.get('input[name="tlp"]').type('0813333444455')
        cy.get('button[type="submit"]').click()
        cy.get('a[href="login_customer_form.php"]').click()
        cy.get('input[name="username"]').type('rony')
        cy.get('input[name="password"]').type('rony')
        cy.get('input[name="login"]').click()
    })

    it('TC_Daftar Baru (Customer)_005', () => {
        // 1. visit homepage (Tang-it)
        // 2. press Login button (a href=login_form.php)
        // 3. press "Login Customer" button (a href=login_customer_form.php)
        // 4. press button "Buat akun" (a href=daftar_form.php)
        // 5. input username(hamamiy), username2(zadah lastn), email(hamamiyzadah@email.com), password(), password2(zadah), alamat(text), tlp(text)
        // 6. press button type="submit" name="Sign up"
        // 7. login with new account
        // 8. username = customer, password = password
        // 9. press Submit button  name="login"

        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="login_customer_form.php"]').click()
        cy.get('button[type="button"]').last().click()
        cy.get('input[name="username"]').type('hamamiy')
        cy.get('input[name="username2"]').type('zadah')
        cy.get('input[name="email"]').type('hamamiyzadah@email.com')
        cy.get('input[name="password"]')//password salah
        cy.get('input[name="password2"]').type('zadah')
        cy.get('input[name="alamat"]').type('Jl. Singosari No. 1')
        cy.get('input[name="tlp"]').type('081999990000')
        cy.get('button[type="submit"]').click()
        // cy.get('a[href="login_customer_form.php"]').click()
        // cy.get('input[name="username"]').type('hamamiy')
        // cy.get('input[name="password"]').type('zadah')
        // cy.get('input[name="login"]').click()
    })

    it('TC_Daftar Baru (Customer)_006', () => {
        // 1. visit homepage (Tang-it)
        // 2. press Login button (a href=login_form.php)
        // 3. press "Login Customer" button (a href=login_customer_form.php)
        // 4. press button "Buat akun" (a href=daftar_form.php)
        // 5. input username(prat), username2(dito lastn), email(pratdito@email.com), password(prat), password2(), alamat(text), tlp(text)
        // 6. press button type="submit" name="Sign up"
        // 7. login with new account
        // 8. username = customer, password = password
        // 9. press Submit button  name="login"

        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="login_customer_form.php"]').click()
        cy.get('button[type="button"]').last().click()
        cy.get('input[name="username"]').type('prat')
        cy.get('input[name="username2"]').type('dito')
        cy.get('input[name="email"]').type('pratdito@email.com')
        cy.get('input[name="password"]').type('prat')
        cy.get('input[name="password2"]')//re-password salah
        cy.get('input[name="alamat"]').type('Jl. Lawang No. 1')
        cy.get('input[name="tlp"]').type('089999999990')
        cy.get('button[type="submit"]').click()
        // cy.get('a[href="login_customer_form.php"]').click()
        // cy.get('input[name="username"]').type('prat')
        // cy.get('input[name="password"]').type('prat')
        // cy.get('input[name="login"]').click()
    })

    it('TC_Daftar Baru (Customer)_007', () => {
        // 1. visit homepage (Tang-it)
        // 2. press Login button (a href=login_form.php)
        // 3. press "Login Customer" button (a href=login_customer_form.php)
        // 4. press button "Buat akun" (a href=daftar_form.php)
        // 5. input username(reza), username2(khatami lastn), email(rezakhatami@email.com), password(reza), password2(reza), alamat(text), tlp(text)
        // 6. press button type="submit" name="Sign up"
        // 7. login with new account
        // 8. username = customer, password = password
        // 9. press Submit button  name="login"

        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="login_customer_form.php"]').click()
        cy.get('button[type="button"]').last().click()
        cy.get('input[name="username"]').type('reza')
        cy.get('input[name="username2"]').type('khatami')
        cy.get('input[name="email"]').type('rezakhatami@email.com')
        cy.get('input[name="password"]').type('reza')
        cy.get('input[name="password2"]').type('reza')
        cy.get('input[name="alamat"]').type('Jl. Wajak No. 1')
        cy.get('input[name="tlp"]')// no telp salah
        cy.get('button[type="submit"]').click()
        // cy.get('a[href="login_customer_form.php"]').click()
        // cy.get('input[name="username"]').type('reza')
        // cy.get('input[name="password"]').type('reza')
        // cy.get('input[name="login"]').click()
    })

    it('TC_Daftar Baru (Customer)_008', () => {
        // 1. visit homepage (Tang-it)
        // 2. press Login button (a href=login_form.php)
        // 3. press "Login Customer" button (a href=login_customer_form.php)
        // 4. press button "Buat akun" (a href=daftar_form.php)
        // 5. input username(reza), username2(khatami lastn), email(rezakhatami@email.com), password(reza), password2(reza), alamat(text), tlp(text)
        // 6. press button type="submit" name="Sign up"
        // 7. login with new account
        // 8. username = customer, password = password
        // 9. press Submit button  name="login"

        cy.visit('http://localhost/TanG-it/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('a[href="login_form.php"]').click()
        cy.get('a[href="login_customer_form.php"]').click()
        cy.get('button[type="button"]').last().click()
        cy.get('input[name="username"]').type('reza')
        cy.get('input[name="username2"]').type('khatami')
        cy.get('input[name="email"]').type('rezakhatami@email.com')
        cy.get('input[name="password"]').type('reza')
        cy.get('input[name="password2"]').type('reza')
        cy.get('input[name="alamat"]')//alamat salah
        cy.get('input[name="tlp"]').type('089999999000')
        cy.get('button[type="submit"]').click()
        // cy.get('a[href="login_customer_form.php"]').click()
        // cy.get('input[name="username"]').type('reza')
        // cy.get('input[name="password"]').type('reza')
        // cy.get('input[name="login"]').click()
    })
})