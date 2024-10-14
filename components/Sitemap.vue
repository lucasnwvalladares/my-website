<template>
    <div class="sitemap">
        <div class="sitemap-content">
            <div class="sitemap-section">
                <h3>Sitemap</h3>
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
                    <li><nuxt-link to="/services">Services</nuxt-link></li>
                    <li><nuxt-link to="/team">Team</nuxt-link></li>
                    <li><nuxt-link to="/contact-us">Contact Us</nuxt-link></li>
                </ul>
            </div>
            <div class="sitemap-section">
                <h3>Contact Us</h3>
                <ul>
                    <li><v-icon class="mr-2" small color="#2ecc71">mdi-email</v-icon> lucasnwvalladares@gmail.com</li>
                    <li><v-icon class="mr-2" small color="#2ecc71">mdi-phone</v-icon> +55 (19) 99836-9902</li>
                    <li><v-icon class="mr-2" small color="#2ecc71">mdi-map-marker</v-icon> Campinas, SP - Brazil</li>
                    <li><v-icon class="mr-2" small color="#2ecc71">mdi-clock-outline</v-icon> Mon - Fri, 9:00 AM - 6:00 PM</li>
                </ul>
            </div>
            <div class="sitemap-section">
                <h3>Connect With Us</h3>
                <div class="social-links">
                    <v-row>
                        <v-col cols="12">
                            <a href="https://www.linkedin.com/company/valla-tecnologies/" target="_blank" aria-label="Valla LinkedIn">
                                <v-icon class="mr-2" small color="#2ecc71">mdi-linkedin</v-icon> Valla
                            </a>
                        </v-col>
                        <v-col cols="12">
                            <a href="https://www.linkedin.com/in/lucas-valladares/" target="_blank" aria-label="CEO LinkedIn">
                                <v-icon class="mr-2" small color="#2ecc71">mdi-linkedin</v-icon> Lucas Valladares - Founder and CEO
                            </a>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// No script needed for this component
</script>

<style lang="scss" scoped>
.sitemap {
    background-color: lighten($primary-color, 10%);
    color: #fff;
    padding: 40px 0;
}

.sitemap-content {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.sitemap-section {
    flex: 1;
    min-width: 200px;

    h3 {
        font-size: 18px;
        margin-bottom: 15px;
        color: $secondary-color;
    }

    ul {
        list-style-type: none;
        padding: 0;

        li {
            margin-bottom: 10px;
        }
    }

    a {
        color: #fff;
        text-decoration: none;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 0.8;
        }
    }
}

.social-links {
    display: flex;
    gap: 15px;

    a {
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 0.8;
        }
    }
}

@media (max-width: 768px) {
    .sitemap-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .sitemap-section {
        margin-bottom: 30px;
    }

    .social-links {
        justify-content: center;
    }
}
</style>
