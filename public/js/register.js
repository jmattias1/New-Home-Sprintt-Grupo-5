console.log('userRegister success!');

const exRegAlfa = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/
const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
const exRegPassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,15}/

const msgError = (element, msg, { target }) => {
  $(element).innerText = msg;
  target.classList.add("is-invalid");
};

const cleanField = (element, target) => {
  $(element).innerText = null;
  target.classList.remove("is-invalid", "is-valid");
};

const validField = (element, { target }) => {
  cleanField(element, target);
  target.classList.add("is-valid");
};

$("name").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        msgError("errorName", "El nombre es obligatorio", e);
        break;
      case this.value.trim().length < 2:
        msgError(
          "errorName",
          "El nombre debe tener como minimo 2 caracteres",
          e
        );
        break;
      case !exRegAlfa.test(this.value):
        msgError("errorName", "Solo se permiten caracteres alfabeticos", e);
        break;
      default:
        validField("errorName", e);
        break;
    }
});

$("name").addEventListener("focus", function ({ target }) {
  cleanField("errorName", target);
});

$("surname").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        msgError("errorSurname", "El Apellido es obligatorio", e);
        break;
      case this.value.trim().length < 2:
        msgError(
          "errorSurname",
          "El Apellido debe tener como minimo 2 caracteres",
          e
        );
        break;
      case !exRegAlfa.test(this.value):
        msgError("errorSurname", "Solo se permiten caracteres alfabeticos", e);
        break;
      default:
        validField("errorSurname", e);
        break;
    }
});

$("surname").addEventListener("focus", function ({ target }) {
  cleanField("errorSurname", target);
});

$("email").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        msgError("errorEmail", "El Email es obligatorio", e);
        break;
      case !exRegEmail.test(this.value):
        msgError("errorEmail", "El email tiene un formato invalido", e);
        break;
      default:
        validField("errorEmail", e);
        break;
    }
});

$("email").addEventListener("focus", function ({ target }) {
  cleanField("errorEmail", target);
});

$("password").addEventListener("blur", function (e) {
      switch (true) {
        case !this.value.trim():
          msgError("errorPassword", "La contraseña es obligatorio", e);
          break;
        case !exRegPassword.test(this.value):
          msgError("errorPassword", "La contraseña debe tener entre 6 y 15 caracteres, un numero, una mayuscula y un caracter especial", e);
          break;
        default:
          validField("errorPassword", e);
          break;
      }
});
  
  $("password").addEventListener("focus", function ({ target }) {
    cleanField("errorPassword", target);
  });

  $("province").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        msgError("errorProvince", "La provincia es obligatorio", e);
        break;
      default:
        validField("errorProvince", e);
        break;
    }
});

$("province").addEventListener("focus", function ({ target }) {
  cleanField("errorProvince", target);
});


$("country").addEventListener("blur", function (e) {
  switch (true) {
    case !this.value.trim():
      msgError("errorCountry", "El pais es obligatorio", e);
      break;
    default:
      validField("errorCountry", e);
      break;
  }
});

$("country").addEventListener("focus", function ({ target }) {
cleanField("errorCountry", target);
});

$("city").addEventListener("blur", function (e) {
  switch (true) {
    case !this.value.trim():
      msgError("errorCity", "La ciudad es obligatorio", e);
      break;
    default:
      validField("errorCity", e);
      break;
  }
});

$("city").addEventListener("focus", function ({ target }) {
cleanField("errorCity", target);
});



