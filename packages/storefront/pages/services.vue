<script setup lang="ts">
import { EmHeaderSeparator, EmImageCard, EmNote, EmServiceSection, EmTextContent } from '@e-medya-web/components'

const header = {
  title: 'Nos services',
  desc: 'Nous proposons plusieurs types de prestations, que ce soit de la prise de vue simple pour vos projets, uniquement le montage vidéo ou la prise en charge complète de vos projets, nous serons là pour vous accompagner du début à la fin.',
  img: 'https://picsum.photos/200/300',
  alt: 'random image',
}

const serviceSection = {
  headline: 'Notre accompagnement',
  title: 'Comment se déroule nos prestations',
  cards: [
    {
      title: 'Définition du besoin',
      texts: [
        'Dans un premier temps, nous établissons un (ou plusieurs) rendez-bous avec le client avec de déterminer le plus précisemment possible le type de prestation dont vous avez besoin ainsi que les options disponibles pour celui-ci.',
        'Dans le même temps, nous discutons les attentes finales de votre projet, comme le type de contenu que vous souhaitez que la plateforme sur laquelle vous souhaitez communiquer. Ce sera aussi l’occasion pour le client de nous informer s’il a des attentes particlière concernant la mise en oeuvre du projet (techniques de prises de vues précises s’il y en a la demande, détails à ajouter en post production).',
        'Une fois tous cela établi ainsi qu’une date fixée nous vous envoyons un devis détaillé sur la prestation.',
      ],
      icon: 'phone',
    },
    {
      title: 'Créativité et conception',
      texts: ['Une fois le projet et le devis validé, notre équipe se met au travail pour penser et créer au mieux le contenu que vous souhaitez. Vous pouvez avec grand plaisir nous solliciter pour nous envoyer vos ressources ou vos demandes d’inspirations.',
        'Lorsque cela est nécessaire, nous pouvons être amené.e.s à utiliser du contenu venant d’autres créateurs à la seule conditions que ceux-ci soient libres de droits. De la même manière, les contenus audios, notamment les musiques, utilisés sont libres de droits, hors demandes explicite du client (il faudra en revanche prévoir l’achat des droits d’utilisations des contenus).'],
      icon: 'play',
    },
    {
      title: 'Production et livraison',
      texts: ['Le jour du tournage venu, notre équipe vient sur le lieu convenu du tournage avec notre matériel professionnel (une première facture servant d’accompte pourra vous être envoyé une fois le tournage terminé). Puis nous passons à l’édition du projet, durant le processus d’éditions vous pouvez nous solliciter pour avoir des informations concernant l’avancement de celui-ci, selon l’avancement nous pourrons vous envoyer une ébauche du projet',
        'Une fois l’édition terminée et le produit terminé, nous vous envoyons le produits avec notre copyright pour avoir votre validation, accompagné de la facture. Si le produit est validé et une fois la facture payée, vous recevrez le produit finale dont vous aurez l’autorisation d’utilisation *.'],
      icon: 'checkmark',
    },
  ],
}

const noteText
  = '*Nous nous réservons le droit de réutiliser nos projets précédents à titre d’exemple pour nos futurs clients.'
</script>

<template>
  <div class="text-header">
    <EmTextContent :text="header.title" tag="h1" typo="primary" />
    <EmTextContent :text="header.desc" tag="p" typo="secondary" />
  </div>
  <div class="graphic-header">
    <EmImageCard :src="header.img" :alt="header.alt" />
    <EmHeaderSeparator />
  </div>
  <main>
    <EmServiceSection v-bind="serviceSection" />
    <EmNote :text="noteText" />
  </main>
</template>

<style scoped>
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

.em-note{
  width: 100%;
}

main{
  display: flex;
  flex-direction: column;
  gap: var(--em-spacing-3xl);
}

@media screen and (min-width: 1024px) {
  .graphic-header .em-image-card{
  aspect-ratio: 32/9;
}

}
</style>
