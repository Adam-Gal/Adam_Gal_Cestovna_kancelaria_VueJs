<template>
  <div>
    <div class="clanok" v-for="(article, index) in articles" :key="index">
      <div>
        <img :src="article.image" style="border-radius: 5px;" class="img-thumbnail img-fluid" :alt="article.title" loading="lazy">
      </div>
      <div class="sprava">
        <h2>{{ article.title }}</h2>
        <p>{{ article.content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Articles',
  setup() {
    const articles = ref([
      {
        image: 'img/img5.jpg',
        title: 'Otvárame Krídla ku Slnečnému Ostrovu: Nová Destinácia Cyprus!',
        content: 'S ďalším letom naša cestovná spoločnosť prináša vzrušujúce správy - Cyprus, ostrov kontrastov a krásy, sa stáva našou najnovšou destináciou! Otvárame novú trasu, ktorá spája cestujúcich so slnečným pobrežím a pútavou históriou tejto jedinečnej krajiny. Zarezervujte si svoje letenky a pripravte sa na dobrodružstvo na Slnečnom Ostrove! Letisko na Cyprus je teraz otvorené pre vás, aby ste objavili kúzlo tohto jedinečného miesta. Nechajte sa unášať krásou a pohostinnosťou Cyprusu s našou cestovnou spoločnosťou!'
      },
      {
        image: 'img/img6.jpg',
        title: 'Malorka: Ostrov Slnečných Lúčov a Kultúrnych Pokladov',
        content: 'V srdci Stredozemného mora sa rozprestiera Malorka, jedinečný ostrov plný krásnych scenérií, vôní citrusových sadov a pútavého kultúrneho dedičstva. Dnes sa pozrieme na čaro tohto ostrova, ktorý prilákal pozornosť cestovateľov svojou nezameniteľnou atmosférou a bohatou ponukou zážitkov. Pláže ponúkajú nielen oddych, ale aj rôzne vodné športy. Cyklistika, golfovanie a výlety na lodi sú len niektoré z možností pre športových nadšencov. Pre milovníkov nočného života sú tu moderné kluby a tradičné taverny, kde sa môžete pohrávať s taktmi flamenka.'
      },
      {
        image: 'img/img7.jpg',
        title: 'Cestovanie mimo Tradičných Turistických Destinácií',
        content: 'Cestovanie je ako fascinujúci príbeh, ktorý sa odvíja na stránkach sveta. Často sa však stáva, že sa zameriavame iba na veľké metropoly a populárne turistické destinácie, pričom prehliadame malé mestečká, ktoré ukrývajú svoje vlastné tajomstvá a pôvab. Ak túžite po nezabudnuteľnom dobrodružstve, oddiaľte sa od hlučných davov a objavte krásy sveta v tých najmenších zákutiach.Cestovanie do malých mestečiek neznamená nutne obetovať pohodlie. Mnohé z týchto destinácií poskytujú útulné penzióny a malebné hotely, ktoré sú pripravené privítať cestovateľov so všetkým pohodlím a pohostinnosťou.'
      }
    ]);

    return {
      articles,
    };
  },
});
</script>
