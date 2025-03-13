// BEGIN
export default function convert(...dates) {
    if (dates.length === 0) {
      return [];
    }
    return dates.map(dateArr => {
      const [year, month, day] = dateArr;
      const date = new Date(year, month, day);
      return date.toDateString();
    });
  }

// END





