<template>
    <v-app>
        <Header />
        <v-main>
            <nuxt />
        </v-main>
        <Sitemap />
        <Footer />
    </v-app>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Sitemap from '~/components/Sitemap.vue';

export default {
    components: {
        Header,
        Footer,
        Sitemap
    }
};
</script>

<style>
/* Your styles here */
</style>
