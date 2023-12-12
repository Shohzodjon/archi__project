
<script setup>
import BaseButton from '@/components/BaseButton.vue';
import Arrow from '@/assets/icons/Arrow.vue';
</script>
<template>
    <section>
        <header class="pt-[300px]">
            <div class="container">
                <div class=" relative">
                    <div>
                        <h2>Солнечные электростанции
                            под ключ</h2>
                            <p>Group pants for corporate interim ourselves invite.
                                Crystallize right beef join Activities slipstream shower
                                one socialize back-end cost time eow comes.</p>
                                <BaseButton content="Подробнее" class="home__btn text-white-900 px-[38px]">
                                <Arrow/>
                                </BaseButton>
                    </div>
                    <form>
                        <h3>Получите консультацию</h3>
                        <p>Заполните Простую Форму И Наши Специалисты Свяжутся С Вами В Рабочее Время</p>
                        <ul>
                            <li><input type="text" placeholder="Полное имя"/></li>
                            <li><input type="text" placeholder="Номер телефона"/></li>
                            <li><input type="text" placeholder="Сообщение"/></li>
                        </ul>
                        <BaseButton content="Получить бесплатную консультацию" class="!w-full home__btn justify-center text-white-900">
                           <Arrow/>
                        </BaseButton>
                    </form>
                </div>

            </div>
        </header>

    </section>
</template>
<style scoped>
header {
    background-image: url('../assets/images/home_img.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 900px;
    position: relative;
}

header::before {
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    background: #022D6A;
    opacity: .6;
}
.home__btn{
    border-radius: 4px;
background: linear-gradient(180deg, #3689FF 0%, #2077F2 100%) !important;

}
</style>