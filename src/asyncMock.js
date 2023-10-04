const products = [
    {

    id: '1',
    name: 'Iphone 12',
    price: '1000 USD'
    category: 'celular',
    Image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_656126-MLA46104947324_052021-O.webp&tbnid=QrFMxEdWtAT8JM&vet=12ahUKEwib8ZaPlduBAxXZsJUCHeOuCQAQMygBegUIARC6AQ..i&imgrefurl=https%3A%2F%2Fwww.gruposenz.com%2Fapple-iphone-12-128-gb-morado%2Fp%2FMLA17935586&docid=lCCtN4MeMPiL8M&w=365&h=500&q=iphone%2012%20webp&ved=2ahUKEwib8ZaPlduBAxXZsJUCHeOuCQAQMygBegUIARC6AQ',
    stock: 25,
    description: 'Descripcion de iphone 12',

    }
    {
        id: '2', name: 'Samsung 21', price: '500 USD', category:'celular', img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_780990-MLU69342294877_052023-O.webp&tbnid=zLoMeuGP8xfTWM&vet=12ahUKEwi0xdyBltuBAxWfpJUCHazEA9oQMygAegUIARC_AQ..i&imgrefurl=https%3A%2F%2Flistado.mercadolibre.com.ar%2Fsamsung-21&docid=yVPpKyNQ37DdmM&w=440&h=500&q=samsung%2021%20webp&ved=2ahUKEwi0xdyBltuBAxWfpJUCHazEA9oQMygAegUIARC_AQ', stock: 25, description: 'Descripcion de Samsung 21'
    }
    {
        id: '3', name: 'Ipad 9na generacion', price: '750 USD', category: 'tablet', img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fspaintechblog.com%2Fwp-content%2Fuploads%2F2023%2F04%2Fapple-ipad-10th-gen-265x300.webp&tbnid=2Ysx3yFnuAtwOM&vet=12ahUKEwiB_PvcltuBAxWWuJUCHRvFBXcQMygLegUIARDFAQ..i&imgrefurl=https%3A%2F%2Fspaintechblog.com%2Fanalisis%2Fanalisis-y-revision-apple-ipad-10th-gen%2F&docid=8rhX_Xn-TMqRcM&w=265&h=300&q=ipad%202023%20webp&ved=2ahUKEwiB_PvcltuBAxWWuJUCHRvFBXcQMygLegUIARDFAQ', stock: 30, description: 'Descripcion de Ipad'
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
}, 500)
})}

export const getProductById = (productId) => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })}

    