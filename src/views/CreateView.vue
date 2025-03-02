<template>
    <q-page padding>
        <form @submit.prevent="saveClothing">
            <q-input v-model="name" label="Name"/>
            <q-select v-model="category" label="Kategorie" :options="categories" option-label="name" option-value="value"/>
            <q-input v-model="color" label="Farbe"/>
            <q-input v-model="size" label="Größe"/>
            <q-input v-model="location" label="Ort"/>
            <q-btn color="primary" class="q-mt-md" @click="showImageDialog = true">Bild aufnehmen</q-btn>
            <q-btn color="primary" class="q-mt-md q-ml-md" type="submit">Speichern</q-btn>

            <img :src="image" v-if="image" alt="Bild">

            <q-dialog v-model="showImageDialog" full-height full-width>
                <q-card>
                    <q-card-section style="height:100%;">
                        <video ref="video" autoplay muted/>
                        <q-btn color="primary" icon="camera" fab class="pic-btn" @click="takePicture"/>
                    </q-card-section>
                </q-card>
            </q-dialog>
        </form>
    </q-page>
</template>

<script setup>
    import {ref, useTemplateRef, watch} from "vue";
    import {useWardrobeStore} from "../stores/wardrobe.js";
    import {useRouter} from "vue-router";

    const categories = [
        {
            name: 'Pants',
            value: 'pants'
        },
        {
            name: 'Tops',
            value: 'tops'
        },
        {
            name: 'Shoes',
            value: 'shoes'
        },
        {
            name: 'Hoodies',
            value: 'hoodies'
        },
        {
            name: 'Accessories',
            value: 'accessories'
        },
        {
            name: 'Pants',
            value: 'pants'
        },
    ]

    const name = ref('')
    const category = ref('')
    const color = ref('')
    const size = ref('')
    const location = ref('')
    const image = ref('')
    const showImageDialog = ref(false)
    const videoEl = useTemplateRef('video')
    const wardrobeStore = useWardrobeStore()
    const router = useRouter()

    watch(showImageDialog, async () => {
        if(!showImageDialog.value) {
            return
        }
        const media = await window.navigator.mediaDevices.getUserMedia({audio: false, video: true})
        if(videoEl.value) {
            const videoStyle = getComputedStyle(videoEl.value)
            videoEl.value.width = videoStyle.width
            videoEl.value.height = videoStyle.height
            videoEl.value.srcObject = media
        }
    })

    function takePicture() {
        const canvas = document.createElement('canvas')
        canvas.width = videoEl.value.videoWidth
        canvas.height = videoEl.value.videoHeight
        canvas.getContext('2d').drawImage(videoEl.value, 0, 0, canvas.width, canvas.height)
        image.value = canvas.toDataURL('image/png')
        showImageDialog.value = false
    }

    function saveClothing() {
        wardrobeStore.clothes.push({
            item_id: Math.round(Math.random()*1000000).toString(),
            name: name.value,
            category: category.value.value,
            color: color.value,
            size: size.value,
            location: location.value,
            img: image.value
        })
        router.push('/')
    }
</script>

<style scoped>
video {
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
}

.pic-btn {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
