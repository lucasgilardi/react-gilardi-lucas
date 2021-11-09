const items = [
    {   
        id: 1, 
        title: "THE WORK JACKET", 
        description: "100% cotton, made baggy for comfort", 
        price: 120, 
        category: "day", 
        img:"https://res.cloudinary.com/dgsapxeyx/image/upload/v1636046370/work_loezww.jpg"
    },
    {
        id: 2, 
        title: "LINEN COORDS", 
        description: "A cool linen blend in pastel shades", 
        price: 100, 
        category: "day", 
        img:"https://res.cloudinary.com/dgsapxeyx/image/upload/v1636046369/linen_q4biw5.jpg"
    },
    {
        id: 3, 
        title: "CORPORATE COOL", 
        description: "100% silk, 100% office-ready", 
        price: 200, 
        category: "day", 
        img:"https://res.cloudinary.com/dgsapxeyx/image/upload/v1636046374/corporate_tgbwkl.jpg"
    },
    {
        id: 4, 
        title: "SILK NIGHT", 
        description: "An all-ready fresh and styled outfit", 
        price: 350, 
        category: "night", 
        img:"https://res.cloudinary.com/dgsapxeyx/image/upload/v1636419371/silk-night_bbncuf.jpg"
    },
    {
        id: 5, 
        title: "NIGHT DRESS", 
        description: "All time classic straight night dress", 
        price: 300, 
        category: "night", 
        img:"https://res.cloudinary.com/dgsapxeyx/image/upload/v1636419371/dress-night_xq94rq.jpg"
    },
    {
        id: 6, 
        title: "LEATHER NIGHT", 
        description: "100% cruelty free leather", 
        price: 450, 
        category: "night", 
        img:"https://res.cloudinary.com/dgsapxeyx/image/upload/v1636419380/leather-night_mqjxcn.jpg"
    }
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