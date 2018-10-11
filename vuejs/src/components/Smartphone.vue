<template>
<div>
    <img src="../assets/phoneframe.png" alt="Responsive image" class="smartphone" />
    <img src="../assets/fond_phone.jpg" alt="Responsive image" class="fond" />
</div>
</template>

<script>
export default {
  name: "Smartphone"
};
</script>

<style scoped>
.smartphone {
    width: 200px;
    height: auto;
    position: absolute;
    top: -6.375rem;
    margin-left: 30px;
    z-index: 10;
}

.fond{
    position: absolute;
    top: -5.2rem;
    margin-left: 48px;
    z-index: 1;
}
</style>
