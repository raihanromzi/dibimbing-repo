let users = [
    {
        "name": "Alex",
        "age": 20,
        "hometown_code": "JKT",
    },
    {
        "name": "John",
        "age": 25,
        "hometown_code": "BDG",
    },
    {
        "name": "Jean",
        "age": 19,
        "hometown_code": "SBY",
    },
    {
        "name": "Yuki",
        "age": 30,
        "hometown_code": "MLG"
    },
]

let cities = {
    "JKT": {
        "full_name": "Jakarta",
        "country": "Indonesia",
        "province": "DKI Jakarta",
        "calling_code": "021"
    },
    "BDG": {
        "full_name": "Bandung",
        "country": "Indonesia",
        "province": "West Java",
        "calling_code": "022"
    },
    "SBY": {
        "full_ name": "Surabaya",
        "country": "Indonesia",
        "province": "East Java",
        "calling_code": "031"
    },
    "MLG": {
        "full_name": "Malang",
        "country": "Indonesia",
        "province": "East Java",
        "calling_code": "0341"
    }
}

for (let i = 0; i < users.length; i++) {
    let hometown = users[i]['hometown_code']
    if (hometown !== null) {
        delete users[i]['hometown_code']
        for (let citiesKey in cities) {
            if (hometown === citiesKey) {
                users[i]['hometown'] = cities[citiesKey]
                users[i]['hometown'].code = hometown
                delete users[i]['hometown']['calling_code']
            }
        }
    }
}
console.log(users)
