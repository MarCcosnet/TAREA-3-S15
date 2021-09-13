//arreglos
const pares = [2,4,6,8,10]
const impares = [1,3,5,7,9]
const numeros1 = pares.concat(impares)
const numeros2 = [...impares,...pares]
//console.log(numeros1,numeros2)

let precio = 4
const articulo = {
    descripcion:'Coca cola',
    precio:precio,
    stock:1000
}
//valor añadido solo para art
const art = {...articulo}
art.id=1

//valor añadido para ambos objetos
//const art = articulo
//art.id=1

//console.log('articulo',articulo)
//console.log('art',art)


//cmabiar valor de atributos del objeto llamado
const articulo2 = {
    ...articulo,
    precio:5,
    ['stock']:500
}
//console.log(articulo2)
const masDatos = ({precio,stock}) =>{
    console.log("Faltante",precio,stock)
}
const mostarArticulo =({descripcion,...props}) =>{
    console.log(descripcion,props)
    masDatos({...props})
}
mostarArticulo(articulo)