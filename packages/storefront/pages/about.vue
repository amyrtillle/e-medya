<script setup lang="ts">
import { EmHeaderSeparator, EmImageCard, EmTextContent, EmTextSection } from '@e-medya-web/components'

const header = {
  title: 'À propos de nous',
  desc: 'Chez E-medya, notre passion pour la création de contenus vidéo de qualité nous pousse à repousser les limites de l\'innovation et de la créativité pour satisfaire pleinement les besoins de nos clients.',
  img: '/assets/about-photo.jpg',
  alt: 'setup image',
}

const aboutSection = {
  headline: 'À propos de nous',
  title: 'E-medya, votre agence vidéo passionnée sur Grenoble',
  text: 'Chez E-medya, nous sommes passionné.e.s par la vidéo depuis plus de 7 ans. Basée à Grenoble, notre entreprise est à la fois locale et auto-entrepreneuriale. ',
  bis: 'Nous sommes fièr.e.s de nos valeurs et de notre travail soigné, et nous sommes toujours à l\'écoute de nos client.e.s pour répondre à leurs besoins en matière de production vidéo. Que vous ayez besoin d\'un clip, d\'un reportage, d’une interview, d’un best of de contenu ou d\'une publicité, notre équipe expérimentée et passionnée est prête à relever tous les défis pour réaliser votre projet avec succès. Découvrez notre expertise et notre savoir-faire en matière de production vidéo en parcourant  notre site web. Nous sommes impatient.e.s de vous accompagner dans la réalisation de votre projet vidéo.',
  tert: 'Chez E-medya, nous croyons que chaque projet a une histoire unique à raconter. Notre agence de production audiovisuelle est spécialisée dans la création de contenus captivants et de qualité, qui transmettent efficacement votre message à votre public. Notre équipe est passionnée par les histoires, les images et le son, et nous travaillons sans relâche pour réaliser des productions innovantes et créatives. Notre engagement envers l\'excellence et la satisfaction de nos clients est notre priorité.',
}
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
    <EmTextSection v-bind="aboutSection" />
    <EmTextContent tag="p" :text="aboutSection.bis" variant="secondary" size="s" />
    <EmTextContent tag="p" :text="aboutSection.tert" variant="secondary" size="s" />
  </main>
</template>

<style scoped>
.em-button{
  margin: 50px 0
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

.text-content{
    margin: var(--em-spacing-l) 0;
}

@media screen and (min-width: 1024px) {
  .graphic-header .em-image-card{
  aspect-ratio: 32/9;
}

}
</style>
