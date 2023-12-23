
<script setup>
import { ref } from 'vue';
import SectionHeaderComp from '@/sections/SectionHeaderComp.vue';
import ContactCard from '@/components/ContactCard.vue';
import { contactData } from '@/assets/data/json-data';
import BaseButton from '@/components/BaseButton.vue';
import Arrow from '@/assets/icons/Arrow.vue';

const data = [
    {
        label: 'Контакты',
        url: ''
    }
]
</script>

<template>
    <section>

        <SectionHeaderComp :bread-data="data" />
        <div class="pb-[120px] pt-[60px]">
            <div class="container">
                <div class="flex items-center flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-6 md:gap-3">
                    <ContactCard v-for="item in contactData" :key="item.id" :card_title="item.title"
                        :card_email="item.email" :card_phone="item.phone_num" class="md:w-[45%] lg:w-auto lg:flex-1" />
                </div>

                <div class="flex  justify-between flex-col lg:flex-row gap-6 mt-6">
                    <!-- left sidebar -->
                    <div class="w-full lg:w-1/2 p-5 lg:p-3 xl:p-5 rounded border-[1.5px] border-grey-200">
                        <h4 class="text-grey-900  lg:leading-[31.2px] font-gilroy-bold font-semibold text-lg lg:text-2xl">
                            Заполните форму
                        </h4>
                        <div class=" my-3 md:my-4 lg:my-5 h-[1px] bg-grey-200 w-full "></div>
                        <ul class="flex flex-col gap-5">
                            <li>
                                <input type="text" placeholder="Ваше имя"
                                    class="w-full py-2 md:py-3 xl:py-[18px] pl-3 mg:pl-4 xl:pl-5 rounded border-[1.5px] border-grey-200 outline-blue-500 text-base md:text-[18px] font-semibold font-gilroy-medium placeholder:text-grey-500">

                            </li>
                            <li class="flex flex-col gap-5">
                                <input type="text" placeholder="Ваш телефон"
                                    class=" w-full py-2 md:py-3 xl:py-[18px] pl-3 mg:pl-4 xl:pl-5 rounded border-[1.5px] border-grey-200 outline-blue-500 text-base md:text-[18px] font-semibold font-gilroy-medium placeholder:text-grey-500">
                                <input type="email" placeholder="Ваш email"
                                    class=" w-full py-2 md:py-3 xl:py-[18px] pl-3 mg:pl-4 xl:pl-5 rounded border-[1.5px] border-grey-200 outline-blue-500 text-base md:text-[18px] font-semibold font-gilroy-medium placeholder:text-grey-500">
                            </li>
                            <li>
                                <textarea cols="30" rows="" placeholder="Ваше сообщение"
                                    class=" w-full  h-40 py-2 md:py-3 xl:py-[18px] pl-3 mg:pl-4 xl:pl-5 rounded border-[1.5px] border-grey-200 outline-blue-500 text-base md:text-[18px] font-semibold font-gilroy-medium placeholder:text-grey-500"></textarea>
                            </li>
                            <li>
                                <BaseButton :content="$t('btn-content.send')" class="contact__btn text-white-900 px-[65px]">
                                    <Arrow />
                                </BaseButton>
                            </li>
                        </ul>
                    </div>
                    <!-- right sidebar -->
                    <div class=" w-full lg:w-1/2 p-5 lg:p-3 xl:p-5 rounded border-[1.5px] border-grey-200">
                        <h4 class="text-grey-900  lg:leading-[31.2px] font-gilroy-bold font-semibold text-xl lg:text-2xl">
                            Карта</h4>
                        <div class="my-3 md:my-4 lg:my-5 h-[1px] bg-grey-200 w-full "></div>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14261.6991255072!2d69.20445076793465!3d41.283776280566045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1702644103650!5m2!1sru!2s"
                                width="100%" height="410" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style>
.contact__btn {
    border-radius: 4px;
    background: linear-gradient(180deg, #3689FF 0%, #2077F2 100%);
}

.vti__dropdown {
    display: none !important;
}</style>