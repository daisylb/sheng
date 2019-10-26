;(function(c) {
  ;/c/.test(document.readyState)
    ? c()
    : document.addEventListener("DOMContentLoaded", c)
})(function() {
  const toggles = document.querySelectorAll(".toggle") as NodeListOf<
    HTMLElement
  >
  const index = document.getElementById("index-css") as HTMLLinkElement
  for (const toggle of toggles) {
    toggle.addEventListener("click", function(e) {
      e.preventDefault()
      console.log(toggle.dataset.index)
      if (typeof toggle.dataset.index !== "undefined")
        index.disabled = !(toggle.dataset.index === "1")
    })
  }
})
