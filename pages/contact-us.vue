<template>
    <section class="contact-us">
        <h1>Contact Us</h1>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="form.name" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" v-model="form.message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
    name: '',
    email: '',
    message: ''
})

const handleSubmit = () => {
    // Handle form submission logic here
    alert('Message sent!')
    form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.contact-us {
    padding: 80px 20px;
    max-width: 600px;
    margin: 0 auto;
}
.contact-us h1 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 20px;
}
form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.form-group {
    display: flex;
    flex-direction: column;
}
label {
    margin-bottom: 5px;
    font-weight: bold;
}
input, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
button {
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background-color: #555;
}
</style>
