<template>
    <div class="service-card">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
  },
});
</script>

<style lang="scss" scoped>
.service-card {
    background-color: #fff;
    border: 1px solid lighten($text-color, 40%);
    border-radius: 10px;
    padding: 30px;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    h3 {
        font-size: 24px;
        margin-bottom: 15px;
        color: $secondary-color;
    }

    p {
        font-size: 16px;
        color: $text-color;
    }
}
</style>

