const loadProducts = (produtos, idDivParent) =>{
  const parentDiv = document.querySelector(idDivParent)
  produtos.forEach(produto  =>{

    const html = `
      <article class="prato">
      <img src="${produto.image}" alt="${produto.title}">
      <h4>${produto.title}</h4>
      <h4>R$ ${produto.value}</h4>
      <p>${produto.description}</p>
      <button type="button" onclick ="modalTrigger(${produto.id})">Quero esse prato</button>
    </article>  
    `
    parentDiv.insertAdjacentHTML('beforeend', html)
   })
}

const modalTrigger = (productId) => {
  const modal = document.querySelector(' .modal')
    if (productId != null){
      const produto = produtos.filter( produto => produto.id == productId)[0]
      if(produto != null){
        modal.querySelector('#title').value = produto.title
    }
  }
  modal.classList.contains('hide') == true ? modal.classList.remove('hide') : modal.classList.add('hide')
 
}

  const whasappLinkGenerator = (phoneNumber, productTitle, productQuantity,buyerName, buyerAndress,buyerPayment) =>`https://api.whatsapp.com/send?phone=${phoneNumber}&text=eu quero :${productQuantity} ${productTitle} - Entrega para ${buyerName} no endereço ${buyerAndress} - A forma de pagamento será : ${buyerPayment}`
  
  const checkout= phoneNumber =>{
    const form = document.querySelector('#form-product')
    form.addEventListener('submit', e => {
      e.preventDefault()
      const productTitle = form.querySelector('input#title').value
      const productQuantity = form.querySelector('input#quantity').value
      const buyerName = form.querySelector('input#name').value
      const buyerAndress = form.querySelector('input#andress').value
      const buyerPayment = form.querySelector('select#payment').value
     
      const whatsappURL = whasappLinkGenerator(phoneNumber, productTitle, productQuantity,buyerName, buyerAndress,buyerPayment)

      window.location.href = whatsappURL
    })
  }


loadProducts(produtos, '#product-div')
checkout(5598982298902)