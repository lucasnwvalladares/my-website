<template>
    <section class="home">
        <!-- Header Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>Services Valla Provides</h1>
                <p>Explore our customized software solutions to boost your business.</p>
            </div>
        </section>

        <!-- Wrapper for all content sections -->
        <div class="content-wrapper">
            <!-- Software Development Section -->
            <section class="software-development-section">
                <v-row>
                    <v-col cols="12" md="6" class="text-center">
                        <img src="../public/imgs/software-development.jpg" alt="Software Development" class="section-image" />
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="text-content">
                            <h2>Software Development</h2>
                            <p>
                                We develop personalized software solutions that drive innovation and efficiency. Whether you need a custom ERP system or a dynamic mobile app, Valla has you covered.
                            </p>
                            <v-card
                                class="mx-auto"
                                max-width="100%"
                                flat
                                tile
                            >
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-monitor</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Web and mobile apps
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-server</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            ERP - Enterprise Resource Planning Systems
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-pencil</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Project design and backlog creation
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-pencil</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Prototyping and data modeling
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-web</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            E-commerce and website development
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </section>

            <!-- Software Cases -->
            <section class="service-section">
                <h2 class="mb-8">Cases of Software Development:</h2>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-card class="mx-auto pa-2" max-width="60%" tile style="height: 100%;">
                            <v-icon x-large class="ma-2" color="#2ecc71">mdi-hospital</v-icon>
                            <v-card-text>Medical management software</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="mx-auto pa-2" max-width="60%" tile style="height: 100%;">
                            <v-icon x-large class="ma-2" color="#2ecc71">mdi-bed</v-icon>
                            <v-card-text>Patient and room management systems for hospitals</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="mx-auto pa-2" max-width="60%" tile style="height: 100%;">
                            <v-icon x-large class="ma-2" color="#2ecc71">mdi-shield-check</v-icon>
                            <v-card-text>ISO 27000 implementation control applications</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="mx-auto pa-2" max-width="60%" tile style="height: 100%;">
                            <v-icon x-large class="ma-2" color="#2ecc71">mdi-account-group</v-icon>
                            <v-card-text>Workforce management and project assignment system</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="mx-auto pa-2" max-width="60%" tile style="height: 100%;">
                            <v-icon x-large class="ma-2" color="#2ecc71">mdi-vuejs</v-icon>
                            <v-card-text>Vue.js template creation tool</v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card class="mx-auto pa-2" max-width="60%" tile style="height: 100%;">
                            <v-icon x-large class="ma-2" color="#2ecc71">mdi-diamond-stone</v-icon>
                            <v-card-text>Mining project valuation system</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </section>

            <!-- Administrative, Financial & Commercial Consulting Section -->
            <section class="consulting-section">
                <v-row no-gutters align="center">
                    <v-col cols="12" md="6">
                        <div class="text-content">
                            <h2>Administrative, Financial & Commercial Consulting</h2>
                            <p>
                                Our consulting services help streamline your business operations, improve financial performance, and enhance your commercial strategies.
                            </p>
                            <v-card
                                class="mx-auto"
                                max-width="100%"
                                flat
                                tile
                            >
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-account-group</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Human resources management and employee training
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-cash-multiple</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Payroll administration
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-file-chart</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Creation of management reports
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-warehouse</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Stock planning and management
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-truck-delivery</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Purchasing and logistics
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-bank</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Financial and asset management
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-currency-usd</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Cost/pricing definition for products and services
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-handshake</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Debt negotiation and legal agreements
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-bullhorn</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Marketing and customer prospecting
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-lightbulb-on-outline</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Sales pitch and technology innovation
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="text-center">
                        <img src="../public/imgs/consulting.png" alt="Administrative, Financial & Commercial Consulting" class="section-image" />
                    </v-col>
                </v-row>
            </section>

            <!-- Electronics Maintenance Section -->
            <section class="maintenance-section">
                <v-row no-gutters align="center">
                    <v-col cols="12" md="6" class="text-center">
                        <img src="../public/imgs/maintenance.jpg" alt="Electronics Maintenance" class="section-image" />
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="text-content">
                            <h2>Electronics Maintenance</h2>
                            <p>
                                We offer comprehensive maintenance and repair services for electronic devices, ensuring your equipment remains operational and efficient.
                            </p>
                            <v-card
                                class="mx-auto"
                                max-width="100%"
                                flat
                                tile
                            >
                                <v-list dense>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-laptop</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Computers and laptops
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-cellphone</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Smartphones and tablets
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-printer</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Printers and peripheral devices
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-cog</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Software configuration and updates
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-memory</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Component replacement and hardware repair
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-magnify</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Diagnostics and troubleshooting
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </section>

            <!-- Call to Action Section -->
            <section class="cta">
                <h2>Ready to take your business to the next level?</h2>
                <nuxt-link to="/contact-us" class="btn-primary">Get in Touch Today!</nuxt-link>
            </section>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
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
}

.service-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 80px 20px;
    
    h2 {
        font-size: 28px;
        margin-bottom: 20px;
        color: $primary-color;
    }

    p {
        font-size: 16px;
        margin-bottom: 15px;
    }
}

.software-development-section,
.consulting-section{
    width: 60%;
    margin: 0 auto;
    padding: 40px 0;

    h2 {
        font-size: 28px;
        margin-bottom: 20px;
        color: $primary-color;
    }

    p {
        font-size: 16px;
        margin-bottom: 15px;
    }
}

.maintenance-section {
    width: 60%;
    margin: 0 auto;
    padding: 40px 0;
    background-color: $background-light;

    h2 {
        font-size: 28px;
        margin-bottom: 20px;
        color: $primary-color;
    }

    p {
        font-size: 16px;
        margin-bottom: 15px;
        color: black;
    }
}

.service-section {
    text-align: center;
    background-color: $background-light;

    ul {
        list-style-type: disc;
        padding-left: 20px;
        text-align: left;

        li {
            font-size: 14px;
            color: #495057;
            margin: 5px 0;
        }
    }

    h3 {
        font-size: 18px;
        color: #6610f2;
        margin-top: 16px;
    }
}

.section-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.text-content {
    padding: 16px;
    width: 100%;
    
    h2 {
        font-size: 28px;
        margin-bottom: 10px;
        color: $primary-color;
    }

    p {
        font-size: 14px;
        margin-bottom: 12px;
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

    .service-section h2,
    .software-development-section h2,
    .consulting-section h2,
    .maintenance-section h2,
    .text-content h2 {
        font-size: 24px;
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
</style>