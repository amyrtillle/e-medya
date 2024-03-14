<script setup lang="ts">
import { EmHeaderSeparator, EmInputs, EmTextContent } from '@e-medya-web/components'
import EmButton from '@e-medya-web/components/src/atoms/EmButton/EmButton.vue'

const header = {
  title: 'Demander un devis',
  desc: 'Si vous ne savez pas exactement le type de projet que vous souhaitez, le formulaire ci-dessous vous permet de répondre à des questions précises pour définir au mieux votre projet. Un entretient pour une définition exacte de votre projet sera convenu au besoin par notre équipe.',
  secondDesc: 'En cas d’incertitudes ou de question sur le formulaire, n’hésitez pas à nous contacter. Ce formulaire couvre la pluparts des questions pour un projet complet, si vous ne souhaitez pas que le projet soit entièrement couvert par notre équipe, ne remplissez que les champs que vous souhaitez que nous couvrions et mentionnez-le dans le champs “informations supplémentaires” du formulaire. Si vous souhaitez définir votre projet en contact direct avec notre équipe, contactez-nous pour convenir d’un entretien.',
}

const form = {
  title: 'Informations générales',
  subTitle: 'Aucune de vos informations ne seront utilisées à titre de revente ou de démarchage.',
  secondTitle: 'Concernant la production',
  fields: [
    {
      general: [
        {
          legal: [
            {
              id: 'surname',
              label: 'Prénom',
              img: 'account',
              type: 'text',
              required: true,
              placeholder: 'Prénom légal ou d’usage',
            },
            {
              id: 'name',
              label: 'nom',
              img: 'account',
              type: 'text',
              required: true,
              placeholder: 'Nom d’usage',
            },
            {
              id: 'company',
              label: 'Entreprise / association',
              img: 'verified',
              type: 'text',
              required: false,
              placeholder: 'E-medya (particuliers, laissez ce champ vide)',
            },
            {
              id: 'email',
              label: 'E-mail',
              img: 'send',
              type: 'email',
              required: true,
              placeholder: 'example@mail.com',
            },
            {
              id: 'phone',
              label: 'Numéro de téléphone',
              required: true,
              img: 'phone',
              type: 'tel',
              placeholder: '06 12 34 56 78',
            },
            {
              id: 'contactPreference',
              label: 'Préférence de contact',
              img: 'security',
              type: 'select',
              required: true,
              options: [
                {
                  value: 'email',
                  text: 'E-mail',
                },
                {
                  value: 'phone',
                  text: 'Téléphone',
                },

              ],
            },
          ],
          tournage: [
            {
              id: 'location',
              label: 'Lieu de tournage',
              img: 'pin',
              type: 'text',
              required: true,
              placeholder: 'Lieu désiré du tournage',
            },
            {
              id: 'multipleLocations',
              label: 'Si plusieurs lieux de tournages souhaités, merci de les préciser dans l’encart ci-dssous',
              placholder: 'Lieu 1, Lieu 2, ...',
              type: 'text',
            },
            {
              id: 'date',
              label: 'Date du tournage',
              img: 'calendar',
              type: 'date',
              required: true,
              placeholder: 'jj/mm/aaaa',
            },
            {
              id: 'multipleDates',
              label: 'Si Plusieurs dates de tournages souhaités, merci de les préciser dans l’encart ci-dessous.',
              placeholder: 'Date 1, Date 2, ...',
              type: 'text',
            },
            {
              id: 'context',
              label: 'Sitation',
              img: 'rain',
              required: true,
              type: 'select',
              options: [
                {
                  value: 'interieur',
                  text: 'Intérieur',
                },
                {
                  value: 'exterieur',
                  text: 'Extérieur',
                },
                {
                  value: 'both',
                  text: 'Les deux',
                },
              ],
            },
            {
              id: 'time',
              label: 'Horaires',
              img: 'sun',
              type: 'select',
              required: true,
              options: [
                {
                  value: 'matin',
                  text: 'Matin',
                },
                {
                  value: 'apres-midi',
                  text: 'Après-midi',
                },
                {
                  value: 'soir',
                  text: 'Soir',
                },
                {
                  value: 'nuit',
                  text: 'Nuit',
                },
              ],
            },
            {
              id: 'accreds',
              label: 'Accréditations nécessaires fournies ?',
              img: 'play',
              type: 'text',
              required: true,
              placeholder: 'Oui / Non / Nsp',
            },
            {
              id: 'accredsList',
              label: 'Exemple d’accrédiation : Usage de drone, droit à l’image, autorisation de tournage dans un espace privé, etc',
              type: 'text',
              placeholder: 'Liste des accréditations nécessaires',
            },
            {
              id: 'type',
              label: 'Type de contenu',
              required: true,
              img: 'security',
              type: 'text',
              placeholder: 'Clip / pub / interview / bestOf / autre',
            },
            {
              id: 'typeDetails',
              label: 'Si autre type, veuillez le préciser dans l’encart ci-dessous.',
              type: 'text',
              placeholder: 'Précisez ....',
            },
          ],
          subject: [
            {
              id: 'subject',
              label: 'sujet',
              img: 'search',
              required: true,
              type: 'text',
              placeholder: 'Sujet sur lequel portera votre projet',
            },
            {
              id: 'message',
              label: 'Message',
              img: 'write',
              required: true,
              type: 'textarea',
              placeholder: 'Décrivez au mieux, même de manière brève, votre projet, l’histoire que vous souhaitez raconter, comment vous souhaitez la raconter, le sujet ou produit principal, le ton de la production finale, le mode de prise de vue si vous en avez un en particulier.',
            },
          ],
        },
      ],
      production: [
        {
          general: [
            {
              id: 'targetMessage',
              label: 'Message',
              img: 'write',
              required: true,
              type: 'text',
              placeholder: 'Quel message souhaitez-vous faire passer ?',
            },
            {
              id: 'refs',
              label: 'Références',
              img: 'question',
              required: true,
              type: 'text',
              placeholder: 'Si vous avez des références ou des idées de créations similaires à ce que vous souhaitez, insérez-les ici. (ex: lien youtube)',

            },
            {
              id: 'targetPublic',
              label: 'Public cible',
              img: 'account',
              required: true,
              type: 'text',
              placeholder: 'Tranche d’âge, secteur d’activité, fin commerciales ou récréatives, etc..',

            },
            {
              id: 'targetPlatform',
              label: 'Plateforme de diffusion',
              img: 'cast',
              required: true,
              type: 'select',
              options: [
                {
                  value: 'youtube',
                  text: 'Youtube',
                },
                {
                  value: 'facebook',
                  text: 'Facebook',
                },
                {
                  value: 'instagram',
                  text: 'Instagram',
                },
                {
                  value: 'linkedin',
                  text: 'Linkedin',
                },
                {
                  value: 'tiktok',
                  text: 'Tiktok',
                },
                {
                  value: 'twitter',
                  text: 'Twitter',
                },
                {
                  value: 'website',
                  text: 'Site Web',
                },
                {
                  value: 'spotify',
                  text: 'Spotify',
                },
                {
                  value: 'autre',
                  text: 'Autre',
                },
              ],
            },
            {
              id: 'recordDuration',
              label: 'Durée du tournage',
              img: 'time',
              required: true,
              type: 'text',
              placeholder: 'Durée en heures ou en jours',
            },
            {
              id: 'deliveryDate',
              label: 'Date de livraison souhaitée',
              required: true,
              img: 'calendar',
              type: 'date',
              placeholder: 'jj/mm/aaaa',
            },
            {
              id: 'scenario',
              label: 'Avez-vous un scénario ?',
              img: 'write',
              required: true,
              type: 'select',
              options: [
                {
                  value: 'oui',
                  text: 'Oui',
                },
                {
                  value: 'non',
                  text: 'Non',
                },
              ],
            },
            {
              id: 'scenarioFile',
              label: 'Si oui, merci de le joindre ici',
              type: 'file',
              img: 'folder',
            },
            {
              id: 'voiceNeeded',
              label: 'Voix off nécessaire ?',
              img: 'voice',
              required: true,
              type: 'select',
              options: [
                {
                  value: 'oui',
                  text: 'Oui',
                },
                {
                  value: 'non',
                  text: 'Non',
                },
              ],
            },
            {
              id: 'voiceType',
              label: 'Type de voix off',
              img: 'voice',
              type: 'text',
              placeholder: 'Ton / Type de voix / Genre',
            },
            {
              id: 'voiceLanguage',
              label: 'Langue de la voix off',
              img: 'translate',
              type: 'text',
              placeholder: 'Langue(s) souhaitée(s)',
            },
            {
              id: 'subtitles',
              label: 'Sous-titres nécessaires ?',
              img: 'message',
              required: true,
              type: 'select',
              options: [
                {
                  value: 'oui',
                  text: 'Oui',
                },
                {
                  value: 'non',
                  text: 'Non',
                },
              ],
            },
            {
              id: 'subtitlesLanguage',
              label: 'Langue des sous-titres',
              img: 'translate',
              type: 'text',
              placeholder: 'Langue(s) souhaitée(s)',
            },
            {
              id: 'motionDesign',
              label: 'Motion design (animation graphique) ?',
              required: true,
              img: 'play',
              type: 'select',
              options: [
                {
                  value: 'oui',
                  text: 'Oui',
                },
                {
                  value: 'non',
                  text: 'Non',
                },
              ],
            },
            {
              id: 'motionDesignDuration',
              label: 'Total d’éléments + durée totale',
              img: 'question',
              type: 'text',
              placeholder: 'ex : 2 élements (1 de 5sec et 1 de 8sec)',
            },
            {
              id: 'visualIdentity',
              label: 'Identité visuelle fournie ?',
              img: 'home',
              required: true,
              type: 'select',
              options: [
                {
                  value: 'oui',
                  text: 'Oui',
                },
                {
                  value: 'non',
                  text: 'Non',
                },
              ],
            },
            {
              id: 'visualIdentityFile',
              label: 'Si oui, veuillez la mettre en pièce jointe',
              type: 'folder',
            },
          ],
        },
      ],
    },
    {
      budget: [
        {
          id: 'budget',
          label: 'Budget pour la production',
          required: true,
          img: 'money',
          type: 'select',
          options: [
            {
              value: '100-499',
              text: 'Entre 100€ et 499€',
            },
            {
              value: '500-1499',
              text: 'Entre 500€ et 1499€',
            },
            {
              value: '1500-4999',
              text: 'Entre 1500€ et 4999€',
            },
            {
              value: 'moreThan5000',
              text: 'Plus de 5000€',
            },
          ],
        },
        {
          id: 'moreDetails',
          label: 'Informations supplémentaires',
          img: 'question',
          type: 'textarea',
          required: true,
          placeholder: 'Insérez ici toute information supplémentaire qui pourraient nous être utiles à l’établissement du devis.',
        },
      ],
    },
  ],
}
</script>

