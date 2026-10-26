// CONFIGURA ESTOS DATOS ANTES DE PUBLICAR
const config = {
  githubUsuario: 'BroadConnor',
  email: 'qsxfthbji@gmail.com',
  repositorios: {
    calculadora: 'Calculadora',
    imc: 'Calculadora_IMC',
    autoweb: 'AutoPremium'
  }
};

const githubUrl = `https://github.com/${encodeURIComponent(config.githubUsuario)}`;
document.querySelector('#github-hero').href = githubUrl;
document.querySelector('#github-contact').href = githubUrl;
document.querySelector('#email-link').href = `mailto:${config.email}`;
document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-repo]').forEach(link => {
  const repo = config.repositorios[link.dataset.repo];
  link.href = `${githubUrl}/${encodeURIComponent(repo)}`;
});
