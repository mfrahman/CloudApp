class dashBoard
{
    menu()
    {
        const menuBtn = cy.get('#main-menu', {timeout:5000})
        menuBtn.click({force: true})
        return this
    }
    settings()
    {
        const settingsOption = cy.get('[data-testid="dropdown-link-settings"]')
        settingsOption.click({force: true})
        return this
    }
    attachFile()
    {
        const attachFileBtn = cy.get('#user_avatar').attachFile('imgpng.png');
        attachFileBtn.click()
        return this
    }
    submitAvatar()
    {
        const submitAvatarBtn = cy.get('[data-testid="onboarding-submit-about-you-form"]')
        submitAvatarBtn.click()
        return this
    }
    signOut()
    {
        const signUpBtn = cy.get('[data-testid="dropdown-link-sign_out"]', {timeout:5000})
        signUpBtn.click()
        return this
    }
}
export default dashBoard