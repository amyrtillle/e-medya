<script setup lang="ts">
import { EmHeaderSeparator, EmInputs, EmTextContent } from '@e-medya-web/components'

useHead({
  title: 'Nous contacter',
  meta: [
    { name: 'E-medya', content: 'E-medya contact page' },
  ],
})
const header = {
  title: 'Nous contacter',
  desc: 'Un doute, des interrogations, ou juste envie de discuter (ne faites pas ça s’il vous plait), appelez-nous ou envoyez nous un e-mail !',
  secondDesc: 'Si vous ne souhaitez pas nous appeler ou que vous souhaitez nous contacter en dehors de nos horaires d’ouvertures, veuillez remplir le formulaire ci-dessous (ou nous envoyer directment un e-mail à contact@e-medya.fr)',
}

const form = {
  title: 'Formulaire de contact',
  subTitle: 'Aucune de vos informations ne seront utilisées à titre de revente ou de démarchage.',
  fields: [
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
    {
      id: 'subject',
      label: 'sujet',
      img: 'search',
      required: true,
      type: 'text',
      placeholder: 'Sujet de votre demande',
    },
    {
      id: 'message',
      label: 'Message',
      img: 'write',
      required: true,
      type: 'textarea',
      placeholder: 'Indiquez ici votre message, votre demande et toute information(s) supplémentaire qui pourrait nous aider à répondre au mieux à votre demande.',
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
    <EmTextContent :text="form.title" tag="h2" typo="secondary" variant="tertiary" />
    <EmTextContent :text="form.subTitle" tag="p" typo="secondary" variant="tertiary" />
    <form
      id="contact_form"
      action="https://formspree.io/f/mdoqdjgv"
      method="POST"
      enctype="multipart/form-data"
    >
      <div>
        <EmInputs v-for="field in form.fields" :key="field.id" :name="field.id" :type="field.type" :label="field.label" :required="field.required" :placeholder="field.placeholder" :src="field.img" :options="field.options" />
      </div>

      <EmInputs type="submit" label="Envoyer" class="send-form" />
    </form>
  </main>
</template>

<style scoped>
main, .graphic-header{
    text-align: center;
}
.em-button{
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

.em-input{
  display: flex;
  flex-direction: column;
  margin: var(--em-spacing-l) 0;
}

@media screen and (min-width: 1024px) {
  .graphic-header .em-image-card{
  aspect-ratio: 32/9;
}

form > div {
    display: flex;
  flex-wrap: wrap;
}

form > div > *{
    flex: 0 0 33.333333%;
    padding: 0 var(--em-spacing-s);

}
}
</style>
