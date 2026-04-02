<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">이날치(LeeNalChi)</RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/">홈</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">소개</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/members">멤버</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/videos">영상</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>

</style>