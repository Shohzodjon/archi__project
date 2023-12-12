<script setup>
import Navbar from './sections/Navbar.vue';
import Footer from './sections/Footer.vue';
import ResultCard from './components/ResultCard.vue';
import SectionHeader from './components/SectionHeader.vue';
import ProductCard from './components/ProductCard.vue';
import OfferCard from './components/OfferCard.vue';
import city from './assets/images/city.png'
import product from './assets/images/product.png'
import news1 from './assets/images/news1.png'
import news2 from './assets/images/news2.png'
import NewsCard from './components/NewsCard.vue';
import MainCard from './components/MainCard.vue';

</script>

<template>
  <section class="bg-blue-900 pb-20">
    <Navbar />
    <Footer />
    <ResultCard result_content="765+"  result_category="УСТАНОВКИ"  />
    <SectionHeader header__content="Новости и события" header__desc="Следите за нашими новостями и будьте в курсе наших специальных предложений и последних тенденций использования солнечных энергии в Ташкент и в других регионах страны."/>
    <OfferCard card_header="Проектирование и инжиниринг" card_desc="Мы оказывает услуги проектирования солнечных электростанций любой мощности, обеспечивая эффективную интеграцию в существующую инфраструктуру." :img_url="city"/>
<ProductCard :img_url="product" product_title="Солнечные станция" product_desc="25 Лет Гарантии" />
<NewsCard class="mt-20" :img_url="news1" news_date="15 апреля 2023 г." news_title="Более 400 млрд сумов направят на установку солнечных панелей в госорганизациях Ташкента" news_desc="Moscow Solar Group 22-24 июня приглашает всех в Международный форум-выставка RENWEX 2021, Moscow Solar Group 22-24 июня приглашает всех в Международный форум-выставка"/>
<NewsCard class="mt-20 !max-w-[412px]" :img_url="news2" news_date="15 апреля 2023 г." news_title="Более 400 млрд сумов направят на установку солнечных панелей в госорганизациях Ташкента" news_desc="Moscow Solar Group 22-24 июня приглашает всех в Международный форум-выставка RENWEX 2021, Moscow Solar Group 22-24 июня приглашает всех в Международный форум-выставка"/>
 <MainCard :main_card_img="news1" :main_small_img="city" main_card_title="Для бизнеса" main_card_desc="Комплексные решения в области солнечной энергетики для бизнеса станут отличным способом, позволяющим экономить на электроэнергии" main_card_button="Для бизнеса"/>  




</section>
</template>
<style scoped></style>
