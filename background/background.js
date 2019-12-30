// The onClicked callback function.
const onClickHandler = (info, tab) => {
  console.log(info.selectionText);
  const selectionText = info.selectionText;
  chrome.tabs.create({url: `https://www.thesaurus.com/browse/${selectionText}`});
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// set up context menu tree at install time
chrome.runtime.onInstalled.addListener(() => {
  const context = 'selection';
  const title = 'Search Thesaurus for "%s"';
  chrome.contextMenus.create(
    {
      'id': 'thesaurus-context-item',
      'title': title,
      'contexts': [context]
    }
  );
});
