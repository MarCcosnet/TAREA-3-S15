const datos = {
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsp.depositphotos.com%2Fstock-photos%2Fle%25C3%25B3n.html&psig=AOvVaw2K3zuktq2D5Bv53kIAkqlx&ust=1631585890222000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCc_KDx-vICFQAAAAAdAAAAABAD.jpg',
    correo: 'mcuadradob@unemi.edu.ec'
}
console.log(datos)
    //forma1
const mostrarDatos = (avatar) =>
    `
        <img src=${avatar.imagen} alt=${avatar.correo}/>        
    `
    //forma2
const mostrarDatos1 = (avatar) => {
        const { imagen, correo } = avatar
        return (
            `
        <img src=${imagen} alt=${correo}/>        
        `
        )
    }
    //forma3
const mostrarDatos2 = ({ imagen: img, correo }) =>
    `
    <img src=${img} alt=${correo}/>        
    `

const $root = document.getElementById("root")
$root.innerHTML = "<h3>Destructuring</h3>"
$root.innerHTML += mostrarDatos2(datos)