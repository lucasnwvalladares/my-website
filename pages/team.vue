<template>
    <section class="team">
        <!-- Header Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>Our Team</h1>
                <p>Meet the people behind Valla's innovative solutions</p>
            </div>
        </section>

        <!-- Wrapper for all content sections -->
        <div class="content-wrapper">
            <!-- Team Introduction -->
            <section class="team-intro">
                <p>
                    At Valla, we believe in strong leadership and delivering exceptional results. Led by Lucas Valladares, the founder and CEO, our company thrives on the vision of bringing technological solutions to businesses of all sizes.
                </p>
            </section>

            <!-- Team Member Section -->
            <section class="team-member">
                <v-row align="center">
                    <v-col cols="12" md="4" class="text-center">
                        <v-avatar size="200">
                            <img src="../public/imgs/profile.jpg" alt="Lucas Valladares">
                        </v-avatar>
                    </v-col>
                    <v-col cols="12" md="8">
                        <div class="text-content">
                            <h2>Lucas Valladares</h2>
                            <h3>Founder & CEO</h3>
                            <p>
                                With a background in technology and a passion for software development, Lucas Valladares brings a wealth of knowledge and experience to the table. He is dedicated to building custom solutions that solve real-world challenges, ensuring that every project meets the highest standards of quality and innovation.
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </section>

            <!-- Call to Action Section -->
            <section class="cta">
                <h2>Ready to work with our expert team?</h2>
                <nuxt-link to="/contact-us" class="btn-primary">Get in Touch Today!</nuxt-link>
            </section>
        </div>
    </section>
</template>

<script setup>
// Add any necessary imports or logic here
</script>

<style lang="scss" scoped>
.team {
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

.team-intro,
.team-member {
    margin-bottom: 60px;
}

.team-intro {
    text-align: center;
    font-size: 18px;
    color: $text-color;
    max-width: 800px;
    margin: 0 auto 60px;
}

.team-member {
    .v-avatar {
        margin-bottom: 20px;
    }

    .text-content {
        h2 {
            font-size: 28px;
            margin-bottom: 10px;
            color: $primary-color;
        }

        h3 {
            font-size: 20px;
            margin-bottom: 20px;
            color: $secondary-color;
        }

        p {
            font-size: 16px;
            color: $text-color;
            line-height: 1.6;
        }
    }
}

.cta {
    background-color: $primary-color;
    color: #fff;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {
        font-size: 32px;
        margin-bottom: 20px;
        max-width: 800px;
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

    .team-intro {
        font-size: 16px;
    }

    .team-member .text-content {
        h2 {
            font-size: 24px;
        }

        h3 {
            font-size: 18px;
        }

        p {
            font-size: 14px;
        }
    }

    .cta h2 {
        font-size: 28px;
    }
}
</style>
