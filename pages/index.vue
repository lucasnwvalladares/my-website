<template>
    <section class="home">
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>Welcome to Valla – Innovative Software Solutions for Your Business</h1>
                <p>
                    At Valla, we specialize in creating customized software that elevates business performance
                    and optimizes operations. From web and mobile apps to ERP systems, we provide cutting-edge
                    technology to help you thrive in a competitive market. Explore our services and see how we
                    can transform your business.
                </p>
                <nuxt-link to="/contact-us" class="btn-primary">Get Started</nuxt-link>
            </div>
        </section>

        <!-- Services Section -->
        <section class="services">
            <h2>Our Services</h2>
            <div class="services-grid">
                <ServiceCard
                    title="Web & Mobile Applications"
                    description="Developing user-friendly and responsive applications tailored to your business needs."
                />
                <ServiceCard
                    title="ERP Systems"
                    description="Implementing comprehensive ERP solutions to streamline your business operations."
                />
                <ServiceCard
                    title="Custom Software Development"
                    description="Building customized software solutions to enhance your business performance."
                />
            </div>
        </section>

        <!-- Why Choose Us Section -->
        <section class="why-choose-us">
            <h2>Why Choose Valla?</h2>
            <ul class="benefits-list">
                <li>
                    <strong>Tailored Solutions</strong> for unique business needs
                </li>
                <li>
                    <strong>Proven Experience</strong> across diverse industries
                </li>
                <li>
                    <strong>Commitment to Excellence</strong> in every project
                </li>
            </ul>
            <nuxt-link to="/contact-us" class="btn-secondary">Contact Us</nuxt-link>
        </section>

        <!-- Call to Action Section -->
        <section class="cta">
            <h2>Ready to take your business to the next level?</h2>
            <nuxt-link to="/contact-us" class="btn-primary">Get in Touch Today!</nuxt-link>
        </section>
    </section>
</template>

<script setup>
import ServiceCard from '~/components/ServiceCard.vue';
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.hero {
    background: linear-gradient(135deg, $primary-color, $secondary-color);
    color: #fff;
    width: 100%;
    padding: 100px 20px;
    text-align: center;

    .hero-content {
        max-width: 800px;
        margin: 0 auto;

        h1 {
            font-size: 48px;
            margin-bottom: 20px;
            line-height: 1.2;
        }

        p {
            font-size: 20px;
            margin-bottom: 30px;
            color: lighten($text-color, 60%);
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
}

.services {
    padding: 60px 20px;
    text-align: center;
    background-color: $background-light;

    h2 {
        font-size: 36px;
        margin-bottom: 40px;
        color: $primary-color;
    }

    .services-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;

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
    }
}

.why-choose-us {
    padding: 60px 20px;
    text-align: center;

    h2 {
        font-size: 36px;
        margin-bottom: 30px;
        color: $primary-color;
    }

    .benefits-list {
        list-style: none;
        padding: 0;
        margin-bottom: 30px;

        li {
            font-size: 18px;
            margin: 15px 0;
            color: $text-color;

            strong {
                color: $secondary-color;
            }
        }
    }

    .btn-secondary {
        background-color: $button-secondary;
        color: #fff;
        padding: 15px 30px;
        border: none;
        border-radius: 5px;
        text-decoration: none;
        font-size: 18px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: darken($button-secondary, 10%);
        }
    }
}

.cta {
    background-color: $primary-color;
    color: #fff;
    width: 100%;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {
        font-size: 32px;
        margin-bottom: 20px;
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

/* Responsive Design */
@media (max-width: 768px) {
    .hero .hero-content h1 {
        font-size: 32px;
    }

    .services .services-grid {
        flex-direction: column;
        align-items: center;
    }

    .services .service-card {
        width: 90%;
    }

    .why-choose-us h2,
    .services h2 {
        font-size: 28px;
    }

    .cta h2 {
        font-size: 24px;
    }
}
</style>