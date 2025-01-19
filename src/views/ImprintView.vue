<template>
    <q-page padding>
        <q-card>
            <q-card-section>
                Diese PWA wurde von Flora Hauser entwickelt.
            </q-card-section>
            <q-separator/>
            <q-card-actions>
                &copy; 2025 HTL Wien West
            </q-card-actions>
        </q-card>
    </q-page>
</template>

<script setup>
    import {onMounted} from "vue";

    onMounted(() => console.log('Flora Hauser'))
</script>
