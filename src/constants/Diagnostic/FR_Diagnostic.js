

export const FR_Diagnostic = [{
  id: "acné",
  titre: "Acné",
  section: "évaluation de la peau et préoccupations",
  question: "Avez-vous des boutons, des points noirs ou des points blancs ?",
  reponses: [
    "Oui, j'ai des boutons.",
    "Oui, j'ai des points noirs.",
    "Oui, j'ai des points blancs.",
    "Non, je n'ai ni boutons, ni points noirs, ni points blancs.",
    "J'ai parfois des boutons, mais pas de points noirs ni de points blancs."
  ],
  format:"1", // 1 colonne 
  type:"simple",
},
{
  id: "sensibilité_peau",
  titre: "Sensibilité de la peau",
  section: "évaluation de la peau et préoccupations",
  question: "Comment décririez-vous la Sensibilité de votre peau ?",
  reponses: [
    "Sensible",
    "Normale",
    "Mixte",
    "Grasse",
    "Je ne sais pas"
  ],
  format:"2", 
  type:"simple",
},
{
  id: "taches_pigmentaires",
  titre: "Taches pigmentaires",
  section: "évaluation de la peau et préoccupations",
  question: "Avez-vous des taches brunes ou des zones de pigmentation irrégulière ?",
  reponses: [
    "Oui, j'ai des taches brunes sur ma peau.",
    "Oui, j'ai des zones de pigmentation irrégulière.",
    "Non, je n'ai ni taches brunes ni zones de pigmentation irrégulière.",
    "J'ai quelques taches brunes, mais pas de zones de pigmentation irrégulière.",
    "J'ai des zones de pigmentation irrégulière, mais pas de taches brunes."
  ],
  format:"1",
  type:"simple",
},
{
  id: "rides_ridules",
  titre: "Rides et ridules",
  section: "évaluation de la peau et préoccupations",
  question: "Avez-vous des rides ou des ridules visibles ?",
  reponses: [
    "Oui, j'ai des rides visibles.",
    "Oui, j'ai des ridules visibles.",
    "Non, je n'ai ni rides ni ridules visibles."
  ],
  format:"1",
  type:"simple",
},
{
  id: "eczéma",
  titre: "Eczéma",
  section: "évaluation de la peau et préoccupations",
  question: "Avez-vous des plaques rouges et squameuses qui démangent ?",
  reponses: [
    "Oui, j'ai des plaques rouges et qui démangent.",
    "Non, je n'ai pas de plaques rouges et qui démangent.",
    "Oui, j'ai eu de l'eczéma, mais ça va mieux maintenant.",
    "Non, je n'ai jamais eu d'eczéma."
  ],
  format:"1",
  type:"simple",
},
{
  id: "rosacée",
  titre: "Rosacée",
  section: "évaluation de la peau et préoccupations",
  question: "Avez-vous des rougeurs persistantes sur le visage, des vaisseaux dilatés ou des papules ?",
  reponses: [
    "Toujours",
    "Souvent",
    "Parfois",
    "Rarement",
    "Jamais"
  ],
  format:"2",
  type:"simple",
},
{
  id: "rides_prononcées",
  titre: "Rides prononcées",      
  section: "vieillissement cutané",
  question: "Remarquez-vous des rides et ridules prononcées ?",
  reponses: [
    "Oui, j'ai des rides prononcées.",
    "Oui, j'ai des ridules prononcées.",
    "Oui, j'ai à la fois des rides et des ridules prononcées.",
    "Non, je ne remarque pas de rides ni de ridules prononcées.",
    "J'ai quelques rides et ridules, mais elles ne sont pas très prononcées."
  ],
  format:"1",
  type:"simple",
},
{
  id: "élasticité",
  titre: "Perte d'élasticité",
  section: "vieillissement cutané",
  question: "Votre peau a-t-elle perdu de son élasticité ?",
  reponses: [
    "Oui, ma peau a perdu de son élasticité.",
    "Non, ma peau conserve son élasticité.",
    "Je ne suis pas sûr(e) si ma peau a perdu de son élasticité.",
    "Ma peau semble avoir légèrement perdu en élasticité.",
    "Je ne constate aucun changement dans l'élasticité de ma peau."
  ],
  format:"1",
  type:"simple",
},
{
  id: "réaction_produits",
  titre: "Réaction aux produits",
  section: "Sensibilité",
  question: "Votre peau réagit-elle facilement aux produits ou aux agressions extérieures ?",
  reponses: [
    "Toujours",
    "Souvent",
    "Parfois",
    "Rarement",
    "Jamais"
  ],
  format:"2",
  type:"simple",
},
{
  id: "rougeurs_picotements",
  titre: "Rougeurs et picotements",
  section: "Sensibilité",
  question: "Ressentez-vous des rougeurs, des picotements ou des démangeaisons ?",
  reponses: [
    "Toujours",
    "Souvent",
    "Parfois",
    "Rarement",
    "Jamais"
  ],
  format:"2",
  type:"simple",
},
{
  id: "antécédents_allergiques",
  titre: "Antécédents allergiques",
  section: "Sensibilité",
  question: "Avez-vous des antécédents d'allergies ou d'eczéma ?",
  reponses: [
    "Oui, j'ai des antécédents d'allergies.",
    "Oui, j'ai des antécédents d'eczéma.",
    "Non, je n'ai pas d'antécédents d'allergies ni d'eczéma."
  ],
  format:"1",
  type:"simple",
},
{
  id: "routine_nettoyage",
  titre: "Routine de nettoyage",
  section: "Nettoyage",
  question: "Quelle est votre routine de nettoyage actuelle ?",
  reponses: [
    "Je nettoie mon visage deux fois par jour, matin et soir",
    "J'utilise un nettoyant doux adapté à mon type de peau",
    "Je mouille uniquement mon visage",
    "Je rince abondamment à l'eau tiède",
    "Je sèche ma peau en tapotant avec une serviette propre"
  ],
  format:"1",
  type:"simple",
},
{
  id: "utilisation_démaquillant",
  titre: "Utilisation du démaquillant",
  section: "Nettoyage",
  question: "Utilisez-vous un démaquillant ?",
  reponses: [
    "Toujours",
    "Souvent",
    "Parfois",
    "Rarement",
    "Jamais"
  ],
  format:"2",
  type:"simple",
},
{
  id: "problèmes_nettoyage",
  titre: "Problèmes liés au nettoyage",
  section: "Nettoyage",
  question: "Avez-vous des problèmes de peau liés au nettoyage, comme des rougeurs ou des sensations de tiraillement ?",
  reponses: [
    "Parfois, j'ai des rougeurs après le nettoyage",
    "Parfois, j'ai des sensations de tiraillement après le nettoyage",
    "Ces problèmes surviennent surtout si j'utilise un nettoyant trop agressif",
    "Je choisis des produits doux et adaptés à ma peau pour éviter ces problèmes"
  ],
  format:"1",
  type:"simple",
},
{

  id: "Exfoliation_fréquence",
  titre: "Fréquence d'exfoliation",
  section: "Exfoliation",
  question: "Exfoliez-vous votre peau ?",
  reponses: [
    "Toujours",
    "Souvent",
    "Parfois",
    "Rarement",
    "Jamais"
  ],
  format:"2",
  type:"simple",
},
{
  id: "fréquence_exfoliation",
  titre: "Quelle fréquence d'exfoliation vous convient ?",
  section: "Exfoliation",
  question: "À quelle fréquence exfoliez-vous votre peau ?",
  reponses: [
    "J'exfolie ma peau une fois par semaine",
    "J'exfolie ma peau deux fois par semaine",
    "J'exfolie ma peau moins souvent, une fois toutes les deux semaines ou moins"
  ],
  format:"1",
  type:"simple",
},
{
  id: "problèmes_exfoliation",
  titre: "Problèmes liés à l'exfoliation",
  section: "Exfoliation",
  question: "Avez-vous des problèmes de peau liés à l'exfoliation, comme des irritations ou des desquamations ?",
  reponses: [
    "Oui, j'ai parfois des irritations après l'exfoliation",
    "Oui, j'ai parfois des desquamations après l'exfoliation",
    "Non, je n'ai pas de problèmes de peau liés à l'exfoliation"
  ],
  format:"1",
  type:"simple",
},
{
  id: "type_hydratant",
  titre: "Type d'hydratant",
  section: "Hydratation",
  question: "Quel type d'hydratant utilisez-vous ?",
  reponses: [
    "J'utilise un hydratant en crème",
    "J'utilise un hydratant en gel",
    "J'utilise un hydratant liquide ou sérum"
  ],
  format:"1",
  type:"multi",
},
{
  id: "efficacité_hydratant",
  titre: "Efficacité de l'hydratant",
  section: "Hydratation",
  question: "Votre hydratant actuel répond-il aux besoins de votre peau ?",
  reponses: [
    "Oui, mon hydratant actuel répond parfaitement aux besoins de ma peau.",
    "Oui, dans l'ensemble, mon hydratant actuel répond à mes besoins, mais il pourrait être amélioré.",
    "Non, mon hydratant actuel ne répond pas entièrement aux besoins de ma peau.",
    "Je ne suis pas sûr(e) si mon hydratant actuel répond aux besoins de ma peau.",
    "Mon hydratant actuel semble bien fonctionner pour l'instant, mais je suis ouvert(e) à essayer de nouveaux produits pour voir s'ils conviennent mieux à ma peau."
  ],
  format:"1",
  type:"simple",
},
{
  id: "problèmes_hydratation",
  titre: "Problèmes de peau liés à l'hydratation",
  section: "Hydratation",
  question: "Avez-vous des problèmes de peau liés à l'hydratation, comme une sensation de sécheresse ou de déshydratation ?",
  reponses: [
    "Oui, j'ai parfois une sensation de sécheresse avec mon hydratant actuel.",
    "Oui, j'ai parfois une sensation de déshydratation avec mon hydratant actuel.",
    "Non, je n'ai pas de problèmes de peau liés à l'hydratation."
  ],
  format:"1",
  type:"simple",
},
{
  id: "application_protection_solaire",
  titre: "Application de protection solaire",
  section: "Protection solaire",
  question: "Appliquez-vous une protection solaire quotidiennement ?",
  reponses: [
    "Toujours",
    "Souvent",
    "Parfois",
    "Rarement",
    "Jamais"
  ],
  format:"2",
  type:"simple",
},
{
  id: "indice SPF",
  titre: "Indice de protection solaire",
  section: "Protection solaire",
  question: "Quel est votre indice de protection solaire (SPF) préféré ?",
  reponses: [
    "Mon SPF préféré est SPF 30",
    "Mon SPF préféré est SPF 50+",
    "Je n'ai pas de préférence spécifique en matière d'indice de protection solaire"
  ],
  format:"1",
  type:"simple",
},
{
  id: "problèmes_soleil",
  titre: "Problèmes de peau liés au soleil",
  section: "Protection solaire",
  question: "Avez-vous des problèmes de peau liés au soleil, comme des coups de soleil ou des taches pigmentaires ?",
  reponses: [
    "Oui, j'ai des problèmes de peau liés au soleil, tels que des coups de soleil ou des taches pigmentaires.",
    "Non, je n'ai pas de problèmes de peau liés au soleil.",
    "J'ai eu des coups de soleil par le passé, mais je prends désormais des mesures pour protéger ma peau.",
    "Je n'ai pas de taches pigmentaires, mais j'ai déjà eu des coups de soleil.",
    "J'ai quelques taches pigmentaires, mais je n'ai pas eu de coups de soleil récemment."
  ],
  format:"1",
  type:"simple",
},
{
  id: "port_maquillage",
  titre: "Port de maquillage",
  section: "Maquillage",
  question: "Portez-vous du maquillage ?",
  reponses: [
    "Toujours",
    "Souvent",
    "Parfois",
    "Rarement",
    "Jamais"
  ],
  format:"2",
  type:"simple",
},
{
  id: "type_maquillage",
  titre: "Type de maquillage",
  section: "Maquillage",
  question: "Quel type de maquillage utilisez-vous ?",
  reponses: [
    "J'utilise du maquillage liquide (fond de teint, correcteur, etc)",
    "J'utilise du maquillage en poudre (fond de teint, poudre libre, etc)",
    "J'utilise du maquillage en crème (rouge à lèvres, blush, etc)"
  ],
  format:"1",
  type:"simple",
},
{
  id: "problèmes_maquillage",
  titre: "Problèmes liés au maquillage",
  section: "Maquillage",
  question: "Avez-vous des problèmes de peau liés au maquillage, comme des allergies ou des pores obstrués ?",
  reponses: [
    "Oui, j'ai parfois des allergies liées à certains types de maquillage.",
    "Oui, j'ai parfois des pores obstrués après avoir utilisé du maquillage.",
    "Non, je n'ai pas de problèmes de peau liés au maquillage."
  ],
  format:"1",
  type:"simple",
},
{
  id: "habitudes_vie",
  titre: "Habitudes de vie",
  section: "Mode de vie",
  question: "Avez-vous des habitudes de vie particulières qui pourraient affecter la santé de votre peau ?",
  reponses: [
    "Oui, je fume régulièrement.",
    "Oui, je bois souvent de l'alcool.",
    "Oui, je mange beaucoup d'aliments gras et sucrés.",
    "Oui, je suis souvent exposé(e) à la pollution.",
    "Non, j'ai des habitudes de vie saines."
  ],
  format:"1",
  type:"simple",
},
{
  id: "end",
  titre: "",
  section: "",
  question:"Pour garder une trace de votre diagnostic de peau,veuillez indiquer une adresse e-mail :",
  reponses:[
  ],
  format:"1",
  type:"simple"
}
]
  