const nom = 'Awa'; // Type : string
const budget = 30000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const transport = Number(transportTexte); // Type : number ; unité : FCFA
const alimentation = Number(alimentationTexte); // Type : number ; unité : FCFA
const loisirs = Number(loisirsTexte); // Type : number ; unité : FCFA
// TODO : calculez le total, le budget restant et budgetRespected.
const total = transport + alimentation + loisirs; // Type : number ; unité : FCFA
const budgetRestant = budget - total;
const budgetRespected = budgetRestant >= 0; // Type : boolean
// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log(`Rapport de dépenses à compléter pour ${nom}.`);
console.log(`Budget initial : ${budget} FCFA`);
console.log(`Dépenses :`);
console.log(`- Transport : ${transport} FCFA`);
console.log(`- Alimentation : ${alimentation} FCFA`);
console.log(`- Loisirs : ${loisirs} FCFA`);
console.log(`Total des dépenses : ${total} FCFA`);
console.log(`Budget restant : ${budgetRestant} FCFA`);
console.log(`Budget respecté : ${budgetRespected ? 'true' : 'false'}`);
