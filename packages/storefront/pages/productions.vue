<script setup lang="ts">
import { EmHeaderSeparator, EmImageCard, EmPortfolioSection, EmTextContent } from '@e-medya-web/components'

const header = {
  title: 'Nos productions',
  desc: 'Vous souhaitez avoir un aperçu de nos productions avant de vous lancer dans une aventure avec nous ?',
  descBis: 'Vous êtes au bon endroit ! Dans cette section vous trouverez des exemples de nos productions, allant du trailer, à la pub de pour la vente de produit, en passant par le clip vidéo, vous en aurez pour tous les goûts !',
  img: '/assets/productions-tournage.png',
  alt: 'tournage image fond vert',
}

const portfolioSection = {
  headline: 'Nos productions',
  title: 'Retrouvez toutes nos productions ici',
  images: [
    {
      src: '/assets/brasero-photo.png',
      alt: 'random image',
      text: ['Brasero Artisanal', 'Nous sommes fièr.e.s de vous présenter notre vidéo publicitaire pour Made of Wood, une entreprise artisanale dans le secteur de la fabrication de meubles, agencement, pose de menuiserie qui crée aussi des braseros sur mesure, faits à la main avec passion et expertise. Notre vidéo capture l’essence de leur processus de création et de leur engagement envers des produits de qualité supérieur.'],
      link: 'https://www.facebook.com/MadeOfWood38/videos/1878606152520042',
    },
    {
      src: '/assets/baladecontee.webp',
      alt: 'random image',
      text: ['Ballades contées, entre magie et nature', 'Dans ce trailer d’1 minute, vous pourrez découvrir les balades contées made by Anim’aventures, un mélange entre balade en nature et immersion dans un univers magique.'],
      link: 'https://youtu.be/Mt4ah74jMtk',
    },
    {
      src: '/assets/escape_photo.webp',
      alt: 'random image',
      text: ['Escapes Games à domicile', 'Dans ce trailer d’1 minute, vous pourrez découvrir les escapes games sur mesures made by Anim’aventures, disponbles dans plusieurs univers différents, et accessibles aux plus jeunes.'],
      link: 'https://youtu.be/XlpTsXUYldM',
    },
  ],
  button: {
    label: 'Contact',
    link: '/contact',
  },
}
</script>

<template>
  <div class="text-header">
    <EmTextContent :text="header.title" tag="h1" typo="primary" />
    <EmTextContent :text="header.desc" tag="p" typo="secondary" />
    <EmTextContent :text="header.descBis" tag="p" typo="secondary" />
  </div>
  <div class="graphic-header">
    <EmImageCard :src="header.img" :alt="header.alt" />
    <EmHeaderSeparator />
  </div>
  <main>
    <EmPortfolioSection v-bind="portfolioSection" />
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
}

.text-header h1{
    margin-bottom: var(--em-spacing-xl);
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

.portfolio-section {
  margin-bottom: 150px;
}
}
</style>
