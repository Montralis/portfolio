<template>
    <div class="hero">
        <img class="background" src="@/assets/img/bg.png" />
        <div class="hero__container" ref="container">
            <div class="background-images">
                <div class="background-img bg1" data-value="-2"></div>
                <div class="background-img bg2" data-value="6"></div>
                <div class="background-img bg3" data-value="4"></div>
                <div class="background-img bg4" data-value="-6"></div>
                <div class="background-img bg5" data-value="8"></div>
                <div class="background-img bg6" data-value="-4"></div>
                <div class="background-img bg7" data-value="5"></div>
                <div class="background-img bg8" data-value="-9"></div>
                <div class="background-img bg9" data-value="-5"></div>
            </div>
            <div class="hero__main">
                <h5 class="hero__title">Leon Thomanek</h5>
                <h3 class="hero__sub-title">Portfolio Page</h3>
                <br />
                <h3 v-if="currentLanguage === 'de'" class="hero__text">
                    Hi, ich bin Leon. Willkommen auf meiner Portfolio Page. Ich
                    bin Software Entwickler und im Themengebiet Cloud Computing
                    für sicherheitsrelevante Software spezialisiert. Unten auf
                    der Seite findest du alle relevanten Links zu meinen
                    Profilen.
                </h3>
                <h3 v-else-if="currentLanguage === 'eng'" class="hero__text">
                    Hi, I'm Leon. Welcome to my portfolio page. I'm a software
                    developer specializing in cloud computing for
                    security-related software. At the bottom of the page you
                    will find all relevant links to my profiles.
                </h3>
                <br />
                <div class="language-buttons">
                    <h3
                        @click="setLanguage('de')"
                        :class="{ 'active-lang': currentLanguage === 'de' }"
                    >
                        DE
                    </h3>
                    <h3>|</h3>
                    <h3
                        @click="setLanguage('eng')"
                        :class="{ 'active-lang': currentLanguage === 'eng' }"
                    >
                        ENG
                    </h3>
                </div>
            </div>
            <div class="hero__footer">
                <li class="hero__links">
                    <ul>
                        <a
                            class="hero__link"
                            href="https://medium.com/@leonth123"
                            target="__blank"
                            title="Leon Thomanek Medium"
                            >Medium</a
                        >
                    </ul>
                    <ul>
                        <a
                            class="hero__link"
                            href="https://github.com/Montralis"
                            target="__blank"
                            title="Leon Thomanek GitHub"
                            >Github</a
                        >
                    </ul>
                    <ul>
                        <a
                            class="hero__link"
                            href="https://www.linkedin.com/in/leon-thomanek-832633266/"
                            target="__blank"
                            title="Leon Thomanek LinkedIn"
                            >LinkedIn</a
                        >
                    </ul>
                    <ul>
                        <router-link to="/gallery" class="hero__link"
                            >Gallery</router-link
                        >
                    </ul>
                </li>
                <div class="hero__copyright">
                    © 2023 Leon Thomanek | Germany
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Main',
    components: {},
    data() {
        return {
            currentLanguage: 'eng',
            isMouseMoving: true,
        };
    },
    mounted() {
        document.addEventListener('mousemove', this.parallax);
        this.randomMove();
        setInterval(this.randomMove, 10); // randomMove wird alle 1000 Millisekunden (1 Sekunde) aufgerufen
    },
    beforeUnmount() {
        document.removeEventListener('mousemove', this.parallax);
    },
    methods: {
        getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        parallax(e) {
            this.isMouseMoving = true;
            document
                .querySelectorAll('.background-img')
                .forEach(function (move) {
                    var moving_value = move.getAttribute('data-value');
                    var x = (e.clientX * moving_value) / 250;
                    var y = (e.clientY * moving_value) / 250;

                    move.style.transform =
                        'translateX(' + x + 'px) translateY(' + y + 'px)';
                });
        },
        randomMove() {
            if (!this.isMouseMoving) {
                document.querySelectorAll('.background-img').forEach((move) => {
                    var moving_value = move.getAttribute('data-value');
                    var x = (this.getRandomNumber(0, 100) * moving_value) / 250;
                    var y = (this.getRandomNumber(0, 100) * moving_value) / 250;

                    move.style.transform =
                        'translateX(' + x + 'px) translateY(' + y + 'px)';
                });
            }
        },
        setLanguage(lang) {
            this.currentLanguage = lang;
        },
    },
};
</script>

