
<script setup>
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';
import DashedLine from '@/assets/icons/DashedLine.vue';
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
    <section>

        <SectionHeaderComp title="Государственное налоговое управление" />
        <div>
            <div class="container">

                <div class="flex gap-6 justify-between items-start">
                    <div class=" flex gap-5">
                        <ul class="flex flex-col gap-5">
                            <li class="w-20 h-20 border border-grey-200 rounded"><img src="../assets//images/solar_panel2.png" alt="solar panel" class="w-full h-full"></li>
                            <li class="w-20 h-20 border border-grey-200 rounded"><img src="../assets//images/solar_panel3.png" alt="solar panel" class="w-full h-full"></li>
                            <li class="w-20 h-20 border border-grey-200 rounded"><img src="../assets//images/solar_panel2.png" alt="solar panel" class="w-full h-full"></li>
                            <li class="w-20 h-20 border border-grey-200 rounded"><img src="../assets//images/solar_panel3.png" alt="solar panel" class="w-full h-full"></li>
                        </ul>
                        <div class="w-[457px] h-[457px] border border-grey-200 rounded">
                            <img src="../assets/images/solar_panel.png" alt="solar panel" class="w-full">
                        </div>
                    </div>
                    <!--  end of right sidebar -->
                    <div class="">
                        <ul class="flex-1 flex flex-col gap-5 max-w-[630px]">
                            <li class="flex items-center gap-[10px]"><span class="text-grey-500 text-xl leading-[30px] font-medium font-gilroy-medium">Рекомендуемая макс. <br/> Мощность фотоэлектрических модулей:</span>
                                <DashedLine class="flex-1"/> <span class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">7.5 кВт</span>
                            </li>
                            <li class="flex items-center gap-[10px]"><span class="text-grey-500 text-xl leading-[30px] font-medium font-gilroy-medium">Макс. входное напряжение:</span>
                                <DashedLine class="flex-1"/> <span class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">600 В</span>
                            </li>
                            <li class="flex items-center gap-[10px]"><span class="text-grey-500 text-xl leading-[30px] font-medium font-gilroy-medium">Номинальное напряжение:</span>
                                <DashedLine class="flex-1"/> <span class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">330 В</span>
                            </li>
                            <li class="flex items-center gap-[10px]"><span class="text-grey-500 text-xl leading-[30px] font-medium font-gilroy-medium">Напряжение пуска:</span>
                                <DashedLine class="flex-1"/> <span class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">120 В</span>
                            </li>
                            <li class="flex items-center gap-[10px]"><span class="text-grey-500 text-xl leading-[30px] font-medium font-gilroy-medium">Макс входной ток:</span>
                                <DashedLine class="flex-1"/> <span class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">11 A / 11 A</span>
                            </li>
                            <li class="flex items-center gap-[10px]"><span class="text-grey-500 text-xl leading-[30px] font-medium font-gilroy-medium">Макс. ток короткого замыкания:</span>
                                <DashedLine class="flex-1"/> <span class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">17.2 A / 17.2 A</span>
                            </li>
                            <li class="flex items-center gap-[10px]"><span class="text-grey-500 text-xl leading-[30px] font-medium font-gilroy-medium">MPPT число/Макс. входные строки число:</span>
                                <DashedLine class="flex-1"/> <span class="text-grey-900 text-xl leading-[30px] font-bold font-gilroy-bold">2/2</span>
                            </li>
                        </ul>
                    </div>
                    <!--  end of main sidebar -->
                    <div class="flex-1 max-w-[485px] border" >
                        <div class="w-full flex items-center justify-between">
                            <h4 class="text-blue-500 text-[28px] font-extrabold font-gilroy-bold leading-[42px] ">110 000 000 СУМ
                            </h4>
                            <span class="text-grey-600 text-xl leading-[30px] font-semibold font-gilroy-bold line-through">135 000 000 СУМ</span>
                        </div>
                        <div class="line"></div>
                        <BaseButton content="Заказать сейчас" />
                        <BaseButton content="Поделиться" />
                    </div>
                    <!--  end of right sidebar -->
                </div>
                <!--  end of header -->
            </div>
        </div>
    </section>
</template>