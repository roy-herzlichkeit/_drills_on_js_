const pen = {
    name: "Pilot V7",
    color: "Blue",
    id: "4902505442889",
    origin: "Japan"
};

const nations = ['Japan', 'Communist China', 'Vietnam', 'South Korea', 'North Korea', 'Capitalist China', 'Laos', 'Cambodia', 'Phillipines', 'Brunei', 'Indonesia', 'Malaysia', 'Singapore', 'Thailand'];

console.log(nations);
console.log(nations.map((nation) => {
    if (pen.origin !== nation)
        return nation;
}).filter((nation) => {
    return nation !== undefined;
}));
console.log([nations]);
console.log({...pen});