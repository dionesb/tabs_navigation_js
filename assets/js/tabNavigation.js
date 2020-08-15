const $ = document.querySelector.bind(document)

function TabNavigation() {
  const html = {
    links: [...$('.tab-links').children],
    contents: [...$('.tab-content').children],
    openTab: $('[data-open]')
  }

  function hideAllTabContent() {
    const contents = html.contents

    contents.forEach(section => section.style.display = 'none')
  }

  function removeAllActiveClass() {
    html.links.forEach(link => link.className = link.className.replace(' active', ''))
  }

  function showCurrentTab(id) {
    const tabContent = $(`#${id}`)

    tabContent.style.display = 'block'
  }

  function selectTab(event) {
    hideAllTabContent()

    const target = event.currentTarget

    showCurrentTab(target.dataset.id)

    removeAllActiveClass()

    target.className += " active"
  }

  function listenForChange() {
    html.links.forEach(tab => tab.addEventListener('click', selectTab))
  }

  function init() {
    hideAllTabContent()
    listenForChange()

    html.openTab.click()
  }

  return {
    init
  }
}

window.addEventListener('load', () => {
  const tabNavigation = TabNavigation()
  tabNavigation.init()
})
