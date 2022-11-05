// model ข้อมูลต่างๆ

const houses = [{
        code: "SM",
        name: "Mother"
    },
    {
        code: "JD",
        name: "Father"
    },
    {
        code: "JE",
        name: "Myself"
    },
    {
        code: "BL",
        name: "Brother"
    }
]

const getFamily = houseCode => {
    switch (houseCode) {
        case "SM":
            return ["Mrs. Pikul Mingjindakul", "Nickname is Kul", "She likes to eat apple", "Age 48"];
        case "JD":
            return ["Mr. Prasit Mingjindakul", "Nickname is Add", "He likes to eat watermelon", "Age 49"];
        case "JE":
            return ["Mr. Nanthawat Mingjindakul", "Nickname is Jeje", "I like to eat orange", "Age 21"];
        case "BL":
            return ["Mr. Nawapon Mingjindakul", "Nickname is Jojo", "He likes to eat banana", "Age 18"];
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