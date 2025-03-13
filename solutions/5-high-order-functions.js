import _, { take } from 'lodash';

// BEGIN
function takeOldest(users,amount = 1) {
    let arr = _.sortBy(users,(user) => {return Date.parse(user.birthday)})
    
    return arr.slice(0,amount);
}

export default takeOldest;

// END