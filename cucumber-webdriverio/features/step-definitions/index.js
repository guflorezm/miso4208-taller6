var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
       var cajaLogIn = browser.element('.cajaLogIn');

      var mailInput = cajaLogIn.element('input[name="correo"]');
      mailInput.click();
      mailInput.keys(email);

      var passwordInput = cajaLogIn.element('input[name="password"]');
      passwordInput.click();
      passwordInput.keys(password)
  });

  Then('I expect to see {string}', error => {
      browser.waitForVisible('.aviso.alert.alert-danger', 5000);
      var alertText = browser.element('.aviso.alert.alert-danger').getText();
      expect(alertText).to.include(error);
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When('I fill a wrong email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('wrongemail@example.com');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123467891')
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
  });

  When('I fill a correct email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('gu.florez@uniandes.edu.co');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('Gufm1025')
  });

  Then('I expect to be able to login', () => {
    browser.waitForVisible('#cuenta', 5000);
    expect(browser.element('#cuenta')).to.exist;
  });

  When('I fill an existing name and last name', () => {
    var cajaSignUp = browser.element('.cajaSignUp');
    var nombre = cajaSignUp.element('input[name="nombre"]');
    nombre.click();
    nombre.setValue('Gerson');

    var apellido = cajaSignUp.element('input[name="apellido"]');
    apellido.click();
    apellido.setValue('Florez');
  });

  When('I select the university and state', () => {
    var cajaSignUp = browser.element('.cajaSignUp');
    var universidad = cajaSignUp.element('select[name="idUniversidad"]');
    universidad.selectByValue('universidad-de-los-andes')

    var departamento = cajaSignUp.element('select[name="idDepartamento"]');
    departamento.selectByValue('3')

  });

  When('I fill an existing email and password', () => {
    var cajaSignUp = browser.element('.cajaSignUp');
    var correo = cajaSignUp.element('input[name="correo"]');
    correo.click();
    correo.setValue('gu.florez@uniandes.edu.co');

    var password = cajaSignUp.element('input[name="password"]');
    password.click();
    password.setValue('Gufm1025')
  });

  When('I check the terms and conditions', () => {
    var cajaSignUp = browser.element('.cajaSignUp');
    var acepta = cajaSignUp.element('input[name="acepta"]');
    acepta.click();
  });

  When('I try to sign up', () => {
    var cajaSignUp = browser.element('.cajaSignUp');
    cajaSignUp.element('button=Registrarse').click()
  });

  Then('I expect to not be able to sign up', () => {
    browser.waitForVisible('.sweet-alert', 5000);
    var alertText = browser.element('.sweet-alert').getText();
    expect(alertText).to.include('Ocurrió un error activando tu cuenta');
  });

});
