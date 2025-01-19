import {defineStore} from "pinia";
import {ref} from "vue";
import defaultClothes from '@/assets/data/wardrobe.json'

export const useWardrobeStore = defineStore('wardrobe', () => {
    const clothes = ref(defaultClothes)

    return {
        clothes
    }
})
