 
exports.emailTpl = data => ({
  subject: 'Welcome to React Banking!',
  html: `Hello ${data.firstName}, welcome to React Bank!`,
  text: `Hello ${data.firstName}, welcome to React Bank!`
});