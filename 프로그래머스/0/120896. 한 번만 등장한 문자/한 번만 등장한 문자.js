const solution = (s) => {
    const character = [...s].filter(c => s.match(new RegExp(c, 'g')).length === 1);
    return character.sort().join('');
}
