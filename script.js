/* Hluti 1 – Stuttar spurningar
Skrifaðu svör við þessum spurningum:

Hvað gerir while-lykkja? Á meðan eitthvað á við samkvæmt skilyrðum sem sett voru fyrir þá breytist ekkert
Hvað þarf að gerast inni í while-lykkju svo hún stoppi? Ef skilyrði breytast sem sett voru með while-lykkju þá stoppar hún
Af hverju verður þessi lykkja óendanleg? */

let i = 0;

while (i < 5) {
  console.log(i);
  i + 1;
}

/* Hver er munurinn á: */

i + 1;
og;

i = i + 1;

/* Hvenær gæti verið hentugt að nota for í stað while? */

/* Hluti 2 – Lagfærðu kóðann
Verkefni A
Lagaðu þennan kóða svo hann prenti tölurnar 0 til 4:

let i = 0; */

while (i < 5) {
  console.log(i);
  i + 1;
}

/* Verkefni B
Lagaðu þennan kóða svo hann prenti tölurnar 1 til 5:

let i = 1;

*/

while (i <= 5) {
  console.log(i);
}
Hluti;

/* Hluti 3 – Skrifaðu eigin lykkjur
Verkefni C
Skrifaðu while-lykkju sem prentar:

0
1
2
3
4 */

/* Verkefni D
Skrifaðu for-lykkju sem prentar:

0
1
2
3 
4*/

/* Verkefni E
Skrifaðu for-lykkju sem prentar tölurnar 5 niður í 1.

niðurstaða:

5
4
3
2
1 */

/* Hluti 4 – Hugsaðu aðeins
Skoðaðu þennan kóða:

for (let i = 0; i < 5; i = i + 1) {
  console.log(i);
}
Svaraðu:

Hvar byrjar talningin?
Hvenær stoppar lykkjan?
Hvað gerist eftir hverja umferð?
Hverjar tölur birtast? */

/* Aukaverkefni
Verkefni F
Skrifaðu lykkju sem leggur saman tölurnar 1 til 5 og prentar summuna.

Vænt niðurstaða:

15 */
