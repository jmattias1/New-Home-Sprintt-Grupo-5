console.log('orderCart success!');

const showCart = (items) => {
    $('cart-items').innerHTML = null;
    if(items.length) {
        $('msgEmpty').hidden = true;

        items.forEach(({quantity, product,id}) => {
            $('cart-items').innerHTML += ` 
        <tr>
            <td><img style="width: 100px" src="/img/${product.images[0].file}" alt=""></td>
            <td>${product.name}</td>
            <td>
                <div class="d-flex">
                    <button class="btn btn-sm btn-danger" onclick="removeCartItem('${product.id}')"><i class="fas fa-minus"></i></button>
                    <input type="text" style="border: none; width:20px; text-align: center;" value="${quantity}">
                    <button class="btn btn-sm btn-success" onclick="addCartItem('${product.id}')"><i class="fas fa-plus"></i></button>
                </div>
            </td>
            <td>$ ${(+product.price - (+product.price * +product.discount) / 100).toFixed(0)}</td>
            <td>$ ${((+product.price - (+product.price * +product.discount / 100)) * +quantity).toFixed(0)}</td>
            <td>
            <button class="btn btn-sm btn-danger" onclick="removeItemFull('${id}')"><i class="fas fa-trash"></i></button>
            </td>
        </tr>`
        });
    }else {
        $('msgEmpty').hidden = false;
    }
}

 

$('btn-cart') && $('btn-cart').addEventListener('click', async () => {

    try {

        let response = await fetch('/api/carts');
        let result = await response.json();

        console.log(result.data)

        if(result.ok){
            const {items} = result.data;
            showCart(items)
        }        
        
    } catch (error) {
        console.error
    }
});

const addCartItem = async (productId) => {

    try {
        let response = await fetch('/api/carts',{
            method : 'POST',
            body : JSON.stringify({
                productId,
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        });

        let result = await response.json();
        console.log(result);
        if(result.ok){
            const {items} = result.data;
            showCart(items)
        }        

    } catch (error) {
        console.error

    }
};

const removeCartItem = async (productId) => {

    try {
        let response = await fetch('/api/carts',{
            method : 'DELETE',
            body : JSON.stringify({
                productId,
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        });

        let result = await response.json();

        if(result.ok){
            const {items} = result.data;
            showCart(items)
        }        

    } catch (error) {
        console.error

    }
}

const removeItemFull = async (id) => {

    try {
        let response = await fetch('/api/carts/all/' + id,{
            method : 'DELETE',
        });

        let result = await response.json();

        if(result.ok){
            const {items} = result.data;
            showCart(items)
        }        

    } catch (error) {
        console.error

    }
}
