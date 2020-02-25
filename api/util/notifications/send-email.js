const CONFIG = require('../../config/config');

const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');

const options = {
   auth: {
      api_key: CONFIG.mailgun_api_key,
      domain: CONFIG.mailgun_domain
   },
   host: CONFIG.mailgun_host
};

exports.sendEmail = (template, data) => {
   const { emailTpl } = require(`./templates/${template}`);
   const readyTpl = emailTpl(data);

   if (!data.from) {
      data.from = 'contact@example.com';
   }

   data.html = readyTpl.html;
   data.text = readyTpl.text;

   return new Promise((resolve, reject) => {
      resolve();
   });
};