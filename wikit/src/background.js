const menuItem = {
  "id": "wikit",
  "title": "Wikit",
  "contexts": ["selection"]
}
chrome. contextMenus.create(menuItem);

const fixedEncodeURI = (str) => {
  return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']')
}

chrome.contextMenus.onClicked.addListener((clickData) => {
  if (clickData.menuItemId === "wikit" && clickData.selectionText)
})