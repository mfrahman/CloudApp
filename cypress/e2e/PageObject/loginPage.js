class loginPage
{
   
    baseUrl()
    {
        cy.visit("https://share.getcloudapp.com/login")
    }
   
    Email(value)
    {
        const emailTxt = cy.get('[data-testid="regular-login-email"]')
        emailTxt.clear()
        emailTxt.type(value)
        return this
    }
    PassWord(value)
    {
        const passWordTxt = cy.get('[data-testid="regular-login-password"]')
        passWordTxt.clear()
        passWordTxt.type(value)
        return this
    }
    signIn()
    {
        const signInBtn = cy.get('[data-testid="regular-login-submit"]')
        signInBtn.click()
        return this
    }
}
export default loginPage