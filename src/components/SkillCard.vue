<script setup>
defineProps({ skill: { type: Object, required: true } });
</script>

<template>
  <article class="tile skill-card">
    <div class="skill-icon" :class="skill.iconClass">{{ skill.icon }}</div>
    <div>
      <p class="skill-kicker">{{ skill.kicker }}</p>
      <h3>{{ skill.name }}</h3>
      <p>{{ skill.items }}</p>
    </div>
    <span class="skill-spark">✳</span>
  </article>
</template>
