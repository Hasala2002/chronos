# What is Chronos?

Chronos is a light weight time and date string manipulation function.

# Installation
```
npm i chronos --save
```
Then...

```
import {chronos} from 'chronos';

chronos.format('ddd-Mmm-yyy')
```

# Customization
| Code  | Description  | Example  |
| ------------ | ------------ | ------------ |
| ***ddd*** | _Date with suffix_ | 1st |
| ***dd*** | _Date w/o suffix_ | 1 |
| ***Www*** | _Weekday with first letter capitalized_ | Monday |
| ***WWW*** | _Weekday fully capitalized_ | MONDAY |
| ***www*** | _Weekday fully simplified_ | monday |
| ***Ww*** | _Weekday with first letter capitalized_ | Monday |
| ***WW*** | _Weekday fully capitalized_ | MONDAY |
| ***ww*** | _Weekday fully simplified_ | monday |
| ***Mmm*** | _Month with first letter capitalized_ | January |
| ***MMM*** | _Month fully capitalized_ | JANUARY |
| ***mmm*** | _Month fully simplified_ | january |

# Upcoming updates
* short terms of months and week days
* usage of comma
* time string update