<template>
  <div class="text-header">
    <EmTextContent :text="header.title" tag="h1" typo="primary" />
    <EmTextContent :text="header.desc" tag="p" typo="secondary" />
  </div>
  <div class="graphic-header">
    <EmHeaderSeparator />
    <EmTextContent :text="header.secondDesc" tag="p" typo="secondary" />
  </div>
  <main>
    <form id="contact_form" action="https://formspree.io/f/xkndzlry" method="POST" enctype="multipart/form-data">
      <EmTextContent :text="form.title" tag="h2" typo="secondary" variant="tertiary" />
      <EmTextContent :text="form.subTitle" tag="p" typo="secondary" variant="tertiary" />
      <div class="general-informations">
        <div class="legal">
          <EmInputs v-for="field in form.fields[0].general[0].legal" :key="field.id" :name="field.id" :type="field.type" :label="field.label" :required="field.required" :placeholder="field.placeholder" :src="field.img" :options="field.options" />
        </div>
        <div class="tournage-subject">
          <div class="tournage">
            <EmInputs v-for="field in form.fields[0].general[0].tournage" :key="field.id" :name="field.id" :type="field.type" :label="field.label" :required="field.required" :placeholder="field.placeholder" :src="field.img" :options="field.options" />
          </div>
          <div class="subject">
            <EmInputs v-for="field in form.fields[0].general[0].subject" :key="field.id" :name="field.id" :type="field.type" :label="field.label" :required="field.required" :placeholder="field.placeholder" :src="field.img" :options="field.options" />
          </div>
        </div>
      </div>
      <EmTextContent :text="form.secondTitle" tag="h2" typo="secondary" variant="tertiary" />
      <div class="production-informations">
        <EmInputs v-for="field in form.fields[0].production[0].general" :key="field.id" :name="field.id" :type="field.type" :label="field.label" :required="field.required" :placeholder="field.placeholder" :src="field.img" :options="field.options" />
      </div>
      <div class="misc-informations">
        <EmInputs v-for="field in form.fields[1].budget" :key="field.id" :name="field.id" :type="field.type" :label="field.label" :required="field.required" :placeholder="field.placeholder" :src="field.img" :options="field.options" />
      </div>
      <div class="submit">
        <a href="/cgu">

          <EmInputs type="checkbox" name="cgu" label="J'accepte les conditions générales d’utilisations." required />
        </a>
        <EmButton
          onclick="document.getElementById('contact_form').submit(); " link="javascript:{}"
          label="Envoyer"
        />
      </div>
    </form>
  </main>
