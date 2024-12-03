fetch("data.json")
  .then((rep) => {
    // JavaScript reçoit une réponse de l'api (objet js pas exploitable directement) => il faut le transformer en json
    return rep.json();
  })
  .then((data) => {
    //Ensuite j'ai acces ici à ma data
    console.log(data);
    // Ici j'ai une liste de produit
    // Je boucle sur le teableau de données,forcement, si je n'ai pas de tableau j'en ai pas besoin :
    data.forEach((prod) => {
      affiche(prod);
    });
  });