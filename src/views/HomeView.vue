<script setup>
    import {useWardrobeStore} from "../stores/wardrobe.js";
    import ClotheCard from "../components/ClotheCard.vue";

    const wardrobeStore = useWardrobeStore()
</script>

<template>
    <q-page padding>
        <div class="row q-col-gutter-md">
            <div class="col-12 col-sm-6 col-md-4 col-xl-3" v-for="clothe in wardrobeStore.clothes" :key="clothe.item_id">
                <ClotheCard :clothe="clothe"/>
            </div>
        </div>
    </q-page>
</template>

<style>
* {
  font-family: Lato, sans-serif;
}
</style>
