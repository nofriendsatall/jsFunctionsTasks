// BEGIN
function getChildren(users) {
    let arr = new Array();

    for (const user of users) {
        if (user.children.length !== 0) {
            user.children.forEach(element => {
                arr.push(element)
            });
        }
    }
    return arr
}

export default getChildren;

 
// END