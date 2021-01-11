# What is Chronos?

Chronos is a light weight time and date string manipulation function.

# Installation
```
npm i @hasala2002/chronos --save
```
Then...

```
const chronos = require('@hasala2002/chronos');

let date = chronos.format('ddd-Mmm-yyy')

console.log(date)
```

# Date String Format
| Code  | Description  | Example  |
| ------------ | ------------ | ------------ |
| ***yyyy*** | _Full Year_ | 2020 |
| ***yy*** | _Year (Last two digits)_ | 20 |
| ***ddd*** | _Date with suffix_ | 1st |
| ***dddf*** | _Date with suffix_ | 1st of |
| ***dd*** | _Date w/o suffix_ | 1 |
| ***Www*** | _Weekday with first letter capitalized_ | Monday |
| ***WWW*** | _Weekday fully capitalized_ | MONDAY |
| ***www*** | _Weekday fully simplified_ | monday |
| ***Mmm*** | _Month with first letter capitalized_ | January |
| ***MMM*** | _Month fully capitalized_ | JANUARY |
| ***mmm*** | _Month fully simplified_ | january |
| ***Ww*** | _Weekday short  with first letter capitalized_ | Mon |
| ***WW*** | _Weekday short  fully capitalized_ | MON |
| ***ww*** | _Weekday short  fully simplified_ | mon |
| ***Mm*** | _Month short  with first letter capitalized_ | Jan |
| ***MM*** | _Month short fully capitalized_ | JAN |
| ***mm*** | _Month short fully simplified_ | jan |
| ***xxx,*** | _Any text with comma behind it_ (Doesnt work with ***dddf***) | Monday, |

**Example**
```
chronos.format('ddd-Www,-Mmm-yyyy');
//13th Thursday,  June 2002
```

# Time String Format
| Code  | Description | 
| ------------ | ------------ |
| ***hh*** | _Hours_ |
| ***mm*** | _Minutes_ |
| ***ss*** | _Seconds_ |
| ***CC*** | _Captilized 12 Hour Clock_ |
| ***cc*** | _Sinplified 12 Hour Clock_ |
| ***CC,*** | _Captilized 12 Hour Clock with comma_ |
| ***cc,*** | _Simplified 12 Hour Clock with comma_ |

**Examples**
```
chronos('hh:mm:ss');              //16:50:32
chronos('hh:mm:ss:CC');           //4:50:32 AM
chronos('hh:mm:ss:cc');           //4:50:32 am
chronos('hh:mm');                 //16:50:32
chronos('hh:mm:CC');              //4:50 AM
chronos('hh:mm:cc,');             //4:50 am,
```

# Presets
| Preset  | Format | 
| ------------ | ------------ |
| ***dPrimary*** | 13th of June 2020, Wednesday |
| ***dSecondary*** | 13th, June 2020 |
| ***tPrimary*** | 4.32 pm |
| ***tSecondary*** | 4.32.59 pm |



# Upcoming updates
* time functions and calculation