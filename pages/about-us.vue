<template>
    <section class="about-us">
        <!-- Header Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>About Us</h1>
                <p>Empowering businesses through innovative technology solutions</p>
            </div>
        </section>

        <!-- Wrapper for all content sections -->
        <div class="content-wrapper">
            <!-- Main Content Section -->
            <section class="main-content">
                <v-row align="center">
                    <v-col cols="12" md="6">
                        <div class="text-content">
                            <h2>Our Story</h2>
                            <p>
                                At <strong>Valla</strong>, we are committed to providing cutting-edge technology solutions to drive business growth. Founded and led by Lucas Valladares, <strong>Valla</strong> has a singular focus: developing software that meets the specific needs of each client. With expertise in software development, business consulting, and electronics maintenance, we deliver solutions that enhance efficiency, reduce costs, and help businesses stay ahead in a rapidly changing market.
                            </p>
                            <p>
                                Our founder's passion for technology and innovation has resulted in a diverse portfolio of successful projects, from management software for medical professionals to ERP systems and beyond. We pride ourselves on our hands-on approach and dedication to exceeding client expectations.
                            </p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="text-center">
                        <img src="../public/imgs/about-us-2.jpg" alt="About Valla" class="section-image" />
                    </v-col>
                </v-row>
            </section>

            <!-- Mission Section -->
            <section class="mission-section">
                <h2>Our Mission</h2>
                <p>To empower businesses through innovative technology, creating value and driving growth.</p>
            </section>

            <!-- Core Values Section -->
            <section class="core-values">
                <h2>Our Core Values</h2>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-card class="mx-auto pa-4" tile>
                            <v-icon x-large class="mb-4" color="#2ecc71">mdi-lightbulb-on</v-icon>
                            <h3>Innovation</h3>
                            <p>Constantly pushing boundaries to deliver cutting-edge solutions</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="mx-auto pa-4" tile>
                            <v-icon x-large class="mb-4" color="#2ecc71">mdi-account-group</v-icon>
                            <h3>Client-Centric</h3>
                            <p>Tailoring our approach to meet each client's unique needs</p>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="mx-auto pa-4" tile>
                            <v-icon x-large class="mb-4" color="#2ecc71">mdi-check-decagram</v-icon>
                            <h3>Excellence</h3>
                            <p>Striving for the highest quality in everything we do</p>
                        </v-card>
                    </v-col>
                </v-row>
            </section>

            <!-- Call to Action Section -->
            <section class="cta">
                <h2>Ready to transform your business with Valla?</h2>
                <nuxt-link to="/contact-us" class="btn-primary">Get in Touch Today!</nuxt-link>
            </section>
        </div>
    </section>
</template>

<script setup>
// Add any necessary imports or logic here
</script>

<style lang="scss" scoped>
.about-us {
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
    padding: 0;
    padding-top: 40px;
}

.main-content,
.mission-section,
.core-values {
    margin-bottom: 60px;
}

.section-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 10px;
}

.text-content {
    h2 {
        font-size: 28px;
        margin-bottom: 20px;
        color: $primary-color;
    }

    p {
        font-size: 16px;
        margin-bottom: 15px;
        color: $text-color;
    }
}

.mission-section {
    text-align: center;
    background-color: $background-light;
    padding: 40px;
    border-radius: 10px;

    h2 {
        font-size: 28px;
        margin-bottom: 20px;
        color: $primary-color;
    }

    p {
        font-size: 18px;
        font-weight: bold;
        color: $secondary-color;
    }
}

.core-values {
    h2 {
        font-size: 28px;
        margin-bottom: 30px;
        color: $primary-color;
        text-align: center;
    }

    .v-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        h3 {
            font-size: 20px;
            margin-bottom: 10px;
            color: $secondary-color;
        }

        p {
            font-size: 14px;
            color: $text-color;
        }
    }
}

.cta {
    background-color: $primary-color;
    color: #fff;
    width: 100vw; // Full viewport width
    margin-left: calc(-50vw + 50%); // Center the section
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {
        font-size: 32px;
        margin-bottom: 20px;
        max-width: 800px; // Limit text width for better readability
    }

    .btn-primary {
        background-color: $button-primary;
        color: #fff;
        padding: 15px 30px;
        border: none;
        border-radius: 5px;
        text-decoration: none;
        font-size: 18px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: darken($button-primary, 10%);
        }
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

    .text-content h2,
    .mission-section h2,
    .core-values h2 {
        font-size: 24px;
    }

    .cta h2 {
        font-size: 28px;
    }
}
</style>
