import _ from 'lodash';

// BEGIN
export function average(...numbers) {
    return numbers.length !== 0 ? (_.sum(numbers) / numbers.length) : null;
}

// END