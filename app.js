fetch("data.json")
  .then((rep) => {
    // JavaScript reçoit une réponse de notre data.json
    return rep.json();
  })
  .then((dataBase) => {
    //Ensuite j'ai acces ici à ma data
    console.log(dataBase);
    // Ici j'ai la liste de recettes
    // Puis ci-dessous Je boucle sur le teableau de données
    dataBase.forEach((recipe) => {
      display(recipe);
    });
  });

// Rôle : Afficher les recettes
// Paramètres :Les recettes
// Return : ∅

function display(currentRecipe) {
    // ça marche
//   console.log(currentRecipe.nom);
let nom = currentRecipe.nom;
//   console.log(currentRecipe.img);
let img = currentRecipe.img;
//   console.log(currentRecipe.difficulte);
let difficulte = currentRecipe.difficulte;
//   console.log(currentRecipe.tempPreparation);
let tempPreparation = currentRecipe.tempPreparation;
//   console.log(currentRecipe.tempCuisson);
let tempCuisson = currentRecipe.tempCuisson;
//   console.log(currentRecipe.portions);
let portions = currentRecipe.portions;

let listeIngredients = ""
 currentRecipe.ingredients.forEach(aliments => {
    listeIngredients += `<li> ${aliments.quantite} ${aliments.unite} ${aliments.aliment}</li>`
 });
        //  console.log(listeIngredients);

let listeStep =""
 currentRecipe.etapes.forEach(step => {
    listeStep += `<li>${step.numeroEtape} ${step.descEtape}</li>`    
});
        // console.log(listeStep);

        let templateRecipe = document.querySelector("#recipeMaker")
        recipeMaker.innerHTML +=
        `
                <div class="BoxShdw" id="recipeMaker">
                  <!-- Overview de la recette -->
                  <h3>${nom}</h3>
                  <ul class="Flex SpcBtwn">
                    <li>Difficulté : ${difficulte}</li>
                    <li>Portions : ${portions}</li>
                    <li>Temps de préparation :${tempPreparation}</li>
                    <li>Temps de cuisson ${tempCuisson}</li>
                  </ul>
                  <!-- Div Ingredients+Etapes+image -->
                  <div class="Flex SpcBtwn">
                              <!-- Div des ingredients de la recette -->
                  <div>
                    <h4>Ingrédients</h4>
                    <ul>
                      ${listeIngredients}
                    </ul>
                  </div>
                  <!-- Div des etapes de la recette -->
                  <div>
                    <h4>Étapes</h4>
                    <ol>
                      ${listeStep}
                    </ol>
                  </div>
                  <!-- Div de l'Image de la recette -->
                  <div><img src="${img}" alt="" /></div>
                  </div>
                </div>
        `
}








