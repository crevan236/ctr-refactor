import ctr from './ctr';

const values = [8, 7, 6, 5, 4, 3.5, 3, 2.5, 2];
const results = {
    8: '1.40',
    7: '1.35',
    6: '1.30',
    5: '1.20',
    4: '1.15',
    3.5: '1.10',
    3: '1.05',
    2.5: '1.02',
    2: '1',
};

for (let n of values) {
    const result = ctr(n, 1);
    if (result !== results[n]) {
        console.warn('FAIL!!! -- ', n, result);
        break;
    }
    console.warn('SUCCESS -- ', n);
}