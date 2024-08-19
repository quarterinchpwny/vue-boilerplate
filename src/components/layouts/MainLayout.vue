<script setup>
import NavBar from '@/components/navigation/NavBar.vue';
import FooterBar from '@/components/navigation/FooterBar.vue';
</script>

<template>
    <div class="flex flex-col justify-around">
        <NavBar />
        <main class="container p-5 h-screen md:mx-auto">
            <slot />
        </main>
        <FooterBar />
    </div>
</template>

<style scoped></style>
