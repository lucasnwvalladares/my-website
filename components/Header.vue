<template>
    <header class="header">
        <div class="logo-container">
            <img src="@/public/imgs/cropped-logo.png" alt="Company Logo" class="logo" />
        </div>
        <nav class="navbar">
            <ul class="nav-links">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/services">Services</NuxtLink></li>
                <li><NuxtLink to="/about-us">About Us</NuxtLink></li>
                <li><NuxtLink to="/team">Team</NuxtLink></li>
                <li><NuxtLink to="/contact-us">Contact Us</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
// You can add script logic here if needed
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: $primary-color; /* Using global SCSS variable */
}

.logo-container {
    flex: 0 0 auto;
}

.logo {
    height: 40px; /* Adjust the size as needed */
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
}

.nav-links li a:hover {
    text-decoration: underline;
}
</style>
