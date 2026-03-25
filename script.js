/* Hluti 1 – Stuttar spurningar
Skrifaðu svör við þessum spurningum:

Hvað gerir while-lykkja?*/ Á meðan eitthvað á við samkvæmt skilyrðum sem sett voru fyrir þá breytist ekkert
/*Hvað þarf að gerast inni í while-lykkju svo hún stoppi?*/ Ef skilyrði breytast sem sett voru með while-lykkju þá stoppar hún
/*Af hverju verður þessi lykkja óendanleg? */  i + 1 hérna gerir hún ekkert við úrkomuna, plúsar bara við i en skilar engu

let i = 0;

while (i < 5) {
  console.log(i);
  i + 1;
}

/* Hver er munurinn á: */ i + 1; hér er útreikningur án geymslu en i = i + 1; er útreikningur með geymslu 

i + 1;
og;

i = i + 1;

/* Hvenær gæti verið hentugt að nota for í stað while? */ Þegar þú veist nokkurn veginn hversu oft þú vilt endurtaka loopuna

for (let i = 0; i < 5; i++)

/* Hluti 2 – Lagfærðu kóðann
Verkefni A
Lagaðu þennan kóða svo hann prenti tölurnar 0 til 4:
*/

let i = 0; 

while (i < 5) {
  console.log(i);
  i++ eða i = i + 1;
}

/* Verkefni B
Lagaðu þennan kóða svo hann prenti tölurnar 1 til 5:
*/
let i = 1;


while (i <= 5) {
  console.log(i);
  i++;
}


/* Hluti 3 – Skrifaðu eigin lykkjur
Verkefni C
Skrifaðu while-lykkju sem prentar:

0
1
2
3
4 */

let i = 0; 

while (i < 5) {
  console.log(i);
  i++;
}

/* Verkefni D
Skrifaðu for-lykkju sem prentar:

0
1
2
3 
4*/

for (let i= 0; i < 5; i++)

/* Verkefni E
Skrifaðu for-lykkju sem prentar tölurnar 5 niður í 1.

niðurstaða:

5
4
3
2
1 */

for (let i = 5; i > 0; i--)

/* Hluti 4 – Hugsaðu aðeins
Skoðaðu þennan kóða:*/

for (let i = 0; i < 5; i = i + 1) {
  console.log(i);
}
Svaraðu:

/*Hvar byrjar talningin?*/ i = 0
/*Hvenær stoppar lykkjan?*/ þegar 1 verður stærra eða saman sem 5
/*Hvað gerist eftir hverja umferð?*/ i hækkar um 1
/*Hverjar tölur birtast? */0 1 2 3 4

/* Aukaverkefni
Verkefni F
Skrifaðu lykkju sem leggur saman tölurnar 1 til 5 og prentar summuna.

Vænt niðurstaða:

15 */



let sum = 0; 

for (let i = 1; i <= 5; i++) {
  sum = sum + i; 
}

console.log(sum); 