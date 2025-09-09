let allTreesContainer = []
const loadPlants = () => {
    manageSpinner(true)


    const url = `https://openapi.programming-hero.com/api/plants`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            allTreesContainer = data.plants
            // console.log(data)
            displayAllPlants(data.plants)
            manageSpinner(false)

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
                        <button onclick="addToCart('${plant.name}','${plant.price}')" class="btn text-[16px] bg-[#15803D] text-[#fff] w-full rounded-full border-none">Add to
                            Cart</button>
                    </div>`



        plantContainer.append(plantDiv)
    }
}

//all Tree button work as reset button
document.addEventListener('DOMContentLoaded', () => {
    loadPlants()
    loadCategories()

    document.getElementById("allTrees").addEventListener("click", function (e) {
        removeActive()
        displayAllPlants(allTreesContainer)

    })
})




// loadPlants()

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


// loadCategories()

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
    detailContainer.innerHTML = `<div class="bg-white shadow-sm p-5 space-y-4 rounded-lg">
                                <h2 class="text-[1rem] font-semibold">${plant.name}</h2>

                        <div class="w-full h-[250px]">

                            <img class="h-full w-full" src="${plant.image}" alt="">
                        </div>
                        <div class="flex justify-between">
                            <a class="bg-[#DCFCE7] rounded-3xl w-22 text-center" href="">
                                ${plant.category}
                            </a>
                            <h2>৳${plant.price}</h2>
                        </div>
                        <p>${plant.description}</p>

<div class="flex justify-end">
    <button onclick="document.getElementById('treeModal').close()"
        class="btn bg-[#fff90] text-black w-30 rounded-full border-none shadow-md">
        Close
    </button>
</div>        `;


    document.getElementById("treeModal").showModal()
}


const categoryPlantLoader = (categoryName) => {
    manageSpinner(true)


    fetch(`https://openapi.programming-hero.com/api/plants`)
        .then(res => res.json())
        .then(data => {
            const allPlants = data.plants
            const categoryPlants = allPlants.filter(plant => plant.category === categoryName)
            displayAllPlants(categoryPlants)
            manageSpinner(false)

        })

}

//spiner section

const manageSpinner = (status) => {
    if (status) {
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("allPlants").classList.add("hidden")
    }
    else {
        document.getElementById("spinner").classList.add("hidden")
        document.getElementById("allPlants").classList.remove("hidden")

    }
}

//displaying add to card
const addToCart = (plantName, plantPrice) => {
    const addToCardDiv = document.getElementById("addToCardCon")
    const cartItem = document.createElement("div")
    cartItem.className = "bg-[#F0FDF4] flex items-center justify-between p-4 rounded-lg shadow-sm "
    cartItem.innerHTML = `   <div>
                            <h2 class="text-sm font-semibold">${plantName}</h2>
                            <p class="tex-[16px] font-normal text-[#8C8C8C]">৳${plantPrice} x 1</p>
                        </div>
                       <button onclick="removeFromCart(this,'${plantPrice}')" class="text-[#8C8C8C] tex-[16px]"><i class="fa-solid fa-xmark"></i></button>`

    addToCardDiv.appendChild(cartItem)

    //total calculation
    const totalPrice = document.getElementById("totalPrice")
    const currentTotal = parseInt(totalPrice.innerText.replace('৳', ""))
    const newTotal = currentTotal + parseInt(plantPrice)
    totalPrice.innerText = `৳${newTotal}`


}


const removeFromCart = (button, plantPrice) => {
    button.parentElement.remove()

    const totalPrice = document.getElementById("totalPrice")
    const currentTotal = parseInt(totalPrice.innerText.replace('৳', ""))
    const newTotal = currentTotal - parseInt(plantPrice)
    totalPrice.innerText = `৳${newTotal}`


}





