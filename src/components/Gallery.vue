<template>
    <div class="gallery">
        <h1 class="title">My Travels</h1>
        <div class="grid">
            <div v-for="i in 12" :key="i" class="box">
                <div class="box-content" style="--c: #945f31;">
                    <p>Testfeld {{ i }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
};
</script>

<style scoped>
.gallery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    font-size: 24px;
    margin-top: 20px;
}

.grid {
    padding-top: 2cm;
    display: grid;
    grid-template-columns: repeat(
        3,
        1fr
    ); /* Hier sind immer 3 Kästen pro Reihe */
    gap: 90px;
}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    aspect-ratio: 1;
    width: 25vw; /* Jeder Kasten ist 20% der Bildschirmbreite */
    max-width: 25vw; /* Aber nicht breiter als 20% */
    --g: 4px;     /* the gap */
    --b: 7px;    /* border thickness*/
    --c: #ddf29f; /* the color */
    padding: calc(var(--g) + var(--b));
    --_c: #0000 0 25%, var(--c) 0 50%;
    --_g1: repeating-linear-gradient(90deg ,var(--_c)) repeat-x;
    --_g2: repeating-linear-gradient(180deg,var(--_c)) repeat-y;
    background:
        var(--_g1) var(--_p, 25%) 0   ,var(--_g2) 0    var(--_p,125%),
        var(--_g1) var(--_p,125%) 100%,var(--_g2) 100% var(--_p, 25%);
    background-size: 200% var(--b),var(--b) 200%;
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
    color: black;
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
