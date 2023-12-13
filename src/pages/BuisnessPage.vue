
<script setup>
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';
import SectionComp from '@/sections/SectionComp.vue';
import img from '../assets/images/section_comp_img.png'
</script>
<template>
     <section>
          <SectionHeaderComp title="Для бизнеса" />

          <div class="bg-white-900 ">
               <div class="container">

                    <SectionComp title="Зеленый тариф для <span class='text-[#2FFFC1]'>юридических лиц</span>"
                         desc="Станьте владельцем солнечной электростанции и получайте пассивный доход в течении 20-ти лет продавая электроэнергию государству по высоким ценам!"
                         desc2="Окупаемость солнечной электростанции 3-4 лет, а дальше она будет приносить пассивный доход."
                         :img_url="img" />

                    <!--  end of тариф section  -->
               </div>
          </div>
          <!-- end of buisness second div  -->
     </section>
</template>
<style scoped></style>