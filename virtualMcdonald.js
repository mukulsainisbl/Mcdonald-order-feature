let foodItems = document.querySelectorAll("#foodItems input")

let display  = document.getElementById("status");

function orderfood(){
      
   
     let display = document.getElementById("numberdisplay")
     
    
     display.append(getRandomInt(999999999))

    let items = Array.from(foodItems)

    let h1 = document.createElement('h1');
    h1.innerText="I take your order";
    display.append(h1)
    
   promiseCreate(items).then((res)=>{
    console.log(res)
    h1.innerText=`${res} is ordered succesully`;

   })


}

function promiseCreate(items){
    let imageCont = document.querySelector("#imageCont");


    let images = [
        {
            name:"Burger",
            url:"https://www.on9deals.com/images/deals01/burger-king-2-veg.jpg",
        },
        {
            name:"Fries",
            url:"https://nypost.com/wp-content/uploads/sites/2/2018/08/french-fries-maine.jpg?quality=75&amp;strip=all&amp;w=1024",
        },
        {
            name:"Pasta",
            url:"https://brandtscreek.pub/wp-content/uploads/2017/05/brandts-creek-pub-kelowna-menu-rice-bowls-pasta.jpg",
        },
    ]
    
    

    let checkedItems = items.filter((ele)=>{
        return ele.checked
    })

    let imageFilter = images.filter((ele)=>{
        return ele.name == checkedItems[0].value
    })


    let promise = new Promise((resolve,reject)=>{


        setTimeout(()=>{
            let  image = document.createElement("img");
image.src = imageFilter[0].url;
image.style.width= "200px"

 imageCont.append(image)
            
            resolve(checkedItems[0].value)
        },2000)
    })

return promise
 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }




