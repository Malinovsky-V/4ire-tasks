const minNumberOfBuild = 1;

// Power do Station 
const powerStation = ()=>{
    const maxCountPowerStations = 6;
    const maxPowerMakeStation = 100
        const countStation = new Array(between(minNumberOfBuild, maxCountPowerStations)).fill(0)
            return countStation.reduce((power)=> power + between(1, maxPowerMakeStation), 0)
}

// 1 Sun panels do 1 -5 only pm
const sunPanelsInDay = (halfOfDay)=> {
    const maxCountSunPanels = 200;
        const countPanels = new Array(between(minNumberOfBuild, maxCountSunPanels)).fill(0)
            return halfOfDay === 'day' ? countPanels.reduce((power) => power + Math.floor(Math.random() * 5) , 0) : 0;
}

// numbrs of use appart
const appartmentUseDay = (halfOfDay) => {
    const maxNumberOfHouses = 1000;
    const maxNumbersOfAppartment = 400;
        const countOfHouses = between(minNumberOfBuild, maxNumberOfHouses);
            const countOfAppartment = countOfHouses * between(minNumberOfBuild, maxNumbersOfAppartment);
                     return halfOfDay === 'day' ? countOfAppartment * 0.004 : countOfAppartment * 0.001

}

const linesPowerCounter = () => {
    const maxCountLines = 25;
    const maxPowerLines = 50;
    const minPowerLines = 1;
    const maxPrice = 46.3;
    const minPrice = 2.7;
    const countLinesPower = new Array(between (minNumberOfBuild, maxCountLines)).fill(0)
     countLinesPower.forEach((_,i) =>{ countLinesPower[i] = {
            power: between (minPowerLines, maxPowerLines),
            priceForPower: (Math.random()* (maxPrice - minPrice) + minPrice).toFixed(2)
        }
    })
    return countLinesPower;
}
const linesPower = linesPowerCounter();

const differencePowerInDay = () => {
    return Math.floor((powerStation()/2 + sunPanelsInDay('day')) - appartmentUseDay('day'))
}
const differencePowerInNigth = () =>{
    return Math.floor((powerStation()/2 + sunPanelsInDay('nigth')) - appartmentUseDay('nigth'))
}
const resultDayTime = {power:differencePowerInDay(), time:'day'}
const resultNigthTime = {power: differencePowerInNigth(), time: 'nigth'}


console.log(resultDayTime)
// console.log(resultNigthTime)

const analysisDifferent = (resultPositiveDayOrNigthTime) => {
    if (resultPositiveDayOrNigthTime.power > 0) {
        return sellingPower(resultPositiveDayOrNigthTime, linesPower)
    }
    if(resultPositiveDayOrNigthTime.power < 0){
        return purchasePower(resultPositiveDayOrNigthTime, linesPower)
    }
    }
    
    const purchasePower = (resultPositiveDayOrNigthTime, arrOflinesPower) => {
        let numberGiveOut = resultPositiveDayOrNigthTime.power
        console.log(numberGiveOut)
        let indexOfLines = 0;
        let sumGet = 0;
                while ((-numberGiveOut) >= arrOflinesPower[indexOfLines].power ){
                    console.log(numberGiveOut)
                     numberGiveOut += arrOflinesPower[indexOfLines].power
                     if(numberGiveOut > 0) numberGiveOut - arrOflinesPower[indexOfLines].power
                     console.log(numberGiveOut)
                         sumGet += +arrOflinesPower[indexOfLines].priceForPower
                            indexOfLines !== arrOflinesPower.length-1 ?   indexOfLines++ : indexOfLines = 0
            }
            return {power: resultPositiveDayOrNigthTime.power, time: resultPositiveDayOrNigthTime.time , sumGet, numberGiveOut}
        }

const sellingPower = (resultPositiveDayOrNigthTime, arrOflinesPower) => {
    let numberGiveOut = resultPositiveDayOrNigthTime.power
    let indexOfLines = 0;
    let sumGet = 0;
        while (numberGiveOut >= arrOflinesPower[indexOfLines].power){
             numberGiveOut -= arrOflinesPower[indexOfLines].power
                 sumGet += +arrOflinesPower[indexOfLines].priceForPower
                    indexOfLines !== arrOflinesPower.length-1 ?   indexOfLines++ : indexOfLines = 0
    }
    return {power: resultPositiveDayOrNigthTime.power, time: resultPositiveDayOrNigthTime.time , sumGet, numberGiveOut}
}
const positiveResult = analysisDifferent(resultDayTime)
console.log(analysisDifferent(resultDayTime))
console.log(analysisDifferent(resultNigthTime))
    console.log(positiveResult)

// const analysisNightDifferent = () => {

// }
function between (minNumber, maxNumber) {
    return Math.floor(Math.random() * 
    (maxNumber - minNumber) + minNumber)
}

const outputInformationAboutPowerInCity = (positiveResult) =>{
    return `Time: ${positiveResult.time} received: ${positiveResult.power} spend or earned: `
}
console.log(outputInformationAboutPowerInCity())

// console.log(between(10, 50))

console.log()
// console.log(resultDayTime)
// console.log(differencePowerInDay())
// console.log(differencePowerInNigth())
// console.log(linesPower)
// console.log(powerStation())
// console.log(sunPanelsInDay('day'))
// console.log(appartmentUseDay('day'))
// console.log(appartmentUseDay('nigth'))
// console.log(linesPower())
// console.log(analysisDayDifferent())
