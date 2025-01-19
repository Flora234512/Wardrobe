<template>
    <q-card>
        <img src="@/assets/img/clothing.jpeg" alt="dings"/>
        <q-card-section>
            <div class="text-h6">{{clothe.name}}</div>
            <q-chip color="secondary" text-color="white">Size: {{clothe.size}}</q-chip>
            <q-chip color="secondary" text-color="white">Location: {{clothe.closet}}</q-chip>
            <q-chip color="secondary" text-color="white">Color: {{clothe.acolor}}</q-chip>
            <q-chip color="secondary" text-color="white">Category: {{clothe.category}}</q-chip>
        </q-card-section>
    </q-card>
</template>

<script setup>
    import {ref} from "vue";

    defineProps({
        clothe: {
            type: Object,
            required: true
        }
    })
</script>