<style scoped>
.active-lang {
    text-decoration: underline;
}
.language-buttons {
    display: flex;
}

.language-buttons h3 {
    margin-right: 10px; /* Abstand zwischen den Buttons anpassen */
    color: #8a8a8a;
}

.hero {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
}

/* Hintergrundbild in voller Größe, das den gesamten Heldenbereich abdeckt */
.background {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Ändert die Größe der Hintergrundbilder, sodass sie sich dem Bildschirm anpassen */
.background-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    opacity: 0.2; /* Adjust the opacity as per your preference */
}

.background-img {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    opacity: 0.2; /* Opazität nach Bedarf anpassen */
    z-index: 1;
}

.hero__container {
    display: flex;
    justify-content: space-between; /* Ändern Sie hier von "space-between" zu "flex-start" */
    flex-direction: column;
    position: relative;
    max-width: 1480px;
    height: 100vh;
    margin: 0px auto;
    padding: 40px 20px 0px 20px; /* Passen Sie den oberen Padding-Wert an, um den Abstand zum oberen Rand zu steuern */
}

.hero__main {
    max-width: 678px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: flex-start;
    z-index: 2;
}

.hero__title {
    font-size: 72px;
    font-weight: 700;
    line-height: 91px;
}

.hero__sub-title {
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    padding-top: 10px;
}

.hero__text {
    font-size: 22px;
    font-weight: 400;
    padding-top: 10px;
    color: #d8d8d8;
}

.hero__lang {
    font-size: 18px;
    font-weight: 400;
    padding-top: 10px;
    color: #696969;
}

.hero__footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30px;
    max-height: 200px;
    height: 100%;
    justify-content: center; /* Ändern Sie die Ausrichtung hier, wenn Sie es horizontal haben möchten */
    align-items: center;
    font-size: 70%;
    z-index: 2;
}

.hero__links {
    display: flex;
    margin: auto;
    max-width: 536px;
    width: 100%;
    justify-content: space-between;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
}

.hero__link:hover {
    text-decoration: underline;
}

.hero__container h2 {
    position: absolute;
    top: 30px; /* Adjust the top value as per your preference */
    left: 50%;
    transform: translateX(-50%);
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-align: center;
}

.hero__container h2 span {
    font-size: 20px;
    font-weight: 400;
    display: block;
}

@media (max-width: 707px) {
    .hero__main {
        padding-top: 50px;
    }
}

@media (max-width: 555px) {
    .hero__main {
        padding-top: 40px;
    }
    .hero__title {
        line-height: 70px;
    }
    .hero__title {
        font-size: 65px;
        line-height: 60px;
    }
    .hero__sub-title {
        font-size: 26px;
    }
    .hero__btn {
        margin: 40px auto 70px;
    }
}

@media (max-width: 480px) {
    .hero__title {
        font-size: 45px;
        line-height: 40px;
    }
    .hero__links {
        flex-direction: column;
        align-items: center;
        gap: 15px;
        margin-bottom: 5vh;
    }
    .hero__container h2 {
        font-size: 36px;
    }
    .hero__container h2 span {
        font-size: 16px;
    }
    .hero__footer {
        max-height: unset;
    }
}

.bg1 {
    background-image: url('@/assets/img/planets/1.png');
}

.bg2 {
    background-image: url('@/assets/img/planets/2.png');
}

.bg3 {
    background-image: url('@/assets/img/planets/3.png');
}

.bg4 {
    background-image: url('@/assets/img/planets/4.png');
}

.bg5 {
    background-image: url('@/assets/img/planets/5.png');
}

.bg6 {
    background-image: url('@/assets/img/planets/6.png');
}

.bg7 {
    background-image: url('@/assets/img/planets/7.png');
}

.bg8 {
    background-image: url('@/assets/img/planets/8.png');
}

.bg9 {
    background-image: url('@/assets/img/planets/9.png');
}
</style>
