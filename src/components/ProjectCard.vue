<script setup>
defineProps({
  project: { type: Object, required: true },
  featured: { type: Boolean, default: false }
});
</script>

<template>
  <component
    :is="featured ? 'a' : 'article'"
    :href="featured ? '#projects' : undefined"
    class="tile"
    :class="featured ? 'project-tile feature-project' : 'portfolio-project'"
    :aria-label="project.title"
  >
    <div class="project-visual" :class="project.visualClass">
      <img
        class="project-screenshot"
        :src="project.image"
        :alt="project.imageAlt"
        @load="$event.target.parentElement.classList.add('image-loaded')"
        @error="$event.target.style.display = 'none'"
      >
      <span class="visual-tag">{{ project.number }} — {{ project.category }}</span>
      <template v-if="project.visualClass === 'art-visual'">
        <div class="art-window">
          <span class="art-sun"></span>
          <span class="art-mountain mountain-a"></span>
          <span class="art-mountain mountain-b"></span>
          <span class="art-frame">ART<br><small>& OBJECTS</small></span>
        </div>
        <span class="visual-stamp">MADE<br>WITH CARE</span>
      </template>
      <template v-else>
        <div class="dashboard">
          <div class="dash-sidebar"><b>◈</b><span></span><span></span><span></span></div>
          <div class="dash-content">
            <div class="dash-title"></div>
            <div class="dash-welcome">People first.<br><b>Work, in sync.</b></div>
            <div class="dash-stat-row"><i></i><i></i><i></i></div>
            <div class="dash-table"><i></i><i></i><i></i><i></i></div>
          </div>
        </div>
        <span class="dash-badge">TEAM<br>HUB</span>
      </template>
    </div>
    <div class="project-info">
      <div>
        <p class="project-type">{{ project.type }}</p>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
      <span v-if="featured" class="project-link">Live Site <b>↗</b></span>
      <a v-else class="button button-outline" :href="project.link" target="_blank" rel="noopener noreferrer">
        Live Site <span>↗</span>
      </a>
    </div>
  </component>
</template>
