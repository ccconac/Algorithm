function solution(s) {
    return [...s].map((char, index) => {
        const equalIndex = s.slice(0, index).lastIndexOf(char);
        return equalIndex === -1 ? equalIndex : index - equalIndex;
    })
}