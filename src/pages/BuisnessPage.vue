
<script setup>
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';
import SectionComp from '@/sections/SectionComp.vue';
import img from '../assets/images/section_comp_img.png'
import img2 from '../assets/images/buisness_card_img.png'
import BuisnessCard from '@/components/BuisnessCard.vue';
import Implementation from '@/components/Implementation.vue';
import BuisnessPageOfferSection from '@/sections/BuisnessPageOfferSection.vue';
import OfferCard from '@/components/OfferCard.vue';
import { useAdvantageStore } from '@/stores/advantage';
// import fake data
import { implementData} from '@/assets/data/json-data';
const data = [
     {
          label: 'Для бизнеса',
          url: ''
     }
];
const advantageStore = useAdvantageStore();


</script>
<template>
     <section>
          <SectionHeaderComp  :bread-data="data"/>

          <div class="bg-white-900 pt-[60px] pb-[120px]">
               <div class="container">

                    <SectionComp title="Зеленый тариф для <span class='text-[#2FFFC1]'>юридических лиц</span>"
                         desc="Станьте владельцем солнечной электростанции и получайте пассивный доход в течении 20-ти лет продавая электроэнергию государству по высоким ценам!"
                         desc2="Окупаемость солнечной электростанции 3-4 лет, а дальше она будет приносить пассивный доход."
                         :img_url="img" />

                    <!--  end of тариф section  -->

                    <div class="flex items-center gap-10 mt-20">
                         <BuisnessCard title="Причины использовать солнечную электростанцию"
                              desc="Реалии таковы, что цены на электроэнергию постоянно поднимаются. Предприниматели вынуждены искать пути оптимизации расходов, чтобы не прогореть в условиях сильной конкурентной среды. Производственные предприятия имеют возможности сэкономить путем следования программам по повышению энергоэффективности или принципам бережного производства, позволяющим не только сохранить ресурсы, но и избавиться от негативного воздействия на природу."
                              :img_url="img2" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="900"
                              data-aos-delay="600" />
                         <BuisnessCard title="Причины использовать солнечную электростанцию"
                              desc="Реалии таковы, что цены на электроэнергию постоянно поднимаются. Предприниматели вынуждены искать пути оптимизации расходов, чтобы не прогореть в условиях сильной конкурентной среды. Производственные предприятия имеют возможности сэкономить путем следования программам по повышению энергоэффективности или принципам бережного производства, позволяющим не только сохранить ресурсы, но и избавиться от негативного воздействия на природу."
                              :img_url="img2" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="900"
                              data-aos-delay="600" />
                    </div>
                    <!-- end of first card -->
                    <div class="bg-green-800 rounded-lg py-[60px] px-10 mt-20">
                         <h2
                              class="text-white-900 text-[40px] font-bold font-gilroy-bold text-center leading-[52px] mb-[52px] ">
                              Этапы реализации</h2>
                         <p
                              class="text-white-900 text-xl font-medium font-gilroy-medium leading-[30px] text-center mb-10 max-w-[700px] mx-auto">
                              Долгосрочный договор поставки электроэнергии для промышленных предприятий.
                              Отсутствие инвестиций со стороны заказчика на этапе строительства солнечной генерации.</p>
                         <div class="flex gap-8">
                              <Implementation v-for="(item, index) in implementData" :key="item.id"
                                   :proccess_step="item.proccess_step" :proccess_title="item.proccess_title"
                                   :proccess_desc="item.proccess_desc" :last_position="item.last_position"
                                   data-aos="fade-down" data-aos-easing="linear" data-aos-duration="900"
                                   :data-aos-delay="350 * (index + 1)" />
                         </div>
                    </div>
                    <!--  end of second card -->
                    <div class="bg-grey-100 rounded-lg flex items-center justify-between pl-[70px] pr-10 pt-[1px] mt-20"
                         data-aos="fade-left" data-aos-easing="linear" data-aos-duration="900" data-aos-delay="600">
                         <div class="w-full max-w-[348px]">
                              <img src="../assets/images/img_covered1.png" alt=" left sidebar image" class="w-full" />
                         </div>
                         <!-- eleft sidebar -->
                         <div class="max-w-[800px] ml-[42px]">
                              <h2
                                   class="text-grey-900 text-center text-[40px] font-bold font-gilroy-bold leading-[52px] mb-2">
                                   Как работает</h2>
                              <p class="text-center text-grey-500 text-xl font-medium font-gilroy-medium leading-[30px] ">
                                   Электроэнергия, генерируемая солнечной станцией в дневное время, направлена на собственное
                                   потребление дома по приоритетной схеме. При отсутствии потребления в доме или в случае
                                   избытка генерируемой энергии вся неиспользованная солнечная электроэнергия может быть
                                   отдана в централизованную сеть.</p>
                         </div>
                         <!-- main sidebar -->
                         <div class="w-full max-w-[420px]">
                              <img src="../assets/images/img_covered2.png" alt="right sidebar image" class="w-full" />
                         </div>
                         <!-- right sidebar -->
                    </div>
                    <!--  end of third card -->
                    <div class="mt-20">
                         <BuisnessPageOfferSection>
                              <h2
                                   class="text-white-900 text-[40px] font-bold font-gilroy-bold leading-[52px] text-center mb-2">
                                   Что мы предлагаем?</h2>
                              <p
                                   class="max-w-[887px] mx-auto text-center text-white-900 text-xl font-medium font-gilroy-medium leading-[30px] mb-[90px]">
                                   Долгосрочный договор поставки электроэнергии для промышленных предприятий.
                                   Отсутствие инвестиций со стороны заказчика на этапе строительства солнечной генерации.</p>

                              <div class="flex gap-8">
                                   <OfferCard v-for="(item, index) in advantageStore.advantage" :key="item.id"
                                        :img_url="item.icon" :card_header="item.title" :card_desc="item.content"
                                        :data-aos="[index == 1 ? 'fade-left' : 'fade-right']" data-aos-easing="linear"
                                        data-aos-duration="900" :data-aos-delay="200 * (index + 1)" />
                              </div>
                         </BuisnessPageOfferSection>
                    </div>


               </div>
          </div>
          <!-- end of buisness second div  -->
     </section>
</template>
<style scoped></style>