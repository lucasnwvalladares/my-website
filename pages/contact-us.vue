<template>
    <section class="contact-us">
        <!-- Header Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>Contact Us</h1>
                <p>Let's discuss how we can help take your business to the next level</p>
            </div>
        </section>

        <!-- Wrapper for all content sections -->
        <div class="content-wrapper">
            <!-- Main Content Section -->
            <section class="main-content">
                <v-row align="center">
                    <v-col cols="12" md="6">
                        <div class="text-content">
                            <h2>Get in Touch</h2>
                            <p>
                                We're ready to partner with you to take your business to the next level. Whether you're looking for custom software, consulting, or electronics maintenance, let's discuss how we can help.
                            </p>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-email</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>Email</v-list-item-title>
                                        <v-list-item-subtitle>lucasnwvalladares@gmail.com</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-phone</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>Phone</v-list-item-title>
                                        <v-list-item-subtitle>+55 (19) 99836-9902</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-map-marker</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>Address</v-list-item-title>
                                        <v-list-item-subtitle>Campinas, SP - Brazil</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon>mdi-clock-outline</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>Working Hours</v-list-item-title>
                                        <v-list-item-subtitle>Monday - Friday, 9:00 AM - 6:00 PM</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-card class="pa-4">
                            <h3 class="text-h5 mb-4">Contact Form</h3>
                            <v-form @submit.prevent="submitForm" action="https://formspree.io/f/xrbggqwq" method="POST">
                                <v-text-field
                                    v-model="form.name"
                                    name="name"
                                    label="Name"
                                    required
                                ></v-text-field>
                                <v-text-field
                                    v-model="form.email"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    required
                                ></v-text-field>
                                <v-textarea
                                    v-model="form.message"
                                    name="message"
                                    label="Message"
                                    required
                                ></v-textarea>
                                <v-btn
                                    type="submit"
                                    color="primary"
                                    block
                                    :loading="loading"
                                >
                                    Send Message
                                </v-btn>
                            </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </section>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    name: '',
    email: '',
    message: ''
});

const loading = ref(false);

const submitForm = async () => {
    loading.value = true;
    try {
        const response = await fetch('https://formspree.io/f/xrbggqwq', {
            method: 'POST',
            body: JSON.stringify(form.value),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            alert('Message sent successfully!');
            form.value = { name: '', email: '', message: '' };
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error sending message:', error);
        alert('Error sending message. Please try again.');
    } finally {
        loading.value = false;
    }
};
</script>

<style lang="scss" scoped>
.contact-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.hero {
    background: linear-gradient(135deg, $primary-color, $secondary-color);
    color: #fff;
    width: 100%;
    padding: 80px 20px;
    text-align: center;

    .hero-content {
        max-width: 800px;
        margin: 0 auto;

        h1 {
            font-size: 40px;
            margin-bottom: 16px;
            line-height: 1.2;
        }

        p {
            font-size: 18px;
            margin-bottom: 24px;
            color: lighten($text-color, 60%);
        }
    }
}

.content-wrapper {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
}

.main-content {
    margin-bottom: 60px;
}

.text-content {
    h2 {
        font-size: 28px;
        margin-bottom: 20px;
        color: $primary-color;
    }

    p {
        font-size: 16px;
        margin-bottom: 20px;
        color: $text-color;
    }
}

// Responsive adjustments
@media (max-width: 960px) {
    .content-wrapper {
        width: 90%;
    }
}

@media (max-width: 600px) {
    .content-wrapper {
        width: 95%;
    }

    .hero .hero-content h1 {
        font-size: 32px;
    }

    .hero .hero-content p {
        font-size: 16px;
    }

    .text-content h2 {
        font-size: 24px;
    }
}
</style>
