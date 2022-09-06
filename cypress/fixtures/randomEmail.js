class randEmail {
  randomEmail() {
    var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    var randEmail = "";
    for (var ii = 0; ii < 15; ii++) {
      randEmail += chars[Math.floor(Math.random() * chars.length)];
    }
    newEmail = randEmail + "@domain.com";
  }
}
export default randEmail;
