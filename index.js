

var mil = 0
var sec = 0
var min = 0
var hr = 0
var interval
var isrunning = true
const start = () =>{
    
    if(isrunning === true) { 
     wacth()   
    interval = setInterval(wacth,10)
    }
   isrunning = false
    
}
const pause = () =>{
    clearInterval(interval)
    isrunning = true
}
const stop = () => {
    clearInterval(interval)
    document.getElementById("screen").innerText="00.00.00.00"
    sec = 0
    min = 0
    hr = 0
    isrunning = true
}
const wacth = () => {
    mil++
    if (mil === 100) {
        sec++
        mil = 0
    }
    if (sec === 60) {
        min++
        sec = 0
    }
    if (min === 60) {
        hr++
        min = 0
    }
    document.getElementById("screen").innerText=twodigits(hr)+':'+twodigits(min)+':'+twodigits(sec)+':'+twodigits(mil)
}

const twodigits = (digit) => {
    if (digit <  10) {
        return('0'+digit)
    }else {
        return(digit)
    }
}