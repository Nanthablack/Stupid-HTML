// model ข้อมูลต่างๆ

const houses = [{
        code: "SM",
        name: "Smith"
    },
    {
        code: "JD",
        name: "Jordan"
    },
    {
        code: "BL",
        name: "Billy"
    }
]

const getFamily = houseCode => {
    switch (houseCode) {
        case "SM":
            return ["Mario", "Karen", "Tayler", "Jojo"];
        case "JD":
            return ["Deen", "Jamin", "Atlanta", "Lilly"];
        case "BL":
            return ["Robert", "Lulu", "Sia", "Jeje"];
        default:
            return [];
    }
}

const creatOptionElement = (text, value) => {
    const element = document.createElement("option");
    element.textContent = text;
    element.value = value;
    return element;
}

const createLiElement = text => {
    const element = document.createElement("li");
    element.textContent = text;
    return element;
}

const houseElement = document.querySelector("select");

// Fill the list

houses.forEach(house => {
    houseElement.appendChild(creatOptionElement(house.name, house.code));
})

// Controller - Brains of App

houseElement.addEventListener("change", e => {
    const fams = getFamily(e.target.value);
    const famsElement = document.getElementById("family");

    famsElement.innerHTML = "";
    fams.forEach(fam => {
        famsElement.appendChild(createLiElement(fam));
    })
})