const getSecondsOfThisYearUntilNow = () => {
    let difference = (new Date('August 31') - new Date('January 1')) / 1000 ;
    return Math.round(difference);
}



export default getSecondsOfThisYearUntilNow;
// ## 1. feladat
// - Fájl: `solutions/app1.js`
// - Függvény neve: `getSecondsOfThisYearUntilNow`
// - Írj egy függvényt, amelynek a visszatérési értéke az adott év 01. 01-től 08. 31-ig eltelt másodperceinek a száma! 
// - _Kerekítést használj, amikor osztasz 1000-rel! (Math.round())_