const countResult = (value, factor) => (value * factor).toFixed(2);
const intervals = [7, 6, 5, 4, 3.5, 3, 2.5, 2];
const factors = {
    [intervals[0]]: 1.4,
    [intervals[1]]: 1.35,
    [intervals[2]]: 1.3,
    [intervals[3]]: 1.2,
    [intervals[4]]: 1.15,
    [intervals[5]]: 1.1,
    [intervals[6]]: 1.05,
    [intervals[7]]: 1.02,
};

export default function( ctr, value ) {
    for (let interval of intervals) {
        if (ctr > interval) {
            return countResult(value, factors[interval]);
        }
    }

    return String(value);
}