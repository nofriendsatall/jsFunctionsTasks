// BEGIN
function groupBy(data, property){
    return data.reduce((acc, current) => {
      const key = current[property];
      if (!acc.hasOwnProperty(key)) {
        acc[key] = [];
      }
      acc[key].push(current);
      return acc;
    }, {});
  };
  
export default groupBy;
// END