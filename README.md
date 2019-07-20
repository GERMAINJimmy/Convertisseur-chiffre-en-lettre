# Convertisseur-chiffre-en-lettre

Présentation de l'exercice
Ce TP sera consacré à un exercice bien particulier : la conversion d'un nombre en toutes lettres. Ainsi, si l'utilisateur entre le nombre « 41 », le script devra retourner ce nombre en toutes lettres : « quarante-et-un ». Ne vous inquiétez pas : vous en êtes parfaitement capables, et nous allons même vous aider un peu avant de vous donner le corrigé !

La marche à suivre
Pour mener à bien votre exercice, voici quelles sont les étapes que votre script devra suivre (vous n'êtes pas obligés de faire comme ça, mais c'est conseillé) :

L'utilisateur est invité à entrer un nombre entre 0 et 999.

Ce nombre doit être envoyé à une fonction qui se charge de le convertir en toutes lettres.

Cette même fonction doit contenir un système permettant de séparer les centaines, les dizaines et les unités. Ainsi, la fonction doit être capable de voir que dans le nombre 365 il y a trois centaines, six dizaines et cinq unités. Pour obtenir ce résultat, pensez bien à utiliser le modulo. Exemple : 365 % 10 = 5.

Une fois le nombre découpé en trois chiffres, il ne reste plus qu'à convertir ces derniers en toutes lettres.

Lorsque la fonction a fini de s'exécuter, elle renvoie le nombre en toutes lettres.

Une fois le résultat de la fonction obtenu, il est affiché à l'utilisateur.

Lorsque l'affichage du nombre en toutes lettres est terminé, on redemande un nouveau nombre à l'utilisateur.
