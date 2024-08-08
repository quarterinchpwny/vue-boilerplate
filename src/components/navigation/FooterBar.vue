<script setup>
import LinkedinSVG from '@/components/svg/LinkedinSVG.vue';
import GithubSVG from '@/components/svg/GithubSVG.vue';
import GitlabSVG from '@/components/svg/GitlabSVG.vue';
import DarkThemeSVG from '@/components/svg/DarkThemeSVG.vue';
import LightThemeSVG from '@/components/svg/LightThemeSVG.vue';

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
    <footer>
        <div class="p-5 container md:mx-auto py-16 sm:px-6 lg:px-8">
            <div>
                <div class="flex justify-center gap-6 sm:justify-end">
                    <div class="gap-2 pr-2 flex">
                        <template v-for="(link, index) in socialLinks" key="index">
                            <div class="social">
                                <component :is="link.icon" class="quickmenu-links" />
                            </div>
                        </template>
                    </div>
                </div>

                <div class="mt-8 sm:flex sm:items-center sm:justify-between">
                    <div class="flex justify-center sm:justify-start">qipz.</div>

                    <p class="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
                        Copyright &copy; 2022. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped lang="scss">
.quickmenu-links {
    cursor: pointer;
    &:hover {
        stroke: var(--link-color-hover);
    }
}
</style>
