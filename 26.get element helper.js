function getElement(selector, isList) {
    const el = isList
        ? [...document.querySelectorAll(selector)]
        : document.querySelector(selector);

    if ((selector && !isList) || isList || !el.length < 1) return el;
    throw new Error(`no selector: ${selector}`);
}
