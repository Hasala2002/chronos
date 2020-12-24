const monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const weekDaysLong = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const weekDaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

var chronos = {
 format : function(options){
    let formatData = options.split('-')
    var date = new Date()
    let chronos = ''
    formatData.forEach(section =>{
       if (section.includes(':')){
         let chronosTime = []
         let timeString = ''
         let formatTime = section.split(':')
         formatTime.forEach(timeSec =>{
             switch(timeSec){
                 case 'hh':
                     chronosTime.push(date.getHours())
                     break;
                 case 'mm':
                     chronosTime.push(date.getMinutes())
                     break;
                 case 'ss':
                     chronosTime.push(date.getSeconds())
                     break; 
                 default:
             }
         })
          for(i=0;i<chronosTime.length;i++){
            if(i==(chronosTime.length-1)){
              timeString += `${chronosTime[i]} `
            }else{   
              timeString += `${chronosTime[i]}:`
            }
          }
          chronos += timeString
       }

        switch(section) {
            case 'yyyy':
              chronos += date.getFullYear() + ' '
              break;
            case 'yy':
              chronos += ((date.getFullYear()) % 100) + ' '
              break;
            case 'Mmm':
                chronos += monthsLong[date.getMonth()] + ' '
              break;
            case 'mmm':
                chronos += (monthsLong[date.getMonth()]).toLowerCase() + ' '
              break;
            case 'MMM':
                chronos += (monthsLong[date.getMonth()]).toUpperCase() + ' '
              break;
            case 'Www':
                chronos += weekDaysLong[date.getDay()] + ' '
              break;
            case 'www':
                chronos += (weekDaysLong[date.getDay()]).toLowerCase() + ' '
              break;
            case 'WWW':
                chronos += (weekDaysLong[date.getDay()]).toUpperCase() + ' '
              break;
            case 'dd':
                chronos += date.getDate() + ' '
              break;
            case 'ddd':
                let suff = ''
                if((date.getDate()%10)==1){
                  suff = 'st'
                }else if((date.getDate()%10)==2){
                    suff = 'nd'
                }else if((date.getDate()%10)==3){
                    suff = 'rd'
                }else{
                    suff ='th'
                }
                chronos += `${date.getDate()+suff} `
              break;
            case 'yyyy,':
              chronos += date.getFullYear() + ', '
              break;
            case 'yy,':
              chronos += ((date.getFullYear()) % 100) + ', '
              break;
            case 'Mmm,':
                chronos += monthsLong[date.getMonth()] + ', '
              break;
            case 'mmm,':
                chronos += (monthsLong[date.getMonth()]).toLowerCase() + ', '
              break;
            case 'MMM,':
                chronos += (monthsLong[date.getMonth()]).toUpperCase() + ', '
              break;
            case 'Www,':
                chronos += weekDaysLong[date.getDay()] + ', '
              break;
            case 'www,':
                chronos += (weekDaysLong[date.getDay()]).toLowerCase() + ', '
              break;
            case 'WWW,':
                chronos += (weekDaysLong[date.getDay()]).toUpperCase() + ', '
              break;
            case 'dd,':
                chronos += date.getDate() + ' '
              break;
            case 'ddd,':
                let sufF = ''
                if((date.getDate()%10)==1){
                  sufF = 'st'
                }else if((date.getDate()%10)==2){
                    sufF = 'nd'
                }else if((date.getDate()%10)==3){
                    sufF = 'rd'
                }else{
                    sufF ='th'
                }
                chronos += `${date.getDate()+sufF}, `
              break;
            default:
          }
    })
    console.log(chronos.trim())
 }
}

module.export.chronos = chronos