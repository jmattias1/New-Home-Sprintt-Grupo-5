console.log('product succes');

const edition = $('edition')
const element = edition.elements
let totalCharacteres = 200;
let numberCharacteres = 200;

const msgError = (element, msg, event) => {
    $(element).style.color = 'red'
    $(element).innerHTML = msg
    event.target.classList.add("is-invalid");
}

const cleanError = (element, {target}) => {
    target.classList.remove("is-invalid");
    target.classList.remove("is-valid");
    $(element).innerHTML = null
}

const validField = (element, {target}) =>{
    $(element).innerHTML = null
    target.classList.remove("is-invalid");
    target.classList.add("is-valid");
}

const checkFields = () => {
    let error = false;
    for (let i = 0; i < element.length - 1; i++) {
        if(!element[i].value || elements[i].classList.contains('is-invalid')){
            error = true
        }
        console.log(error);
        
    }
    if(!error){
        $('btn-submit').disabled = false;
      }else {
        $('btn-submit').disabled = true;
      }
}

$("name").addEventListener("focus", function (e){
      cleanError('errorName',e)
})

$("name").addEventListener("blur", function (e){
    switch (true) {
        case !this.value.trim():
            msgError('errorName', 'El nombre es requerido', e)
            break;
        case this.value.trim().length < 10 :
            msgError('errorName', 'El nombre debe tener como minimo 10 caracteres',e)

    break;
        default:
            validField('errorName',e)
            break;
    }
    
    checkFields()

})

$("price").addEventListener("focus", function (e){
    cleanError('errorPrice',e)
})

$("price").addEventListener("blur", function (e){
  switch (true) {
      case !this.value.trim():
          msgError('errorPrice', 'El precio es requerido', e)
          break;
      case this.value < 0 :
          msgError('errorPrice', 'No puede ser un numero negativo',e)

  break;
      default:
          validField('errorPrice',e)
          break;
  }
  
  checkFields()

})

