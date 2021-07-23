# miniappjeux
telecharger le projet dans votre pc 
lancer npm install dans le dossier testtechniqueMini
lancer npm install dans le dossier TestFront
creer un fichier .env pour faire la connexion avec MongoDB (je vous enverrais une illustration comment faire )
ouvrir mongo atlas crer une base de donnees nommé TestTechnique et vous importez le  fichier json pour optenir la collection noms 
(pour importer la collection allez a la partie command line tool est vous lancez la commande sur votre CMD )
une fois vous terminiez
dans votre terminal pointez sur le dossier testtechniqueMini et lancer la commande npm run dev 
///
la partie technique 
**backend

c'est simple enffet j'ai commançé par la partie backend j'ai fait la creation de fichier server.js pour la connexion avec la base 
je creé un dossier controlleur ou vous allez trouver fichier nomCtrl.js le service getall q'il permet d'afficher la liste des noms
et puis j'ai cree un dossier router la ou il exite le fichier nomrouter qui fait l'intermédiaire entre le server.js et le nomCtr
une fois la connexion est etabli entra la base est le server.js et le service nomCtr fonctionne ( je l'ai testé avec postman) j'ai commancé la partie React

**frontend
dossier Redux sous src

il contient les actions et le  reducer qu'ils ont pour role de stocker le state et me permet de le gerer facilement dans une etape ultérieure 
et dans le dossier src  j'ai cree components et la je fait jeu.js 
donc l'idee est simple j'ai donné a chaque nom un indice n et j'ai fait affichage selon cet indice 
sous le nom afficher il ya deux botton et a chaque fois l'utilisateur click  sur un botton une fonction onClick fait appelle a une fonction  qui compare le resultat de recuper de botton cliqué par le resultat fourni par l'api genderAPI 
et voila l petit jeu se deroule 

**Quoi améliorer 

l'interface bien sur car c'est fait avec le basic 
la partie optionnel demander je pourrais le faire dans le cas ou je n'utilise pas l'API car cet api ne traite pas le cas de 'mixed'
ajouter une partie register et se connecter 

**temps passé 

vu que je suis entrain de faire un stage d'ete j'essai de faire le test pendant la nuit 
je n'avais pas bouceaup de temps durant toute la journée de coups voila . et en totlal ce test necessite pour moi environ 10 h de travail .
