const minNumberOfBuild = 1;

function between (minNumber, maxNumber) {
    return Math.floor(Math.random() * 
    (maxNumber - minNumber) + minNumber)
}
// Power do Station 
const powerStation = ()=>{
    const maxCountPowerStations = 6;
    const maxPowerMakeStation = 100
        const countStation = new Array(between(minNumberOfBuild, maxCountPowerStations)).fill(0)
            return countStation.reduce((power)=> power + between(1, maxPowerMakeStation), 0)
}
const countOfPowerInStationInAHalfDay = powerStation()/2

// 1 Sun panels do 1 -5 only pm
const sunPanelsInDay = (halfOfDay)=> {
    const maxCountSunPanels = 200;
        const countPanels = new Array(between(minNumberOfBuild, maxCountSunPanels)).fill(0)
            return halfOfDay === 'day' ? countPanels.reduce((power) => power + Math.floor(Math.random() * 5) , 0) : 0;
}

// numbrs of use appart
const appartmentUseDay = () => {
    const maxNumberOfHouses = 1000;
    const maxNumbersOfAppartment = 400;
        const countOfHouses = between(minNumberOfBuild, maxNumberOfHouses);
            const countOfAppartment = countOfHouses * between(minNumberOfBuild, maxNumbersOfAppartment);
                     return countOfAppartment
}

const countOfAppartments = appartmentUseDay()
console.log(countOfAppartments)
// halfOfDay === 'day' ? countOfAppartment * 0.004 : countOfAppartment * 0.001


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

// 
const differencePowerInDay = () => {
    return (countOfPowerInStationInAHalfDay + sunPanelsInDay('day') - countOfAppartments * 0.004)
}

const differencePowerInNigth = () =>{
    return (countOfPowerInStationInAHalfDay + sunPanelsInDay('nigth') - countOfAppartments * 0.001)
}

const resultDayTime = {power:differencePowerInDay(), time:'day'}
const resultNigthTime = {power: differencePowerInNigth(), time: 'nigth'}

const analysisDifferent = (resultDayOrNigthTime) => {
    if (resultDayOrNigthTime.power >= 0) {
        const positiveInformation = sellingPower(resultDayOrNigthTime, linesPower)
        return ` За ${positiveInformation.time}  місто отримало ${positiveInformation.power.toFixed(3)} мВт електроенергії
        надлишкову потужність місто продало за  ${(positiveInformation.sumGet* 1000).toFixed(2)} ₴`
    }
    if(resultDayOrNigthTime.power < 0){
        const negativeInformation = purchasePower(resultDayOrNigthTime, linesPower)
        return ` За ${negativeInformation.time}  місто отримало ${negativeInformation.power.toFixed(3)} мВт електроенергії
                 за недостачу напруги місто витратило на закупівлю  ${(negativeInformation.sumGet* 1000).toFixed(2)} ₴`
    }
}
    
const purchasePower = (resultNegativeDayOrNigthTime, arrOflinesPower) => {
        let numberGiveOut = resultNegativeDayOrNigthTime.power
        let indexOfLines = 0;
        let sumGet = 0;
                while ((-numberGiveOut) >= arrOflinesPower[indexOfLines].power ){
                     numberGiveOut += arrOflinesPower[indexOfLines].power
                     if(numberGiveOut > 0) numberGiveOut - arrOflinesPower[indexOfLines].power
                         sumGet += +arrOflinesPower[indexOfLines].priceForPower
                            indexOfLines !== arrOflinesPower.length-1 ?   indexOfLines++ : indexOfLines = 0
            }
            return {power: resultNegativeDayOrNigthTime.power, time: resultNegativeDayOrNigthTime.time , sumGet, numberGiveOut}
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




// console.log(between(10, 50))
// console.log(powerStation())
// console.log(countOfPowerInStationInAHalfDay)

// console.log(sunPanelsInDay('day'))
// console.log(sunPanelsInDay('nigth'))
// console.log(appartmentUseDay('day'))
// console.log(appartmentUseDay('nigth'))
// console.log(linesPowerCounter())
// console.log(linesPower)

// console.log(differencePowerInDay())
// console.log(differencePowerInNigth())
// console.log(resultDayTime)
// console.log(resultNigthTime)

// 
console.log(analysisDifferent(resultDayTime))
console.log(analysisDifferent(resultNigthTime))
// console.log(analysisDifferent(resultNigthTime))

// console.log(purchasePower)
// console.log(sellingPower)
// 
// console.log(positiveResult)


// console.log(sunPanelsInDay('day'))

// console.log(linesPower())
// console.log(analysisDayDifferent())




