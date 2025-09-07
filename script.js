const loadPlants = () =>{
    const url =`https://openapi.programming-hero.com/api/plants`
    fetch(url)
    .then(res => res.json())
    .then(data => 
        {
            console.log(data)
             displayAllPlants(data.plants)
        })

       
}

const displayAllPlants = (plants) => {
    const plantContainer = document.getElementById("allPlants")
    plantContainer.innerHTML = ""

    for(let plant of plants){
        console.log(plant)

        const plantDiv = document.createElement("div")
        plantDiv.innerHTML = `<div  class="bg-white shadow-sm p-5 space-y-2">
                        <img src="${plant.image}" alt="">
                        <h2 class="text-[1rem] font-semibold">${plant.name}</h2>
                        <p>${plant.description}</p>
                        <div class="flex justify-between">
                            <a class="bg-[#DCFCE7] rounded-3xl w-22 text-center" href="">${plant.category}</a>
                            <h2>${plant.price}</h2>
                        </div>
                        <button class="btn text-[16px] bg-[#15803D] text-[#fff] w-full rounded-full border-none">Add to Cart</button>
                    </div>`

                    plantContainer.append(plantDiv)
    }
} 

loadPlants()