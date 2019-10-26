;(function(c) {
  ;/c/.test(document.readyState)
    ? c()
    : document.addEventListener("DOMContentLoaded", c)
})(function() {
  const toggles = document.querySelectorAll(".toggle") as NodeListOf<
    HTMLElement
  >
  const body = document.body as HTMLBodyElement
  for (const toggle of toggles) {
    toggle.addEventListener("click", function(e) {
      e.preventDefault()
      body.className = toggle.dataset.class
    })
  }
})
