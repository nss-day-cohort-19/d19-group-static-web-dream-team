var pizza0 =  [{
   name:"Greek Pizza",
   Description: "Baked on Bricks",
   Size: "large",
   Price: 10.99,
   Picture:"http://www.cicis.com/media/1243/pizza_adven_zestypepperoni.png (2MB)"
   },    {name: "Italian Pizza",
    Description: "Thin Crust",
    Size : "Medium",
    Price: 12.99 },
  {name: "Newyork Pizza",
    Description: "Thin Crust",
    Size : "Medium",
    Price: 12.99},
   {name: "California Pizza",
    Description: "Thin Crust",
    Size : "Medium",
    Price: 12.99}]


function pizza()
{
   var demop = document.getElementById("pizza");
   for(i=0; i < pizza0.length; ++i)
   {
       demop.innerHTML += "<div class ='pizza'>"+ pizza0[i].name +
       "<img src ='" + pizza0[i].Picture + "'></div>"
   }
   }
   pizza();