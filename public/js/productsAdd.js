console.log('succes productAdd');

const add = $('add')
const elements = add.elements
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
    for (let i = 0; i < elements.length - 1; i++) {
        if(!elements[i].value || elements[i].classList.contains('is-invalid')){
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

$('price').addEventListener("keyup", function (e){
    let price = this.value
    let discount = $('discount').value

    $('finalPrice').value = +price - (+price * +discount / 100)
})

$('discount').addEventListener("keyup", function (e){
    let price = $('price').value
    let discount = this.value

    $('finalPrice').value = +price - (+price * +discount / 100)
})

$('categoryId').addEventListener("blur", function (e){
    switch (true) {
        case !this.value:
            msgError('categoryError', 'La categoria es requerida',e)
            break;
        default:
            validField('categoryError',e)
            break;
    }

    checkFields()
})

$('subcategoryId').addEventListener("blur", function (e){
    switch (true) {
        case !this.value:
            msgError('subCategoryError', 'La subcategoria es requerida',e)
            break;
        default:
            validField('subCategoryError',e)
            break;
    }

    checkFields()
})

$('description').addEventListener("focus", function (e){
    $('descriptionInfo').hidden = false
    $('numberCharacteres').innerHTML = numberCharacteres

    cleanError('descriptionError',e)
})

$('description').addEventListener("blur", function (e){
    $('descriptionInfo').hidden = true

    switch (true) {
        case !this.value.trim():
            msgError('descriptionError','La descripcion es requerida',e)
            break;
        case !this.value.trim().length < 20:
            msgError('descriptionError','La descripcion debe tener como minimo 20 caracteres ',e)    
            break;
            case !this.value.trim().length >= 200:
            msgError('descriptionError','La descripcion no debe superar los 200 caracteres ',e)    
            break;
        default:
            validField('descriptionError',e)
            break;
    }

    checkFields()
})

$('description').addEventListener("keyup", function (e){
    numberCharacteres = totalCharacteres - +this.value.length

    $('numberCharacteres').innerHTML = numberCharacteres

    if (numberCharacteres <= 0) {
        $('descriptionInfo').hidden = true
        msgError('descriptionError','La descripcion no debe superar los 200 caracteres',e)
    }else{
        $('descriptionInfo').hidden = false
        cleanError('descriptionError',e)
    }
})

$('images').addEventListener("change", (e) =>{
    let reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
        $('imagePrev').src = reader.result
    }

    checkFields()
})