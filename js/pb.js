const expands = document.querySelectorAll('div.project-block');
const body = document.querySelector('body');

// TODO rework currently-opened handling
/*

for (let proj of expands) {
  const button = proj.querySelectorAll('.button-set > *[data-fn="open"]');
  button.onclick(() => {
    body.style.setProperty("--opened", e.target.value);
  })
  p.addEventListener("change", (e) => {
    body.style.setProperty("--opened", proj.dataset.open);
  });
}

*/
