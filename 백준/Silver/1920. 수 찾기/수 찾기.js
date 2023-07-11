const input = require('fs').readFileSync(0).toString().trim().split('\n');

const [N, A, M, mArr] = input.map(i => i.split(' ').map(x => Number(x)));
A.sort((a, b) => a - b);

const BinarySearch = (arr, key, left, right, mid) => {
    if (right < left) {
        return 0;
    }

    mid = Math.floor((left + right) / 2);

    if (arr[mid] === key) {
        return 1;
    } else if (arr[mid] < key) {
        return BinarySearch(arr, key, mid + 1, right);
    } else {
        return BinarySearch(arr, key, left, mid - 1);
    }
}

const result = mArr.map(i => BinarySearch(A, i, 0, N - 1, 0));

console.log(result.join('\n'));