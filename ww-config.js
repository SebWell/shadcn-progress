export default {
  editor: {
    label: {
      en: "shadcn Progress",
      fr: "Barre de progression shadcn"
    },
    icon: 'fas fa-tasks',
    bubble: {
      icon: 'fas fa-tasks'
    },
    deprecated: false
  },
  properties: {
    value: {
      label: {
        en: "Current value",
        fr: "Valeur actuelle"
      },
      type: "Number",
      defaultValue: 0,
      bindable: true,
      section: "data"
    },
    max: {
      label: {
        en: "Maximum value",
        fr: "Valeur maximale"
      },
      type: "Number",
      defaultValue: 100,
      bindable: true,
      section: "data"
    },
    size: {
      label: {
        en: "Size",
        fr: "Taille"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "sm", label: { en: "Small", fr: "Petit" } },
          { value: "default", label: { en: "Default", fr: "Par défaut" } },
          { value: "lg", label: { en: "Large", fr: "Grand" } }
        ]
      },
      defaultValue: "default",
      section: "appearance"
    },
    color: {
      label: {
        en: "Color",
        fr: "Couleur"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "primary", label: { en: "Primary", fr: "Primaire" } },
          { value: "secondary", label: { en: "Secondary", fr: "Secondaire" } },
          { value: "destructive", label: { en: "Destructive", fr: "Destructeur" } },
          { value: "success", label: { en: "Success", fr: "Succès" } },
          { value: "warning", label: { en: "Warning", fr: "Avertissement" } }
        ]
      },
      defaultValue: "primary",
      section: "appearance"
    },
    showLabel: {
      label: {
        en: "Show label",
        fr: "Afficher le libellé"
      },
      type: "OnOff",
      defaultValue: false,
      section: "label"
    },
    labelText: {
      label: {
        en: "Custom label text",
        fr: "Texte de libellé personnalisé"
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
      translatable: true,
      hidden: content => !content.showLabel,
      section: "label"
    },
    customClasses: {
      label: {
        en: "Custom CSS classes",
        fr: "Classes CSS personnalisées"
      },
      type: "Text",
      bindable: true,
      section: "style"
    }
  },
  sections: {
    data: {
      label: { en: "Data", fr: "Données" },
      expand: true
    },
    appearance: {
      label: { en: "Appearance", fr: "Apparence" },
      expand: true
    },
    label: {
      label: { en: "Label", fr: "Libellé" },
      expand: false
    },
    style: {
      label: { en: "Style", fr: "Style" },
      expand: false
    }
  }
}; 