<template>
    <footer class="footer fixed-footer">
        <div class="footer-content">
            <p>&copy; {{ currentYear }} Valla. All rights reserved.</p>
            <div class="social-links">
                <!-- Add your social media links here -->
                <a href="https://www.linkedin.com/company/valla-tecnologies/" target="_blank">LinkedIn</a>
            </div>
        </div>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
    background-color: $primary-color;
    color: #fff;
    padding: 20px 0;
    /* Remove margin-top to prevent spacing issues */
}

.fixed-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000; /* Ensure the footer stays on top */
}

.footer-content {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.social-links a {
    color: #fff;
    margin-left: 15px;
    text-decoration: none;
}

.social-links a:hover {
    text-decoration: underline;
}
</style>
