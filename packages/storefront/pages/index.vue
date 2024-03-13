<script setup lang="ts">
import { EmButton, EmHeaderSeparator, EmImageCard, EmPortfolioSection, EmServiceSection, EmTextContent, EmTextSection } from '@e-medya-web/components'

const header = {
  title: 'Donnez vie à vos idées',
  desc: 'Nous travaillons en étroite collaboration avec nos clients pour donner vie à leurs idées, en créant des clips, des reportages et des publicités qui reflètent leur vision et leur identité.',
  img: 'https://picsum.photos/200/300',
  alt: 'random image',
}

const serviceSection = {
  headline: 'Nos services',
  title: 'Un accompagnement au plus proche des clients',
  cards: [
    {
      title: 'Définition du besoin',
      text: 'Nous prenons le temps de comprendre vos objectifs, votre vision et votre public. Nous discutons de vos idées, de vos attentes et de vos contraintes pour nous assurer que nous sommes tou.te.s sur la même longueur d’onde.',
      icon: 'phone',
    },
    {
      title: 'Créativité et conception',
      text: 'Notre équipe se met ensuite au travail pour concevoir des idées originales et innovantes pour votre projet. Nous travaillons en étroire collaboration avec vous pour affiner la direction créative et trouver la solution la plus adaptée à vos besoins tout en restant en cohérence avec la plateforme et le public cible.',
      icon: 'play',
    },
    {
      title: 'Production et livraison',
      text: 'Une fois que nous avons finsalié la direction créative et obtenu votre approbation, nous passons à la production. Nous travaillons avec des équipements professionnels et une équipe talentueuse pour capturer des images de qualité exceptionnelle, éditer et monter le contenu et livrer le produit final dans les délais impartis.',
      icon: 'checkmark',
    },
  ],
}

const portfolioSection = {
  headline: 'Nos projets récents',
  title: 'Le fruit de notre passion pour la vidéo',
  images: [
    {
      src: 'https://picsum.photos/200/300',
      alt: 'random image',
      text: ['Brasero HomeMade', 'Vidéo de présentation des Braseros homemade sur demande et personnalisable par la société artisanale Made of Wood'],
    },
    {
      src: 'https://picsum.photos/200/300',
      alt: 'random image',
      text: ['Laissez-vous emporter par la magie de leurs contées', 'Anim’Aventure propose des balades contées dans de magnifiques paysages naturels pour les plus petits comme les plus grands.'],
    },
    {
      src: 'https://picsum.photos/200/300',
      alt: 'random image',
      text: ['Anim’Aventure propose des balades contées dans de magnifiques paysages naturels pour les plus petits comme les plus grands.', 'Anim’Aventure propose des balades contées dans de magnifiques paysages naturels pour les plus petits comme les plus grands.'],
    },
  ],
  button: {
    label: 'Contact',
    link: '/contact',
  },
}

const aboutSection = {
  headline: 'À propos de nous',
  title: 'E-medya, votre agence vidéo passionnée sur Grenoble',
  text: 'Chez E-medya, nous sommes passionnés par la vidéo depuis plus de 7 ans. Basée à Grenoble, notre entreprise est à la fois locale et auto-entrepreneuriale. Nous sommes fiers de nos valeurs et de notre travail soigné, et nous sommes toujours à l\'écoute de nos clients pour répondre à leurs besoins en matière de production vidéo. Que vous ayez besoin d\'un clip, d\'un reportage, d’une interview ou d\'une publicité, notre équipe expérimentée et passionnée est prête à relever tous les défis pour réaliser votre projet avec succès. Découvrez notre expertise et notre savoir-faire en matière de production vidéo en visitant notre site web. Nous sommes impatients de vous accompagner dans la réalisation de votre projet vidéo.',
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
    <EmServiceSection v-bind="serviceSection" />
    <EmButton variant="secondary" label="En savoir plus" />
    <EmPortfolioSection
      v-bind="portfolioSection"
    />
    <EmTextSection v-bind="aboutSection" />
    <EmButton variant="secondary" label="En savoir plus" />
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

@media screen and (min-width: 1024px) {
  .graphic-header .em-image-card{
  aspect-ratio: 32/9;
}

.portfolio-section {
  margin-bottom: 150px;
}

}
</style>
