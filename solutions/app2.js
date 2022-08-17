const countOfWorkingDays = () => {
    let difference = (new Date('August 31') - new Date('January 1')) / 1000 / 60 / 60 / 24 / 1.4;
    return Math.round(difference);
}





export default countOfWorkingDays;
// ## 2. feladat
// - Fájl: `solutions/app2.js`
// - Függvény neve: `countOfWorkingDays`
// - Írj egy függvényt, amelynek a visszatérési értéke az adott évben 08. 31-ig 
// eltelt munkanapok (hétfő-péntek) száma!
