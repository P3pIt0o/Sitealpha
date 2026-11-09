export const SITE_URL = 'https://sitealpha.ch'

export const AUTHOR = {
  name: 'Clément Roig',
  role: 'Fondateur de Sitealpha',
  bio: "Clément Roig est le fondateur de Sitealpha, studio de création de sites web basé en Suisse romande. Il conçoit des sites rapides, bien référencés et pensés pour convertir les visiteurs en clients.",
}

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'callout'; text: string }

export type FaqItem = { q: string; a: string }

export type Article = {
  slug: string
  title: string
  seoTitle: string
  description: string
  keywords: string[]
  category: 'SEO' | 'Création de site'
  date: string
  updated: string
  readingMinutes: number
  excerpt: string
  content: Block[]
  faq: FaqItem[]
}

export const articles: Article[] = [
  {
    slug: 'referencement-ia-chatgpt-perplexity-google-pme-suisse-romande',
    title:
      'Être cité par ChatGPT, Perplexity et Google AI : le guide pour une PME romande',
    seoTitle:
      'Apparaître dans ChatGPT, Perplexity et Google AI (PME Suisse romande)',
    description:
      "Comment faire pour qu'une PME de Suisse romande soit citée par ChatGPT, Perplexity et les résumés IA de Google ? Méthode concrète, structure de contenu et erreurs à éviter.",
    keywords: [
      'référencement IA',
      'GEO',
      'ChatGPT',
      'Perplexity',
      'Google AI Overviews',
      'PME Suisse romande',
      'SEO Suisse',
    ],
    category: 'SEO',
    date: '2026-01-12',
    updated: '2026-01-12',
    readingMinutes: 8,
    excerpt:
      "Les moteurs de recherche IA changent la façon dont vos futurs clients vous trouvent. Voici comment structurer votre site pour être cité, et pas oublié.",
    content: [
      {
        type: 'p',
        text: "De plus en plus de personnes posent leurs questions directement à un assistant IA plutôt qu'à un moteur de recherche classique. Quand quelqu'un demande à ChatGPT ou Perplexity « quelle agence web à Lausanne ? » ou « comment choisir un fiduciaire à Genève ? », la réponse cite quelques sources. Être l'une de ces sources est le nouvel enjeu de visibilité pour une PME.",
      },
      {
        type: 'p',
        text: "On appelle souvent cette discipline le GEO (Generative Engine Optimization). Elle ne remplace pas le référencement classique : elle le prolonge. Les moteurs IA s'appuient largement sur les mêmes signaux que Google, plus quelques spécificités. Voici ce qui compte vraiment.",
      },
      { type: 'h2', text: "Comment un moteur IA choisit ce qu'il cite" },
      {
        type: 'p',
        text: "Un assistant IA génère sa réponse à partir de pages qu'il juge fiables et pertinentes. Pour être retenu, votre contenu doit être facile à lire pour une machine, répondre précisément à une question, et inspirer confiance. Trois piliers reviennent systématiquement.",
      },
      {
        type: 'ul',
        items: [
          "La clarté : une réponse directe, en haut de page, avant les détails.",
          "La structure : des titres explicites, des listes, des questions-réponses.",
          "La crédibilité : un auteur identifié, des informations vérifiables, une adresse réelle.",
        ],
      },
      { type: 'h2', text: 'Répondre à la question avant de la broder' },
      {
        type: 'p',
        text: "Les IA aiment les réponses qui vont droit au but. Si votre page s'intitule « Combien coûte un site vitrine ? », la première phrase doit contenir une vraie réponse, quitte à la nuancer ensuite. Cette technique — la réponse en tête — augmente vos chances d'être extrait et cité.",
      },
      { type: 'h3', text: 'Un exemple concret' },
      {
        type: 'p',
        text: "Plutôt que d'ouvrir par « Le prix d'un site dépend de nombreux facteurs… », écrivez « Un site vitrine se situe généralement entre quelques centaines et quelques milliers de francs selon le nombre de pages et le sur-mesure. Voici les facteurs qui font varier ce montant. » La nuance vient après la réponse, pas à la place.",
      },
      { type: 'h2', text: "Structurer le contenu pour l'extraction" },
      {
        type: 'p',
        text: "Un moteur IA découpe vos pages en passages. Plus vos passages sont autonomes et bien titrés, plus ils sont réutilisables. Quelques réflexes utiles :",
      },
      {
        type: 'ol',
        items: [
          "Un titre = une idée. Évitez les titres vagues comme « Nos atouts ».",
          "Ajoutez une section FAQ qui reprend les vraies questions de vos clients.",
          "Utilisez des listes pour les étapes, critères et comparaisons.",
          "Donnez des informations locales précises : ville, canton, zone desservie.",
        ],
      },
      { type: 'h2', text: 'Les données structurées, votre carte de visite machine' },
      {
        type: 'p',
        text: "Les balises de données structurées (schema.org) traduisent votre contenu dans un langage que les machines comprennent sans ambiguïté : qui est l'auteur, de quel type de page il s'agit, quelles questions y sont traitées. C'est un signal de sérieux, et cela facilite l'affichage enrichi dans les résultats.",
      },
      {
        type: 'callout',
        text: "Bonne nouvelle : chaque article de ce blog intègre déjà ces données structurées (auteur, article, FAQ). C'est exactement le type de mise en œuvre que nous appliquons pour nos projets.",
      },
      { type: 'h2', text: 'Soigner la crédibilité (E-E-A-T)' },
      {
        type: 'p',
        text: "Google et les IA valorisent l'expérience, l'expertise, l'autorité et la fiabilité. Concrètement : signez vos contenus avec un nom réel, expliquez qui vous êtes, affichez vos coordonnées, et restez honnête. Un contenu qui promet la lune sans preuve inspire méfiance, aux lecteurs comme aux machines.",
      },
      { type: 'h2', text: 'La visibilité locale reste décisive' },
      {
        type: 'p',
        text: "Pour une PME romande, la dimension locale est un avantage. Mentionnez clairement votre zone (Lausanne, Genève, Neuchâtel, Fribourg, Valais…), gardez une fiche Google Business à jour, et cultivez des avis authentiques. Les IA recoupent ces signaux pour recommander des entreprises proches de l'utilisateur.",
      },
      { type: 'h2', text: 'En résumé' },
      {
        type: 'p',
        text: "Être cité par les moteurs IA n'a rien de magique : c'est du bon référencement, plus de la rigueur. Répondez clairement, structurez, prouvez qui vous êtes, et ancrez-vous localement. C'est précisément la méthode que nous appliquons chez Sitealpha.",
      },
    ],
    faq: [
      {
        q: 'Le référencement IA remplace-t-il le SEO classique ?',
        a: "Non. Les moteurs IA s'appuient en grande partie sur les mêmes signaux que Google. Un bon référencement classique reste la base ; le travail pour les IA vient en complément.",
      },
      {
        q: 'Combien de temps avant de voir des résultats ?',
        a: "Le référencement est un travail de fond. Les premiers effets apparaissent généralement après plusieurs semaines à quelques mois, selon la concurrence et l'état de départ du site.",
      },
      {
        q: 'Faut-il un blog pour être cité par les IA ?',
        a: "Ce n'est pas obligatoire, mais un contenu régulier et bien structuré multiplie les occasions d'être trouvé et cité sur des questions précises que se posent vos clients.",
      },
    ],
  },
  {
    slug: 'site-sur-mesure-vs-template-pme-suisse',
    title: 'Site sur mesure ou template : que choisir pour votre PME ?',
    seoTitle: 'Site sur mesure vs template : le bon choix pour une PME suisse',
    description:
      "Template économique ou site sur mesure ? Comparatif honnête des avantages, limites et coûts pour aider une PME suisse à choisir sans se tromper.",
    keywords: [
      'site sur mesure',
      'template site web',
      'création site PME',
      'site vitrine Suisse',
      'WordPress vs sur mesure',
    ],
    category: 'Création de site',
    date: '2026-01-18',
    updated: '2026-01-18',
    readingMinutes: 7,
    excerpt:
      "Le template est rapide et abordable, le sur-mesure offre liberté et performance. Voici comment trancher selon votre situation réelle.",
    content: [
      {
        type: 'p',
        text: "C'est l'une des premières questions quand on lance un projet web : partir d'un template tout prêt ou faire concevoir un site sur mesure ? Il n'y a pas de réponse unique. Le bon choix dépend de vos objectifs, de votre budget et de vos ambitions à moyen terme.",
      },
      { type: 'h2', text: "Ce qu'on appelle un template" },
      {
        type: 'p',
        text: "Un template est un modèle préconçu que l'on adapte avec ses textes, ses images et ses couleurs. On le retrouve sur des plateformes comme WordPress, Wix, Squarespace ou Shopify. C'est rapide à mettre en place et peu coûteux au départ.",
      },
      { type: 'h3', text: 'Les avantages du template' },
      {
        type: 'ul',
        items: [
          'Coût initial réduit et mise en ligne rapide.',
          'Idéal pour valider une idée ou pour un besoin simple.',
          'Peu de compétences techniques requises pour démarrer.',
        ],
      },
      { type: 'h3', text: 'Ses limites' },
      {
        type: 'ul',
        items: [
          "Personnalisation bornée : on reste dans le cadre du modèle.",
          "Performances parfois alourdies par des fonctions inutiles.",
          "Risque de ressembler à des milliers d'autres sites.",
          "Coûts d'abonnement et d'extensions qui s'accumulent avec le temps.",
        ],
      },
      { type: 'h2', text: 'Ce que le sur-mesure apporte' },
      {
        type: 'p',
        text: "Un site sur mesure est conçu spécifiquement pour votre activité : structure, design et fonctionnalités sont pensés autour de vos objectifs. C'est plus exigeant à produire, mais le résultat vous appartient vraiment.",
      },
      {
        type: 'ul',
        items: [
          "Identité unique, alignée sur votre image de marque.",
          "Performances optimisées, donc meilleure expérience et meilleur SEO.",
          "Évolutivité : le site grandit avec votre entreprise.",
          "Aucune fonction superflue, uniquement ce dont vous avez besoin.",
        ],
      },
      { type: 'h2', text: 'La vraie question : le coût dans la durée' },
      {
        type: 'p',
        text: "Un template coûte moins cher au départ, c'est indéniable. Mais entre les abonnements, les extensions payantes et les limites que l'on finit par contourner, l'écart se réduit avec le temps. Le sur-mesure demande un investissement initial plus élevé, puis des coûts récurrents généralement plus maîtrisés.",
      },
      {
        type: 'callout',
        text: "Un repère simple : si votre site est central pour trouver des clients et vous différencier, le sur-mesure se rentabilise. S'il s'agit d'une présence minimale, un template bien réalisé peut suffire dans un premier temps.",
      },
      { type: 'h2', text: 'Comment décider sereinement' },
      {
        type: 'ol',
        items: [
          "Clarifiez l'objectif : vitrine simple, génération de clients, vente en ligne ?",
          "Évaluez l'importance du site dans votre stratégie commerciale.",
          "Projetez-vous à 2-3 ans : aurez-vous besoin d'évoluer ?",
          "Comparez le coût total (initial + récurrent), pas seulement le prix affiché.",
        ],
      },
      { type: 'h2', text: 'Notre position' },
      {
        type: 'p',
        text: "Chez Sitealpha, nous privilégions le sur-mesure car il offre plus de liberté, de performance et de durabilité. Mais nous préférons un template honnête à un sur-mesure surdimensionné pour un besoin qui ne le justifie pas. L'important est que la solution serve votre objectif, pas l'inverse.",
      },
    ],
    faq: [
      {
        q: 'Un template peut-il être bien référencé ?',
        a: "Oui, à condition d'être allégé et bien configuré. Mais un site sur mesure offre plus de marge pour optimiser la performance et la structure, deux facteurs clés du référencement.",
      },
      {
        q: 'Peut-on commencer avec un template puis passer au sur-mesure ?',
        a: "C'est une approche fréquente et raisonnable. On valide le besoin avec une solution simple, puis on investit dans un site sur mesure quand l'activité le justifie.",
      },
      {
        q: 'Le sur-mesure est-il réservé aux grandes entreprises ?',
        a: "Non. De nombreuses petites structures optent pour le sur-mesure lorsque leur site joue un rôle commercial important. Le périmètre s'adapte au budget.",
      },
    ],
  },
  {
    slug: 'seo-local-top-3-google-maps-suisse-romande',
    title: 'SEO local : viser le top 3 de Google Maps en Suisse romande',
    seoTitle: 'Top 3 Google Maps en Suisse romande : guide SEO local',
    description:
      "Comment remonter dans le pack local de Google Maps en Suisse romande : fiche Google Business, avis, cohérence des informations et contenu local.",
    keywords: [
      'SEO local',
      'Google Maps',
      'fiche Google Business',
      'référencement local Suisse',
      'pack local',
    ],
    category: 'SEO',
    date: '2026-01-24',
    updated: '2026-01-24',
    readingMinutes: 8,
    excerpt:
      "Apparaître dans les trois premiers résultats de la carte Google, c'est capter les clients qui cherchent près de chez vous. Voici les leviers qui comptent.",
    content: [
      {
        type: 'p',
        text: "Quand quelqu'un cherche « coiffeur Lausanne » ou « garage Sion », Google affiche une carte avec trois établissements en tête : le fameux pack local. Y figurer, c'est capter une intention d'achat forte et locale. Voici comment y travailler méthodiquement.",
      },
      { type: 'h2', text: 'La fiche Google Business, votre fondation' },
      {
        type: 'p',
        text: "Le SEO local commence par une fiche Google Business complète et à jour. C'est la source principale des informations affichées sur Maps.",
      },
      {
        type: 'ul',
        items: [
          "Renseignez précisément le nom, l'adresse et le numéro de téléphone.",
          "Choisissez la bonne catégorie principale et des catégories secondaires pertinentes.",
          "Ajoutez horaires, photos réelles, description et services.",
          "Maintenez la fiche vivante : publications, nouveautés, réponses aux avis.",
        ],
      },
      { type: 'h2', text: 'La cohérence des informations (NAP)' },
      {
        type: 'p',
        text: "NAP signifie Name, Address, Phone. Ces informations doivent être identiques partout où votre entreprise apparaît : site web, annuaires, réseaux sociaux. Une incohérence (une ancienne adresse, un numéro qui varie) brouille les signaux et pénalise votre visibilité locale.",
      },
      { type: 'h2', text: 'Les avis clients, un signal de confiance' },
      {
        type: 'p',
        text: "Les avis pèsent lourd dans le classement local et dans la décision des clients. L'objectif n'est pas d'en avoir des centaines d'un coup, mais d'en recevoir régulièrement et d'y répondre.",
      },
      {
        type: 'ol',
        items: [
          "Demandez un avis au bon moment, juste après une prestation réussie.",
          "Facilitez la démarche avec un lien direct vers votre fiche.",
          "Répondez à tous les avis, positifs comme négatifs, avec professionnalisme.",
        ],
      },
      {
        type: 'callout',
        text: "N'achetez jamais de faux avis. C'est contraire aux règles, facilement repérable, et cela peut nuire durablement à votre réputation comme à votre référencement.",
      },
      { type: 'h2', text: 'Un site web qui soutient le local' },
      {
        type: 'p',
        text: "Votre site renforce votre présence locale. Quelques bonnes pratiques : mentionner clairement votre ville et votre zone d'intervention, créer des pages dédiées si vous couvrez plusieurs localités, et intégrer vos coordonnées ainsi qu'une carte. Un site rapide et lisible sur mobile aide aussi, car une grande partie des recherches locales se fait sur téléphone.",
      },
      { type: 'h2', text: 'Le contenu local qui fait la différence' },
      {
        type: 'p',
        text: "Publier du contenu ancré dans votre région (guides, actualités, questions fréquentes de vos clients locaux) renforce votre pertinence géographique. C'est un travail de fond qui, cumulé aux avis et à une fiche soignée, améliore progressivement votre position.",
      },
      { type: 'h2', text: 'À retenir' },
      {
        type: 'p',
        text: "Le top 3 local se construit : fiche Google Business impeccable, informations cohérentes partout, avis réguliers et sincères, site rapide et localisé. Aucune astuce ne remplace cette rigueur, mais elle paie durablement.",
      },
    ],
    faq: [
      {
        q: 'Combien de temps pour apparaître dans le pack local ?',
        a: "Cela varie selon la concurrence de votre ville et de votre secteur. Comptez généralement plusieurs semaines à quelques mois de travail régulier avant de voir une progression stable.",
      },
      {
        q: 'Les avis négatifs font-ils chuter mon classement ?',
        a: "Quelques avis négatifs, bien gérés, ne sont pas dramatiques : une réponse professionnelle rassure. C'est surtout la tendance globale et la régularité des avis qui comptent.",
      },
      {
        q: "Faut-il une adresse physique pour le SEO local ?",
        a: "Une adresse réelle aide beaucoup. Certaines activités sans local peuvent définir une zone de service dans Google Business, mais la présence d'une adresse vérifiable reste un atout.",
      },
    ],
  },
  {
    slug: 'site-web-ne-genere-aucun-client-pourquoi',
    title: "Votre site ne génère aucun client : les causes et les solutions",
    seoTitle: "Mon site web ne rapporte aucun client : pourquoi et comment corriger",
    description:
      "Un beau site mais zéro contact ? Les raisons les plus fréquentes pour lesquelles un site ne génère pas de clients, et comment y remédier concrètement.",
    keywords: [
      'site sans client',
      'conversion site web',
      'site vitrine inefficace',
      'générer des clients',
      'appel à action',
    ],
    category: 'Création de site',
    date: '2026-02-02',
    updated: '2026-02-02',
    readingMinutes: 7,
    excerpt:
      "Un site peut être esthétique et rester silencieux. Souvent, quelques causes bien identifiées expliquent l'absence de contacts. Passons-les en revue.",
    content: [
      {
        type: 'p',
        text: "Vous avez un site, il est en ligne, mais le téléphone ne sonne pas et la boîte mail reste vide. C'est une frustration courante. La bonne nouvelle : les causes sont souvent identifiables et corrigeables. Voici les plus fréquentes.",
      },
      { type: 'h2', text: "1. Personne ne trouve le site" },
      {
        type: 'p',
        text: "Un site invisible ne peut pas générer de clients. Si vous n'apparaissez pas dans les recherches pour vos services et votre région, le trafic reste marginal. C'est le premier point à vérifier : votre site est-il correctement référencé et indexé ?",
      },
      { type: 'h2', text: "2. Le message n'est pas clair" },
      {
        type: 'p',
        text: "En quelques secondes, un visiteur doit comprendre ce que vous proposez, à qui, et pourquoi vous. Si votre page d'accueil parle de tout sauf du problème que vous résolvez, le visiteur repart. Un message clair et centré sur le client vaut mieux qu'un discours centré sur l'entreprise.",
      },
      { type: 'h2', text: "3. Aucun appel à l'action évident" },
      {
        type: 'p',
        text: "Un site doit guider le visiteur vers une action : appeler, écrire, demander un devis, prendre rendez-vous. Sans bouton clair et répété aux bons endroits, même un visiteur intéressé ne sait pas quoi faire.",
      },
      {
        type: 'ul',
        items: [
          "Un appel à l'action visible dès le premier écran.",
          "Un moyen de contact simple et rapide.",
          "Des boutons répétés au fil des sections clés.",
        ],
      },
      { type: 'h2', text: "4. Le site est lent ou inconfortable sur mobile" },
      {
        type: 'p',
        text: "La majorité des visites se font sur téléphone. Un site lent, difficile à lire ou dont les boutons sont trop petits fait fuir. La vitesse et l'expérience mobile ne sont pas des détails : ce sont des conditions de base pour convertir.",
      },
      { type: 'h2', text: "5. Le site n'inspire pas confiance" },
      {
        type: 'p',
        text: "Un visiteur qui doute ne contacte pas. Des éléments de réassurance aident à lever les freins.",
      },
      {
        type: 'ul',
        items: [
          "Des coordonnées réelles et faciles à trouver.",
          "Des exemples de réalisations ou de projets concrets.",
          "Un design soigné et cohérent, sans fautes ni liens cassés.",
        ],
      },
      {
        type: 'callout',
        text: "Un site qui convertit n'est pas forcément le plus spectaculaire : c'est celui qui est clair, rapide, rassurant et qui dit au visiteur exactement quoi faire ensuite.",
      },
      { type: 'h2', text: 'Par où commencer' },
      {
        type: 'ol',
        items: [
          "Vérifiez votre visibilité : apparaissez-vous sur vos services et votre ville ?",
          "Relisez votre page d'accueil du point de vue d'un client, pas du vôtre.",
          "Ajoutez ou clarifiez vos appels à l'action.",
          "Testez la vitesse et le confort sur votre propre téléphone.",
          "Ajoutez des preuves concrètes de votre sérieux.",
        ],
      },
      { type: 'h2', text: 'En conclusion' },
      {
        type: 'p',
        text: "Un site qui ne rapporte rien n'est pas une fatalité. En général, il s'agit de visibilité, de clarté du message, d'appels à l'action et de confiance. Corrigez ces points et votre site recommence à travailler pour vous.",
      },
    ],
    faq: [
      {
        q: "Faut-il refaire tout le site s'il ne convertit pas ?",
        a: "Pas toujours. Souvent, des ajustements ciblés (message, appels à l'action, vitesse, réassurance) suffisent à améliorer nettement les résultats avant d'envisager une refonte complète.",
      },
      {
        q: 'Combien de visiteurs faut-il pour obtenir des clients ?',
        a: "Il n'y a pas de chiffre universel : cela dépend de votre secteur et de la qualité du trafic. Un trafic ciblé et un site clair convertissent mieux qu'un gros volume mal qualifié.",
      },
      {
        q: 'Les réseaux sociaux peuvent-ils remplacer le site ?',
        a: "Ils sont complémentaires. Les réseaux attirent l'attention, mais le site reste l'endroit que vous contrôlez, où l'on vous trouve et où la décision de contact se prend.",
      },
    ],
  },
  {
    slug: 'prix-site-web-suisse-romande',
    title: "Combien coûte un site web en Suisse romande ? (fourchettes réelles)",
    seoTitle: 'Prix d’un site web en Suisse romande : fourchettes et facteurs',
    description:
      "Quel budget prévoir pour un site web en Suisse romande ? Fourchettes indicatives par type de site et facteurs qui font varier le prix, expliqués simplement.",
    keywords: [
      'prix site web Suisse',
      'coût création site',
      'tarif site vitrine',
      'budget site internet',
      'devis site web',
    ],
    category: 'Création de site',
    date: '2026-02-09',
    updated: '2026-02-09',
    readingMinutes: 8,
    excerpt:
      "Le prix d'un site dépend de son ambition. Voici des fourchettes indicatives et, surtout, les facteurs qui expliquent les écarts.",
    content: [
      {
        type: 'p',
        text: "« Combien coûte un site web ? » est une question légitime, mais la réponse honnête est : cela dépend. Un site n'a pas de prix fixe, comme une maison n'a pas de prix unique. Pour vous aider à vous repérer, voici des fourchettes indicatives et les facteurs qui les expliquent.",
      },
      {
        type: 'callout',
        text: "Important : les montants ci-dessous sont des ordres de grandeur indicatifs pour la Suisse romande, destinés à situer un budget. Ils ne constituent pas un devis. Le prix réel d'un projet dépend de ses spécificités.",
      },
      { type: 'h2', text: 'Des fourchettes pour se repérer' },
      {
        type: 'h3',
        text: 'Site vitrine simple',
      },
      {
        type: 'p',
        text: "Quelques pages pour présenter une activité, avec un formulaire de contact. C'est le format le plus courant pour une petite structure. Le budget est le plus accessible de la gamme.",
      },
      {
        type: 'h3',
        text: 'Site vitrine sur mesure',
      },
      {
        type: 'p',
        text: "Design personnalisé, contenu travaillé, optimisation du référencement et de la performance. L'investissement est plus élevé, mais le site sert réellement d'outil commercial.",
      },
      {
        type: 'h3',
        text: 'Site e-commerce',
      },
      {
        type: 'p',
        text: "Vente en ligne, catalogue, paiement, gestion des commandes. Le budget grimpe avec le nombre de produits et les fonctionnalités (livraison, comptes clients, etc.).",
      },
      {
        type: 'h3',
        text: 'Plateforme ou application web',
      },
      {
        type: 'p',
        text: "Fonctionnalités spécifiques, espaces connectés, logique métier. C'est la catégorie la plus variable, car chaque projet est unique.",
      },
      { type: 'h2', text: 'Ce qui fait varier le prix' },
      {
        type: 'p',
        text: "Plutôt que de fixer les yeux sur un chiffre, comprenez ce qui le compose. Voici les principaux leviers :",
      },
      {
        type: 'ul',
        items: [
          "Le nombre de pages et la complexité de la structure.",
          "Le niveau de personnalisation du design (template adapté vs sur-mesure).",
          "La création de contenu : textes, photos, traductions.",
          "Les fonctionnalités : réservation, paiement, espace membre, multilingue.",
          "Le référencement et l'optimisation de la performance.",
          "La maintenance et l'accompagnement après la mise en ligne.",
        ],
      },
      { type: 'h2', text: 'Les coûts récurrents à ne pas oublier' },
      {
        type: 'p',
        text: "Au-delà de la création, un site vit dans le temps. Prévoyez le nom de domaine, l'hébergement, et éventuellement la maintenance ou des évolutions. Ces coûts sont généralement modestes comparés à la création, mais ils existent et méritent d'être anticipés.",
      },
      { type: 'h2', text: "Comment obtenir un budget fiable" },
      {
        type: 'ol',
        items: [
          "Définissez votre objectif principal avant de parler budget.",
          "Listez les fonctionnalités indispensables et celles qui peuvent attendre.",
          "Demandez un devis détaillé, poste par poste.",
          "Vérifiez ce qui est inclus après la mise en ligne (maintenance, support).",
        ],
      },
      {
        type: 'callout',
        text: "Chez Sitealpha, chaque devis est établi sur mesure après un échange sur vos besoins réels. C'est la seule façon de donner un prix juste, sans fausse promesse ni surprise.",
      },
      { type: 'h2', text: 'Le vrai critère : le retour sur investissement' },
      {
        type: 'p',
        text: "Un site n'est pas qu'une dépense, c'est un outil. La bonne question n'est pas seulement « combien ça coûte ? », mais « qu'est-ce que ça me rapporte ? ». Un site qui attire et convertit des clients se rembourse ; un site pas cher qui ne sert à rien coûte finalement plus cher.",
      },
    ],
    faq: [
      {
        q: 'Pourquoi les prix varient-ils autant entre prestataires ?',
        a: "Parce que le périmètre change : design, contenu, fonctionnalités, référencement et accompagnement ne sont pas identiques d'une offre à l'autre. Comparez ce qui est réellement inclus, pas seulement le montant.",
      },
      {
        q: 'Un site pas cher est-il forcément un mauvais choix ?',
        a: "Non, s'il correspond à un besoin simple et qu'il est bien réalisé. Le problème survient quand un budget trop serré empêche le site de remplir son rôle commercial.",
      },
      {
        q: 'Faut-il payer en une fois ou par étapes ?',
        a: "Cela se discute selon le projet. Un paiement échelonné en fonction des étapes (maquette, développement, mise en ligne) est une pratique courante et rassurante pour les deux parties.",
      },
    ],
  },
  {
    slug: 'pourquoi-site-web-professionnel-essentiel-entreprise-suisse',
    title: "Pourquoi un site professionnel est essentiel pour votre entreprise",
    seoTitle: 'Pourquoi un site web professionnel est essentiel en Suisse',
    description:
      "Un site professionnel n'est pas un luxe : c'est votre vitrine, votre crédibilité et un outil qui travaille pour vous en continu. Voici pourquoi il est indispensable.",
    keywords: [
      'site web professionnel',
      'présence en ligne',
      'crédibilité entreprise',
      'visibilité PME',
      'site internet Suisse',
    ],
    category: 'Création de site',
    date: '2026-02-15',
    updated: '2026-02-15',
    readingMinutes: 6,
    excerpt:
      "Même à l'heure des réseaux sociaux, un site professionnel reste le socle de votre présence en ligne. Voici les raisons concrètes.",
    content: [
      {
        type: 'p',
        text: "Certaines entreprises hésitent encore : « ai-je vraiment besoin d'un site ? » À l'heure où l'on vérifie tout en ligne avant d'acheter ou de contacter, la réponse est presque toujours oui. Voici pourquoi un site professionnel reste incontournable.",
      },
      { type: 'h2', text: 'On vous cherche avant de vous contacter' },
      {
        type: 'p',
        text: "Avant d'appeler ou de pousser la porte, la plupart des clients cherchent des informations en ligne. Sans site, vous êtes absent de cette étape décisive, ou vous laissez d'autres (concurrents, avis, annuaires) raconter votre histoire à votre place.",
      },
      { type: 'h2', text: 'Un site inspire confiance' },
      {
        type: 'p',
        text: "Un site soigné agit comme une preuve de sérieux. Il rassure sur votre existence, votre professionnalisme et votre légitimité. À l'inverse, une absence de site ou un site négligé sème le doute.",
      },
      { type: 'h2', text: 'Vous contrôlez votre image' },
      {
        type: 'p',
        text: "Sur les réseaux sociaux, vous jouez selon les règles de la plateforme. Sur votre site, vous décidez de tout : le message, le design, le parcours. C'est votre territoire, celui que personne ne peut fermer ou modifier du jour au lendemain.",
      },
      {
        type: 'ul',
        items: [
          "Vous maîtrisez votre message et votre présentation.",
          "Vous n'êtes pas dépendant des algorithmes d'une plateforme.",
          "Vous construisez un actif durable qui vous appartient.",
        ],
      },
      { type: 'h2', text: 'Un outil qui travaille en continu' },
      {
        type: 'p',
        text: "Un site est disponible jour et nuit. Il présente votre offre, répond aux questions fréquentes, recueille des demandes de contact et prépare la vente pendant que vous faites autre chose. Bien conçu, c'est un commercial qui ne dort jamais.",
      },
      { type: 'h2', text: 'Un point d’ancrage pour tout le reste' },
      {
        type: 'p',
        text: "Publicité, réseaux sociaux, fiche Google, campagnes e-mail : toutes ces actions gagnent à renvoyer vers un même endroit maîtrisé. Le site est le point de convergence de votre présence en ligne, celui qui transforme l'attention en contact.",
      },
      {
        type: 'callout',
        text: "Un site professionnel n'est pas une dépense de prestige : c'est une base sur laquelle se construit durablement votre visibilité et votre crédibilité.",
      },
      { type: 'h2', text: 'En résumé' },
      {
        type: 'p',
        text: "Un site professionnel vous rend visible au bon moment, renforce votre crédibilité, vous donne le contrôle de votre image et travaille pour vous sans interruption. Pour une entreprise qui veut durer, ce n'est plus une option.",
      },
    ],
    faq: [
      {
        q: "Une page Facebook ou Instagram ne suffit-elle pas ?",
        a: "Les réseaux sont utiles pour la visibilité, mais vous n'en êtes pas propriétaire et leurs règles changent. Le site reste l'espace que vous contrôlez et où la décision de contact se concrétise.",
      },
      {
        q: "Un petit commerce local a-t-il besoin d'un site ?",
        a: "Oui, souvent plus qu'il ne le pense : horaires, adresse, services et avis se consultent en ligne. Même un site simple, bien référencé localement, apporte des contacts concrets.",
      },
      {
        q: 'Un site vieillit-il vite ?',
        a: "Le contenu et le design évoluent, mais un site bien construit se met à jour sans être refait entièrement. L'important est de le garder vivant et à jour.",
      },
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
