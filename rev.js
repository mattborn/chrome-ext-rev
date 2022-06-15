const scripts = [
  `${chrome.runtime.getURL('src/hack.js')}?v=${Date.now()}`
]

//stackoverflow.com/questions/38839650/load-ordering-of-dynamically-added-script-tags
function inject() {
  // get first script
  const script = scripts.shift()
  // all scripts were loaded
  if (!script) return
  const j = document.createElement('script')
  j.src = script
  j.onload = (e) => { inject() }
  document.body.appendChild(j)
}
inject()
