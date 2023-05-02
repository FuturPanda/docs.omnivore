import { DefaultTheme, LocaleConfig } from "vitepress";
import * as common from "./common";
export const themeConfig: DefaultTheme.Config = {
  ...common.themeConfig,
  editLink: {
    pattern:
      "https://github.com/omnivore-app/docs.omnivore/edit/main/docs/:path",
    text: "Modifier cette page sur GitHub",
  },
  sidebar: [
    {
      text: "A propos",
      items: [
        { text: "Communauté", link: "/apropos/communaute" },
        { text: "Confidentialité", link: "/apropos/confidentialité" },
        { text: "Tarifs", link: "/apropos/tarifs" },
      ],
    },
    {
      text: "Utiliser Omnivore",
      items: [
        { text: "Installation", link: "/utiliser/installer" },
        { text: "Sauvegarder des liens", link: "/utiliser/sauvegarder" },
        { text: "Lire", link: "/utiliser/lire" },
        { text: "Boite Mail", link: "/utiliser/mail" },
        { text: "Organiser", link: "/utiliser/organiser" },
        { text: "Synthèse vocale", link: "/utiliser/vocal" },
        { text: "Recherche", link: "/utiliser/recherche" },
        {
          text: "Recherches Enregistrées",
          link: "/utiliser/recherches-enregistrees",
        },
        { text: "Règles", link: "/utiliser/regles" },
        { text: "Importer des données", link: "/utiliser/importer" },
        { text: "Raccourcis clavier", link: "/utiliser/raccourcis" },
        {
          text: "Gérer son compte",
          link: "/utiliser/gerer-compte",
        },
        { text: "Aide", link: "/utiliser/aide" },
      ],
    },
    {
      text: "Intégrations avec d'autres Apps",
      items: [
        { text: "Logseq", link: "/integrations/logseq" },
        { text: "Obsidian", link: "/integrations/obsidian" },
        { text: "API", link: "/integrations/api" },
        { text: "Webhooks", link: "/integrations/webhooks" },
      ],
    },
    // Comment out for now
    // {
    //   text: 'Use Cases',
    //   items: [
    //     { text: 'Knowledge Workers', link: '/usecases/knowledge-workers' },
    //     { text: 'Students', link: '/usecases/students' },
    //     { text: 'Lifelong Learners', link: '/usecases/lifelong-learners' },
    //   ]
    // },
    {
      text: "Développement",
      items: [
        { text: "Contribuer", link: "/developpement/contribuer" },
        { text: "Environnement Local", link: "/developpement/env-local" },
      ],
    },
    {
      text: "Auto-hébergement",
      items: [
        {
          text: "Auto-hébergement",
          link: "/auto-hebergement/auto-hebergement",
        },
      ],
    },
  ],
};
export const title = "Documentation Omnivore";
export const description =
  "Documentation pour l'application de lecture Omnivore.";

export const fr: LocaleConfig<DefaultTheme.Config>[string] = {
  label: "French",
  lang: "fr",
  title,
  description,
  themeConfig,
};
