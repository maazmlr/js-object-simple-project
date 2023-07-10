var cars={
    honda: {
        civic:{
            model:'honda civic',
            picture:`./img/civic.jpeg`,
            state:'new',
            tyre:"black",
            price:1000000,
            color:["white","red","green"]
        },
        city:{
            model:'honda city',
            picture:`./img/city.jpeg`,
            state:'used',
            tyre:"grey",
            price:100500,
            color:["white","red","green"]
        },
        brv:{
            model:'honda brv ',
            picture:`./img/h-brv.jpeg`,
            state:'used',
            tyre:"black",
            price:2200500,
            color:["white","red","green"]
        },
        Accord:{
            model:'honda Accord',
            picture:`./img/accord.jpeg`,
            state:'used',
            tyre:"grey",
            price:1000500,
            color:["white","red","green"]
        },
        cr_v:{
            model:'honda cr-v',
            picture:`./img/h-crv.jpeg`,
            state:'new',
            tyre:"black",
            price:5500000,
            color:["white","red","green"]
        }




    },
    tesla:{
       tesla_s:{ model:'tesla S',
        picture:`./img/t-s.jpeg`,
        state:'new',
        tyre:"black",
        price:5200000,
        color:["white","red","green"]
    },
    tesla_V:{ 
        model:'tesla V',
        picture:`./img/t-v.jpeg`,
        state:'new',
        tyre:"black",
        price:59900000,
        color:["white","red","green"]
        },
        tesla_s:{ 
            model:'tesla S',
            picture:`./img/t-s.jpeg`,
            state:'new',
            tyre:"black",
            price:5200000,
            color:["white","red","green"]
        },
        tesla_x:{
                 model:'tesla X',
                picture:`./img/t-x.jpeg`,
                state:'used',
                tyre:"grey",
                price:12000000,
                color:["white","red","green"]
        },
        tesla_y:{
             model:'tesla Y',
        picture:`./img/t-y.jpeg`,
        state:'used',
        tyre:"grey",
        price:52000000,
        color:["white","red","green"]
        },
        tesla_3:{
            model:'tesla 3',
       picture:`./img/t-3.jpeg`,
       state:'used',
       tyre:"grey",
       price:67000000,
       color:["white","red","green"]
       }
        
    },
    mercedez:{
        eqe_suv:{
            model:'eqe-suv',
            picture:`./img/eqs-suv.jpeg`,
            state:'new',
            tyre:"black",
            price:45000000,
            color:["white","red","green"]
        },
        eqe_sedan:{
            model:'eqe-sedan',
            picture:`./img/eqs-sed.jpeg`,
            state:'used',
            tyre:"black",
            price:45000000,
            color:["white","red","green"]
        },
        eqb_suv:{
            model:'eqb-suv',
            picture:`./img/mer-eqb-suv.jpeg`,
            state:'new',
            tyre:"black",
            price:560000000,
            color:["white","red","green"]
        },
        eqs_sedan:{
            model:'eqs-sedan',
            picture:`./img/mer-eqe-sed.jpeg`,
            state:'new',
            tyre:"black",
            price:12000000,
            color:["white","red","green"]
        },
        eqs_suv:{
            model:'eqs-suv',
            picture:`./img/mer-eqb-suv.jpeg`,
            state:'new',
            tyre:"black",
            price:13000000,
            color:["white","red","green"]
        }
    }

    
}
var body = document.querySelector('.item');
for (var key in cars)
{
    for(var key2 in cars[key]){
        var price=cars[key][key2].price;
        var model=cars[key][key2].model;
        var color=cars[key][key2].color;
        var state=cars[key][key2].state
        var tyre=cars[key][key2].tyre;
        var picture=cars[key][key2].picture
         
    var a= `  <div class="card abc" style="width: 14rem;  border-radius:0 ;">
    <img src="${picture}" class="card-img-top"style="border-radius:0;height:10rem;"  alt="...">
    <div class="card-body" style="margin: -1rem;">
        
        <p>model name : ${model} </p>
        <p>state : ${state}</p>
        <p>tyre : ${tyre}</p>
        <p>price : ${price}</p>
      
      <a href="#" class="btn btn-primary" style=" width: 13.9rem; border-radius: 6px; margin-top:-0.1rem">Buy Now</a>`
body.innerHTML+=a
    }
}
var hon=document.getElementById('Honda');
var tes=document.getElementById('Tesla');
var merc=document.getElementById('Mercedez');

for (var key in cars){
    console.log(key)
}
hon.addEventListener('click',function(){
   let hondaCars= cars.honda;
   body.innerHTML=''
   for(var key in hondaCars){

    
        model=hondaCars[key].model;
        state=hondaCars[key].state
        tyre=hondaCars[key].tyre;
        picture=hondaCars[key].picture
        price=hondaCars[key].price;
    
     a= `  <div class="card abc" style="width: 14rem;  border-radius:0 ;">
    <img src="${picture}" class="card-img-top"style="border-radius:0;height:10rem;"  alt="...">
    <div class="card-body" style="margin: -1rem;">
        
        <p>model name : ${model} </p>
        <p>state : ${state}</p>
        <p>tyre : ${tyre}</p>
        <p>price : ${price}</p>
      
        <a href="#" class="btn btn-primary" style=" width: 13.9rem; border-radius: 6px; margin-top:-0.1rem">Buy Now</a>`
    console.log(a)
        
body.innerHTML+=a
    }
}
)
tes.addEventListener('click', function(){
    let teslaCars=cars.tesla
    body.innerHTML=''
    for(var key in teslaCars){
        model=teslaCars[key].model;
        state=teslaCars[key].state
        tyre=teslaCars[key].tyre;
        picture=teslaCars[key].picture
        price=teslaCars[key].price;
        a= `  <div class="card abc" style="width: 14rem;  border-radius:0 ;">
        <img src="${picture}" class="card-img-top"style="border-radius:0;height:10rem;"  alt="...">
        <div class="card-body" style="margin: -1rem;">
            
            <p>model name : ${model} </p>
            <p>state : ${state}</p>
            <p>tyre : ${tyre}</p>
            <p>price : ${price}</p>
          
            <a href="#" class="btn btn-primary" style=" width: 13.9rem; border-radius: 6px; margin-top:-0.1rem">Buy Now</a>`
        console.log(a)
            
    body.innerHTML+=a

    }
})
merc.addEventListener('click',function(){
    mercCars=cars.mercedez;
    body.innerHTML=''
    for(var key in mercCars){
        model=mercCars[key].model;
        state=mercCars[key].state
        tyre=mercCars[key].tyre;
        picture=mercCars[key].picture
        price=mercCars[key].price;
        a= `  <div class="card abc" style="width: 14rem;  border-radius:0 ;">
        <img src="${picture}" class="card-img-top"style="border-radius:0;height:10rem;"  alt="...">
        <div class="card-body" style="margin: -1rem;">
            
            <p>model name : ${model} </p>
            <p>state : ${state}</p>
            <p>tyre : ${tyre}</p>
            <p>price : ${price}</p>
          
            <a href="#" class="btn btn-primary" style=" width: 13.9rem; border-radius: 6px; margin-top:-0.1rem">Buy Now</a>`
        console.log(a)
            
    body.innerHTML+=a

    }
})

 