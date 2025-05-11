let jsonArrayData = [
    {
        "ComapnyName": "GeeksforGeeks",
        "Location": "Noida"
    },
    {
        "Courses": "DSA self paced course"
    }
];

// console.log(jsonArrayData[0].ComapnyName);
// console.log(jsonArrayData[1]);

let jsonArrayDatas = [
    {
        "ComapnyName": "GeeksforGeeks",
        "Location": "Noida"
    },

    {
        "ComapnyName": "GeeksforGeeks",
        "Location": "Noida"
    },


    {
        "topics":
            [
                "DSA self paced course",
                "Machinelearning",
                "Web development",
                "Block Chain",
                "Artificial Intelligence"
            ]
    }
];

// console.log(jsonArrayDatas[0]["Location"]);

for (let element in jsonArrayDatas) {
    // console.log(element);
    if (jsonArrayDatas[element].topics) {
        // console.log(jsonArrayDatas[element]["topics"].Machinelearning);
    }
}

jsonArrayDatas.forEach((element) => {
    if (element.topics) {
        console.log(element.topics[0], element.topics[2]);
    }
})