import signUpPage from "./PageObject/signUpPage";
import dashBoard from "./PageObject/dashBoard";
import loginPage from "./PageObject/loginPage";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("new user registration flow", () => {
  
  var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  var randEmail = "";
  for (var ii = 0; ii < 15; ii++) {
    randEmail += chars[Math.floor(Math.random() * chars.length)];
  }
  randEmail = randEmail + "@domain.com";

  it("Test #1", function () {
    const signUpData = new signUpPage();
    signUpData.baseUrl();
    signUpData.signIn();
    signUpData.signUpLink();
    
    signUpData.fillEmail(randEmail);
    signUpData.fillPassWord("Testing123$");
    signUpData.signUp();
    signUpData.logo();
  });

  it("Test #2", function () {
    const dashData = new dashBoard();
    dashData.menu();
    dashData.signOut();
  });

  it("Test #3", function () {
    const loginData = new loginPage();
    loginData.baseUrl();
    loginData.Email(randEmail);
    loginData.PassWord("Testing123$");
    loginData.signIn();

    const newdashData = new dashBoard();
    newdashData.menu();
    newdashData.settings();
    newdashData.attachFile();
    newdashData.submitAvatar();
  });
});
