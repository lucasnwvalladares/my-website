<template>
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; {{ currentYear }} Valla. All rights reserved.</p>
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
    padding: 10px 0; // Reduced padding
    text-align: center;
}

.footer-content {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;

    p {
        font-size: 0.9rem; // Slightly smaller font size
        margin: 0; // Remove default paragraph margin
    }
}

// Add responsive adjustments if needed
@media (max-width: 768px) {
    .footer {
        padding: 8px 0; // Even smaller padding for mobile
    }

    .footer-content p {
        font-size: 0.8rem; // Smaller font size for mobile
    }
}
</style>
