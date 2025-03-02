<template>
    <q-card>
        <img :src="image" v-if="image" alt="Aufgenommenes Foto"/>
        <img v-else src="@/assets/img/clothing.jpeg" alt="dings"/>
        <q-card-section>
            <div class="row justify-between">
                <div class="text-h6">{{clothe.name}}</div>
                <q-btn fab-mini icon="delete" color="red" @click="showConfirmDeleteDialog=true"/>
            </div>
            <q-chip color="secondary" text-color="white">Size: {{clothe.size}}</q-chip>
            <q-chip color="secondary" text-color="white">Location: {{clothe.closet}}</q-chip>
            <q-chip color="secondary" text-color="white">Color: {{clothe.acolor}}</q-chip>
            <q-chip color="secondary" text-color="white">Category: {{clothe.category}}</q-chip>
        </q-card-section>
    </q-card>

    <q-dialog v-model="showConfirmDeleteDialog" persistent>
        <q-card>
            <q-card-section class="row items-center">
                <span class="q-ml-sm">Bist du sicher, dass du das Kleidungsstück löschen möchtest?</span>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="Nein" color="primary" v-close-popup />
                <q-btn flat label="Ja" color="primary" v-close-popup @click="deleteClothing" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script setup>
    import {computed, ref} from "vue";
    import {useWardrobeStore} from "../stores/wardrobe.js";

    const props = defineProps({
        clothe: {
            type: Object,
            required: true
        }
    })

    const showConfirmDeleteDialog = ref(false)
    const image = computed(() => Array.isArray(props.clothe.img) ? false : props.clothe.img)
    const wardrobeStore = useWardrobeStore()

    function deleteClothing() {
        const clotheIndex = wardrobeStore.clothes.findIndex(c => c.item_id === props.clothe.item_id)
        if(clotheIndex >= 0) {
            wardrobeStore.clothes.splice(clotheIndex, 1)
        }
    }
</script>
