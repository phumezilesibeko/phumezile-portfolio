<script setup>
import { computed, ref } from 'vue';
import ProjectCard from './components/ProjectCard.vue';
import SkillCard from './components/SkillCard.vue';
import { projects, skills } from './data.js';
import profilePhoto from '../images/phumezile.jpg';

const navOpen = ref(false);
const formMessage = ref('I usually reply within a couple of days.');
const featuredProjects = computed(() => projects.filter((project) => project.featured));

function closeMenu() {
  navOpen.value = false;
}

function sendMessage(event) {
  const values = new FormData(event.target);
  const subject = encodeURIComponent(values.get('subject'));
  const body = encodeURIComponent(`Hi Phumezile,\n\n${values.get('message')}\n\n${values.get('name')}\n${values.get('email')}`);
  formMessage.value = 'Opening your email app…';
  window.location.href = `mailto:sibeko.phumezile@gmail.com?subject=${subject}&body=${body}`;
}
</script>

<template>
  <header class="site-header" id="top">
    <nav class="nav shell" aria-label="Main navigation">
      <a class="brand" href="#top" aria-label="Phumezile Sibeko, home"><span class="brand-mark">PS</span><span>Phumezile Sibeko</span></a>
      <button class="menu-toggle" aria-label="Open navigation" :aria-expanded="navOpen" @click="navOpen = !navOpen"><span></span><span></span></button>
      <div class="nav-links" :class="{ 'is-open': navOpen }"><a href="#about" @click="closeMenu">About</a><a href="#skills" @click="closeMenu">Skills</a><a href="#projects" @click="closeMenu">Projects</a><a href="#contact" @click="closeMenu">Contact</a></div>
    </nav>
  </header>

  <main class="shell">
    <section class="hero-grid" aria-label="Introduction">
      <article class="tile hero-card">
        <div class="hero-kicker"><span class="status-dot"></span> Available for opportunities</div>
        <div class="hero-copy"><p class="eyebrow">HELLO, I'M</p><h1>Phumezile<br>Sibeko<span class="accent-dot">.</span></h1><h2>Junior Full Stack Developer</h2><p class="hero-description">I build responsive web apps from front end to back end.</p>
          <a class="button button-blue" href="#projects">View projects <span aria-hidden="true">↗</span></a>
        </div>
        <div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div>
        <span class="hero-index">01 / DEVELOPER</span>
      </article>

      <article class="tile portrait-card" aria-label="Phumezile Sibeko profile photo">
        <div class="portrait-scene"><div class="portrait-sun"></div><div class="portrait-shape hair"></div><div class="portrait-shape face"></div><div class="portrait-shape body"></div><div class="portrait-shape shirt"></div><span class="portrait-spark spark-a">✳</span><span class="portrait-spark spark-b">✦</span><img class="profile-photo" :src="profilePhoto" alt="Phumezile Sibeko" @load="$event.target.parentElement.classList.add('has-photo')"></div>
        <div class="portrait-caption"><span>Based in Cape Town</span><span class="caption-arrow">↗</span></div>
        <span class="photo-note">PHUMEZILE<br>SIBEKO</span>
      </article>

      <article class="tile tech-card"><div class="tile-label"><span class="label-icon">✳</span> MY TOOLKIT</div><p class="tech-list"><span>Vue.js</span><i></i><span>PHP</span><i></i><span>Node.js</span><i></i><span>MySQL</span></p><div class="tech-foot">Curious by nature, building every day.</div></article>
      <article class="tile open-card"><div class="open-top"><span class="pulse"><i></i></span><span class="tile-label">CURRENT STATUS</span></div><h3>Open to work</h3><p>Ready for my next opportunity.</p><span class="open-arrow">↗</span></article>

      <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" featured />

      <article class="tile contact-mini"><div class="tile-label">LET'S CONNECT <span>↗</span></div><p>Email, LinkedIn<br>& GitHub</p><div class="social-icons"><a href="mailto:sibeko.phumezile@gmail.com" aria-label="Email Phumezile">@</a><a href="https://www.linkedin.com/in/phumezile-sibeko-41b14a209/" target="_blank" rel="noopener noreferrer" aria-label="Phumezile on LinkedIn">in</a><a href="https://github.com/phumezilesibeko" target="_blank" rel="noopener noreferrer" aria-label="Phumezile on GitHub">⌘</a></div></article>
    </section>

    <section class="section about-section" id="about">
      <div class="section-heading"><p class="eyebrow">A LITTLE ABOUT ME</p><h2>Building things<br>with <span>curiosity.</span></h2></div>
      <article class="tile about-copy"><span class="section-number">01</span><p>I’m a junior full stack developer who recently completed an intensive full stack development course. I’m currently an intern at <strong>Life Choices Academy</strong>, where I’m growing my skills by building real projects and learning alongside a supportive community.</p><p>I enjoy turning ideas into useful, welcoming digital experiences — and I’m always keen to learn what’s next.</p><a class="text-link" href="#contact">A little more about working together <span>↗</span></a></article>
      <div class="tile about-photo"><div class="about-photo-art"><span class="about-arch"></span><span class="about-flower">✳</span><span class="about-photo-caption">LEARNING<br>BY MAKING</span></div><div class="about-photo-footer"><span>CURIOUS. CREATIVE. ALWAYS LEARNING.</span><span>✳</span></div></div>
    </section>

    <section class="section skills-section" id="skills">
      <div class="section-title-row"><div><p class="eyebrow">TOOLS OF THE TRADE</p><h2>Skills & <span>toolbox</span></h2></div><p class="section-aside">A growing toolkit for bringing<br>thoughtful ideas to life.</p></div>
      <div class="skills-grid"><SkillCard v-for="skill in skills" :key="skill.name" :skill="skill" /></div>
    </section>

    <section class="section projects-section" id="projects">
      <div class="section-title-row"><div><p class="eyebrow">SELECTED WORK</p><h2>Made with <span>purpose.</span></h2></div><a class="text-link all-work" href="#contact">Have a project in mind? <span>↗</span></a></div>
      <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        <article class="tile coming-project"><span class="coming-icon">＋</span><p class="project-type">UP NEXT · 03</p><h3>Next project<br>coming soon<span>.</span></h3><p>There’s always something new taking shape.</p><span class="coming-stars">✳ &nbsp; ✦</span></article>
      </div>
    </section>

    <section class="section contact-section" id="contact">
      <div class="contact-heading"><p class="eyebrow">HAVE A GOOD ONE IN MIND?</p><h2>Let’s make<br><span>something good.</span></h2><p>Have a role, idea, or just want to say hello? My inbox is open.</p><div class="contact-links"><a href="mailto:sibeko.phumezile@gmail.com"><span class="contact-link-icon">@</span><span><small>EMAIL ME AT</small>sibeko.phumezile@gmail.com</span><b>↗</b></a><a href="https://www.linkedin.com/in/phumezile-sibeko-41b14a209/" target="_blank" rel="noopener noreferrer"><span class="contact-link-icon">in</span><span><small>FIND ME ON</small>LinkedIn</span><b>↗</b></a><a href="https://github.com/phumezilesibeko" target="_blank" rel="noopener noreferrer"><span class="contact-link-icon">⌘</span><span><small>MY CODE LIVES ON</small>GitHub</span><b>↗</b></a></div></div>
      <form class="tile contact-form" @submit.prevent="sendMessage"><div class="form-heading"><span class="section-number">SAY HELLO / 2026</span><span class="form-spark">✳</span></div><div class="form-row"><label>Name<input name="name" type="text" placeholder="Your name" required></label><label>Email<input name="email" type="email" placeholder="you@example.com" required></label></div><label>Subject<input name="subject" type="text" placeholder="What’s this about?" required></label><label>Message<textarea name="message" rows="4" placeholder="Tell me a little about it..." required></textarea></label><button class="button button-blue send-button" type="submit">Send Message <span>↗</span></button><p class="form-note" aria-live="polite">{{ formMessage }}</p></form>
    </section>
  </main>

  <footer class="footer shell"><span>© 2026 Phumezile Sibeko</span><span class="footer-note">DESIGNED WITH CURIOSITY <i>✳</i></span><a href="#top">Back to top <span>↑</span></a></footer>
</template>
