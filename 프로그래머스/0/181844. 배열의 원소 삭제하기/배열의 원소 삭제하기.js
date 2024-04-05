function solution(arr, delete_list) {
    delete_list.forEach((value, index) => {
        if (arr.includes(value)) {
            const index = arr.indexOf(value);
            arr.splice(index, 1)
        };
    })

    return arr;
}