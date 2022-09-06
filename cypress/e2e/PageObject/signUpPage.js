class signUpPage
{
    baseUrl()
    {
        cy.visit("https://www.getcloudapp.com/")
    }
    fillEmail(value)
    {
        const emailTxt = cy.get('#email')
        emailTxt.clear()
        emailTxt.type(value)
        return this
    }
    fillPassWord(value)
    {
        const passWordTxt = cy.get('#password')
        passWordTxt.clear()
        passWordTxt.type(value)
        return this
    }
    signIn()
    {
        const signInBtn = cy.get('#login-dblue')
        signInBtn.click()
        return this
    }
    signUpLink()
    {
        const signUpLinkBtn = cy.contains('Sign up for free')
        signUpLinkBtn.click()
        return this
    }
    signUp()
    {
        const signUpBtn = cy.get('[data-testid="regular-signup-submit"]')
        signUpBtn.click()
        return this
    }
    logo()
    {
        const logoLink = cy.get('[data-testid="cloudapp-logo"]')
        logoLink.click()
        return this
    }
}
export default signUpPage