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
                "Machine learning",
                "Web development",
                "Block Chain",
                "Artificial Intelligence"
            ]
    }
];

// console.log(jsonArrayDatas[0]["Location"]);

for (let element in jsonArrayDatas) {
    console.log(element);
}