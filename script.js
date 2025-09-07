const loadPlants = () =>{
    const url =`https://openapi.programming-hero.com/api/plants`
    fetch(url)
    .then(res => res.json())
    .then(data => 
        {
            // console.log(data)
             displayAllPlants(data.plants)
        })

       
}

const displayAllPlants = (plants) => {
    const plantContainer = document.getElementById("allPlants")
    plantContainer.innerHTML = ""

    for(let plant of plants){
        // console.log(plant)

        const plantDiv = document.createElement("div")
        plantDiv.innerHTML = `<div  class="bg-white shadow-sm p-5 space-y-2 rounded-lg">
                        <img class="h-[187px] src="${plant.image}" alt="">
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

const loadCategories = () => {
    fetch(`https://openapi.programming-hero.com/api/categories`)
    .then(res => res.json())
    .then(data => displayCategories(data.categories)
    )
}

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("allCategories")
    categoryContainer.innerHTML = ""
    categories.forEach(category => {
         const categoryBtn = document.createElement("button")
    categoryBtn.className =
      "w-full text-left px-3 py-2 text-[1rem] font-normal text-[#1F2937] hover:bg-[#15803D] hover:text-white rounded-sm mb-2"
    categoryBtn.textContent = category.category_name

    categoryContainer.append(categoryBtn)
    });

}

loadCategories()


