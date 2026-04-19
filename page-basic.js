function renderBasicNav() {
  const nav = document.getElementById('nav-links');
  if (!nav) return;

  nav.innerHTML = siteData.nav
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join('');
}

function renderAboutPage() {
  const about = siteData.about;
  if (!about) return;

  const principles = document.getElementById('about-principles');
  const missionTitle = document.getElementById('about-mission-title');
  const missionBody = document.getElementById('about-mission-body');
  const contentTypes = document.getElementById('about-content-types');
  const audienceGrid = document.getElementById('about-audiences');
  const promises = document.getElementById('about-promises');

  if (principles) {
    principles.innerHTML = about.principles.map((item) => `<span>${item}</span>`).join('');
  }

  if (missionTitle) {
    missionTitle.textContent = about.missionTitle;
  }

  if (missionBody) {
    missionBody.innerHTML = about.mission.map((item) => `<p>${item}</p>`).join('');
  }

  if (contentTypes) {
    contentTypes.innerHTML = about.contentTypes.map((item) => `<li>${item}</li>`).join('');
  }

  if (audienceGrid) {
    audienceGrid.innerHTML = about.audiences
      .map(
        (item) => `
          <article class="scene-card reveal is-visible">
            <span class="badge">${item.tag}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </article>
        `
      )
      .join('');
  }

  if (promises) {
    promises.innerHTML = about.promises.map((item) => `<li>${item}</li>`).join('');
  }
}

renderBasicNav();
renderAboutPage();
