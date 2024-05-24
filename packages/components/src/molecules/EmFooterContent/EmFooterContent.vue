<script setup lang="ts">
import EmTextContent from '../../atoms/EmTextContent/EmTextContent.vue'
</script>

<template>
  <div class="footer-content">
    <div class="content">
      <EmTextContent tag="h2" text="Notre équipe adore les nouveaux projets" />
      <div class="colored">
        <EmTextContent tag="h2" text="Contactez-nous " />
        <EmTextContent tag="h2" variant="tertiary" text="pour nous parler du vôtre." />
      </div>
    </div>
    <div class="contact">
      <div class="adress">
        <EmTextContent tag="span" text="42B rue ampère, " />
        <EmTextContent tag="span" text="38000 Grenoble" />
      </div>
      <div class="mail">
        <EmTextContent tag="span" text="Envoyez nous un mail à " />
        <EmTextContent tag="a" variant="tertiary" href="mailto:amy-lee.bausano@gmail.com" text="amy-lee.bausano@gmail.com" />
      </div>
      <div class="phone">
        <EmTextContent tag="span" text="Si vous ne pouvez pas attendre, contactez-nous au " />
        <EmTextContent tag="a" variant="tertiary" href="tel:+33669442428" text="06 69 44 24 28" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: var(--em-spacing-xl);
}

.content{
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: var(--em-spacing-xxl);
}

.colored{
  display: flex;
  flex-direction: column;
}

.colored h2{
  margin-right: var(--em-spacing-xs);
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: var(--em-spacing-m);
}

.contact span, .contact a{
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 768px) {
.footer-content, .colored{
  flex-direction: row;
  justify-content: space-between;
}
}
</style>
