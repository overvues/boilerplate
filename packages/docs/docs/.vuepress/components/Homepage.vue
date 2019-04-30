<template>
  <div class="homepage">
    <h1>Overvues Boilerplate</h1>
    <div class="homepage-sections">
      <h2>Example Static WebApp</h2>
      <h2>View Github Boilerplate</h2>
      <h2>Example Dynamic WebApp</h2>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.homepage {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.homepage > h1 {
  margin: 2rem auto;
}

.homepage-sections {
  display: flex;
  justify-content: center;
}

.homepage-sections > h2 {
  margin: 2rem;
}
</style>