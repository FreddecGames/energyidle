//---
function formatDate(value) {
    //---
    let ret = ''
    ret += value.getFullYear() + '-'
    ret += (value.getMonth() + 1) + '-'
    ret += value.getDate() + ' '
    ret += value.getHours() + ':'
    ret += value.getMinutes() + ':'
    ret += value.getSeconds()
    //---
    return ret
}
//---
function formatTime(value) {
    //---
    if (value == Infinity) return 'Infinity'
    //---
    if (value < 1) return Math.ceil(value * 1000) + ' ms'
    //---
    let h = Math.floor(value / 3600)
    if (h < 10) { h = '0' + h }
    //---
    let m = Math.floor(value / 60) % 60
    if (m < 10) { m = '0' + m }
    //---
    let s = Math.floor(value % 60)
    if (s < 10) { s = '0' + s }
    //---
    let val = h + ':' + m + ':' + s                
    return val
}
//---
function formatNumber(value, fixed=0) {
    //---
    let sign = ''
    if (value < 0) sign = '-'
    //---
    let absValue = Math.abs(value)
    //---
    let ret = '', symbol = null
    //---
    if (absValue >= 1e27) { ret = (Math.round(100 * absValue / 1e27) / 100); symbol = 'B'; }
    else if (absValue >= 1e24) { ret = (Math.round(100 * absValue / 1e24) / 100); symbol = 'Y'; }
    else if (absValue >= 1e21) { ret = (Math.round(100 * absValue / 1e21) / 100); symbol = 'Z'; }
    else if (absValue >= 1e18) { ret = (Math.round(100 * absValue / 1e18) / 100); symbol = 'E'; }
    else if (absValue >= 1e15) { ret = (Math.round(100 * absValue / 1e15) / 100); symbol = 'P'; }
    else if (absValue >= 1e12) { ret = (Math.round(100 * absValue / 1e12) / 100); symbol = 'T'; }
    else if (absValue >= 1e9) { ret = (Math.round(100 * absValue / 1e9) / 100); symbol = 'G'; }
    else if (absValue >= 1e6) { ret = (Math.round(100 * absValue / 1e6) / 100); symbol = 'M'; }
    else if (absValue >= 1e3) { ret = (Math.round(100 * absValue / 1e3) / 100); symbol = 'k'; }
    else ret = (Math.round(100 * absValue) / 100)
    //---
    if (fixed) ret = ret.toFixed(fixed)
    //---
    return sign + ret + (symbol ? ' <small class="opacity-50">' + symbol + '</small>' : '')
}
