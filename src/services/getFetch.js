const items = [
    {id: 1, title: "THE WORK JACKET", description: "100% cotton, made baggy for comfort", price: 120, img: "https://res.cloudinary.com/dgsapxeyx/image/upload/v1635794112/work_fj9alz.jpg"},
    {id: 2, title: "LINEN COORDS", description: "A cool linen blend in pastel shades", price: 100, img: "https://res.cloudinary.com/dgsapxeyx/image/upload/v1635794112/linen_fdup8j.jpg"},
    {id: 3, title: "CORPORATE COOL", description: "100% silk, 100% office-ready", price: 200, img: "https://res.cloudinary.com/dgsapxeyx/image/upload/v1635794112/corporate_axer3a.jpg"}
]

export const getFetch = new Promise((resolve, reject) => {
    const condition = true
    if(condition){
        setTimeout(()=>{
            resolve(items)
        },2000)
    } else{
        setTimeout(()=>{
            reject("404 - Not found")
        },2000)
    }
})