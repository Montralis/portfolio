<template>
    <div class="gallery">
        <img class="background" src="@/assets/img/bg.png" />
        <div class="header">
            <h1 class="title">My Travels</h1>
            <router-link to="/" class="back-link">
                Back to main
            </router-link>        </div>
        <div class="grid">
            <div v-for="(item, index) in travelData" :key="index" class="box" :style="{ '--c': item.frameColor }"
                @click="goToDestination(item)">
                <div class="box-content">
                    <p>{{ item.destination }}</p>
                    <p>{{ item.date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import travelData from '../assets/data/travels.json';

export default {
    name: 'Gallery',
    data() {
        return {
            travelData: travelData
        };
    },
    methods: {
        goToDestination(item) {
            const formattedDate = item.date.replace(/-/g, '');
            const path = `/${item.destination}-${formattedDate}`;
            this.$router.push(path);
        }
    }
};
</script>

<style scoped>
.header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 8vh;
}

.title {
    font-size: 24px;
    position: absolute;
}

.back-link {
    font-size: 16px;
    color: #b7b7b7;
    text-decoration: none;
    position: absolute;
    left: 10vw;
}

.back-link:hover {
    text-decoration: underline;
}

.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.gallery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.grid {
    padding-top: 6vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 90px;
}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    width: 25vw;
    --g: 4px;
    --b: 7px;
    padding: calc(var(--g) + var(--b));
    --_c: #0000 0 25%, var(--c) 0 50%;
    --_g1: repeating-linear-gradient(90deg, var(--_c)) repeat-x;
    --_g2: repeating-linear-gradient(180deg, var(--_c)) repeat-y;
    background:
        var(--_g1) var(--_p, 25%) 0, var(--_g2) 0 var(--_p, 125%),
        var(--_g1) var(--_p, 125%) 100%, var(--_g2) 100% var(--_p, 25%);
    background-size: 200% var(--b), var(--b) 200%;
    cursor: pointer;
    filter: grayscale(50%);
    transition: .3s;
}

.box:hover {
    --_p: 75%;
    filter: grayscale(0%);
}

.box-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    color: rgb(35, 224, 123);
    background-image: url("../assets/img/bg.png");
}

/* Media Query: Wenn die Bildschirmbreite kleiner als 800px ist, wird es nur 2 Kästen pro Reihe sein */
@media (max-width: 800px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Media Query: Wenn die Bildschirmbreite kleiner als 600px ist, wird es nur 1 Kasten pro Reihe sein */
@media (max-width: 600px) {
    .grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
