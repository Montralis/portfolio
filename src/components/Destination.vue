<template>
    <div>
        <h1>{{ destination }}</h1>
        <p>Date: {{ date }}</p>
    </div>
</template>

<script>
export default {
    name: 'Destination',
    data() {
        return {
            destination: this.$route.params.destination,
            date: this.$route.params.date,
        };
    },
    created() {
        this.loadData();
    },
    methods: {
        loadData() {
            console.log(`Loading data for ${this.destination} on ${this.date}`);
        },
    },
};
</script>