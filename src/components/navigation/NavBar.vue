<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import LinkedinSVG from '@/components/svg/LinkedinSVG.vue';
import GithubSVG from '@/components/svg/GithubSVG.vue';
import GitlabSVG from '@/components/svg/GitlabSVG.vue';
import DarkThemeSVG from '@/components/svg/DarkThemeSVG.vue';
import LightThemeSVG from '@/components/svg/LightThemeSVG.vue';
const route = useRoute();
const pageTitle = computed(() => {
    return route.meta.pageTitle;
});

const navigationLinks = [
    {
        label: 'home',
        to: 'home-view'
    },
    {
        label: 'about',
        to: 'about-view'
    },
    {
        label: 'projects',
        to: 'projects-view'
    }
    // {
    //     label: 'blog',
    //     to: 'blogs-view'
    // }
];
const socialLinks = [
    {
        label: 'github',
        to: 'home-view',
        icon: GithubSVG
    },
    // {
    //     label: 'gitlab',
    //     to: 'about-view',
    //     icon: GitlabSVG
    // },
    {
        label: 'linkedin',
        to: 'projects-view',
        icon: LinkedinSVG
    }
];
</script>

<template>
    <header class="flex text-center justify-between items-center p-5 container md:mx-auto">
        <div class="logo">qipz</div>
        <div class="navigation">
            <div class="navigation-section px-3">
                <template v-for="(link, index) in navigationLinks" :key="index">
                    <router-link
                        activeClass="underline"
                        class="mx-3"
                        :to="{
                            name: link.to
                        }"
                    >
                        {{ link.label }}.
                    </router-link>
                </template>
            </div>
        </div>
        <div class="quickmenu gap-2 items-center hidden md:flex">
            <div class="gap-2 pr-2 flex">
                <template v-for="(link, index) in socialLinks" key="index">
                    <div class="social">
                        <component :is="link.icon" class="quickmenu-links" />
                    </div>
                </template>
            </div>

            <!-- <div class="theme flex gap-1">
                <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                        class="relative w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-slate-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-slate-600 peer-checked:bg-slate-600"
                    ></div>
                </label>
                <div>
                    <component :is="DarkThemeSVG" stroke="#333" />
                </div>
            </div> -->
        </div>
    </header>
</template>

<style scoped lang="scss">
.quickmenu-links {
    cursor: pointer;
    &:hover {
        stroke: var(--link-color-hover);
    }
}
.navigation-active {
    border-radius: 2px;
    height: 4px;
    box-shadow: 0 2px 25px 2px #fff;
}
.navigation-section {
    backdrop-filter: blur(15px);
    background-color: rgba(242, 242, 242, 0.5);
    border: 1px solid rgba(242, 242, 242, 0.21);
    border-radius: 24px;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    display: flex;
    position: relative;
    box-shadow: 0 10px 25px #00000026;
}
</style>
