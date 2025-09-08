let allTreesContainer = []
const loadPlants = () => {
    const url = `https://openapi.programming-hero.com/api/plants`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            allTreesContainer = data.plants
            // console.log(data)
            displayAllPlants(data.plants)
        })
}


const displayAllPlants = (plants) => {
    const plantContainer = document.getElementById("allPlants")
    plantContainer.innerHTML = ""

    for (let plant of plants) {
        // console.log(plant)

        const plantDiv = document.createElement("div")
        plantDiv.innerHTML = `   <div class="bg-white shadow-sm p-5 space-y-2 rounded-lg ">
                        <div class="h-[187px] " > <img class="h-full w-full" src=" ${plant.image}" alt="">
                        </div>
                        <h2 onclick="loadTreeDetails('${plant.id}')" class="text-[1rem] font-semibold">${plant.name}</h2>
                        <p>${plant.description.slice(0, 60)}</p>
                        <div class="flex justify-between">
                            <a class="bg-[#DCFCE7] rounded-3xl w-22 text-center" href="">${plant.category}</a>
                            <h2>৳${plant.price}</h2>
                        </div>
                        <button class="btn text-[16px] bg-[#15803D] text-[#fff] w-full rounded-full border-none">Add to
                            Cart</button>
                    </div>`



        plantContainer.append(plantDiv)
    }
}

//all Tree button work as reset button
document.addEventListener('DOMContentLoaded', function () {
    loadPlants()

    const allTreesBtn = document.getElementById("allTrees")
    if (allTreesBtn) {
        allTreesBtn.addEventListener("click", function (e) {
            e.preventDefault()
            removeActive()
            if (allTreesContainer.length > 0) {
                displayAllPlants(allTreesContainer)
            } else {

                loadPlants()
            }
        })
    }
})


loadPlants()

const loadCategories = () => {
    fetch(`https://openapi.programming-hero.com/api/categories`)
        .then(res => res.json())
        .then(data => displayCategories(data.categories)
        )
}

const removeActive = () => {
    const allbtns = document.querySelectorAll("#allCategories button")
    allbtns.forEach(btn => btn.classList.remove("active"))

}


const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("allCategories")
    categoryContainer.innerHTML = ""
    categories.forEach(category => {
        const categoryBtn = document.createElement("button")
        categoryBtn.className =
            "w-full text-left px-3 py-2 text-[1rem] font-normal text-[#1F2937] hover:bg-[#15803D] hover:text-white rounded-sm mb-2 "
        categoryBtn.textContent = category.category_name
        categoryBtn.addEventListener("click", () => {
            removeActive()
            categoryBtn.classList.add("active")
            categoryPlantLoader(category.category_name)
        }


        )

        categoryContainer.append(categoryBtn)
    });

}


loadCategories()

// "status": true,
// "message": "successfully fetched plant data",
// "plants": {
// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500
// }

const loadTreeDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    const res = await fetch(url)
    const details = await res.json()
    displayDetails(details.plants)
}

const displayDetails = (plant) => {
    const detailContainer = document.getElementById("details-container")
    detailContainer.innerHTML = `
        <div class="bg-white shadow-sm p-5 space-y-2 rounded-lg">
            <div class="h-[187px]">
                <img class="h-full w-full" src="${plant.image}" alt="">
            </div>
            <h2 class="text-[1rem] font-semibold">${plant.name}</h2>
            <p>${plant.description}</p>
            <div class="flex justify-between">
                <a class="bg-[#DCFCE7] rounded-3xl w-22 text-center" href="">
                    ${plant.category}
                </a>
                <h2>৳${plant.price}</h2>
            </div>
            <button class="btn bg-[#15803D] text-white w-full rounded-full border-none">
                Add to Cart
            </button>
            <button onclick="document.getElementById('treeModal').close()" 
                class="btn bg-red-500 text-white w-full rounded-full border-none mt-2">
                Close
            </button>
        </div>`;


    document.getElementById("treeModal").showModal()
}


const categoryPlantLoader = (categoryName) => {

    fetch(`https://openapi.programming-hero.com/api/plants`)
        .then(res => res.json())
        .then(data => {
            const allPlants = data.plants
            const categoryPlants = allPlants.filter(plant => plant.category === categoryName)
            displayAllPlants(categoryPlants)

        })

}


