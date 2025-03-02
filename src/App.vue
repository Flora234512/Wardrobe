<script setup>
    import {RouterView} from 'vue-router';
    import {ref} from "vue";

    const drawerModel = ref(false)
</script>

<template>
    <q-layout view="hHh lpR fFf">

        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="drawerModel = !drawerModel"/>

                <q-toolbar-title>
                    <q-avatar color="white">
                        <img src="@/assets/img/logo.png" alt="Logo">
                    </q-avatar>
                    Wardrobe
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="drawerModel" side="left" bordered>
            <q-scroll-area class="fit">
                <q-list>
                    <q-item v-ripple to="/">
                        <q-item-section avatar>
                            <q-icon name="home" />
                        </q-item-section>
                        <q-item-section>
                            Übersicht
                        </q-item-section>
                    </q-item>
                    <q-item v-ripple to="/create">
                        <q-item-section avatar>
                            <q-icon name="add" />
                        </q-item-section>
                        <q-item-section>
                            Erstellen
                        </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item v-ripple to="/impressum">
                        <q-item-section avatar>
                            <q-icon name="error med" />
                        </q-item-section>
                        <q-item-section>
                            Impressum
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <router-view/>
        </q-page-container>

    </q-layout>
</template>
