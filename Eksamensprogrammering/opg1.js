const cars =[
    {nummerplade : "Bil1", vægt : 1400, mærke : "Skoda", hjul : 4},
    {nummerplade : "Bil2", vægt : 1300, mærke : "Skoda", hjul : 8},
    {nummerplade : "Bil3", vægt : 1200, mærke : "Skoda", hjul : 7},
    {nummerplade : "Bil4", vægt : 1100, mærke : "Skoda", hjul : 10},
    {nummerplade : "Bil5", vægt : 1000, mærke : "Skoda", hjul : 10},
    {nummerplade : "Bil6", vægt : 900, mærke : "Skoda", hjul : 4},
    {nummerplade : "Bil7", vægt : 800, mærke : "Robin", hjul : 3},
    {nummerplade : "Bil8", vægt : 730, mærke : "Robin", hjul : 3},
]

const carsWithEightWheels = cars.filter(car => car.hjul == 8);
console.log(carsWithEightWheels);

const plates = cars.map(car => car.nummerplade);
console.log(plates);

const lowestWeight = cars.reduce((lowest, car) => Math.min(lowest, car.vægt), cars[0].vægt);
console.log(lowestWeight);

const maxWheels = cars.reduce((max, car) => Math.max(max, car.hjul), cars[0].hjul);
const carsWithMostWheels = cars.filter(car => car.hjul == maxWheels);
console.log(carsWithMostWheels);

