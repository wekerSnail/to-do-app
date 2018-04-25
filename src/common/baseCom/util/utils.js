const icons=['icon-calendar','icon-friendadd','icon-remind','icon-qrcode','icon-pic','icon-form','icon-question','icon-settings','icon-wang','icon-notification','icon-emoji','icon-favor']

const themes=['random-color1','random-color2','random-color3','random-color4','random-color5']

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const GET_THEMES= function(){
    let num=getRandomInt(0,themes.length)
    return themes[num]
}

const GET_ICONS= function(){
    let num=getRandomInt(0,icons.length)
    return icons[num]
}

export {GET_ICONS,GET_THEMES}