</template>

<style scoped>
main,
.graphic-header {
    text-align: center;
}

.em-button {
    margin: 50px 0;
    justify-content: center;
}

.graphic-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--em-spacing-xs);
    width: 100%;
}

.graphic-header .separator {
    width: 100%;
    height: 50px;
}

.text-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--em-spacing-xl);
}

.em-input {
    display: flex;
    flex-direction: column;
    margin: var(--em-spacing-l) 0;
}

@media screen and (min-width: 1024px) {
    .graphic-header .em-image-card {
        aspect-ratio: 32/9;
    }
    form {
        display: flex;
        flex-direction: column;
    }

    .text-content{
        margin: var(--em-spacing-3xl) 0 0 0;
    }

    .general-informations {
        display: flex;
        flex-direction: column;
        gap: 20px; /* Added gap between sections */
    }

    .legal {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 items per row */
        gap: var(--em-spacing-m);
    }

    .tournage,
    .subject {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 2 items per row */
        gap: var(--em-spacing-m);
    }

    .tournage-subject{
        display: flex;
        gap: var(--em-spacing-4xl);
        flex-direction: row;
    }

    .subject {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.subject .em-input:has(textarea){
    height: 100%;
}

.production-informations {
    display: grid;
        grid-template-columns: repeat(3, 1fr); /* 2 items per row */
        gap: var(--em-spacing-m);
}

.misc-informations {
    margin: var(--em-spacing-4xl) 0;
    display: flex;
    flex-direction: column;
    gap: var(--em-spacing-m);
    align-items: center;
}

.submit{
    display: flex;
    flex-direction: column;
    width: 100%;
justify-content: center;
gap: var(--em-spacing-m);
}
.submit a{
    display: flex;
    justify-content: center;
    align-items: center;

}
.submit .em-button{
  width: fit-content;
  margin: auto;
}
}
</style>
