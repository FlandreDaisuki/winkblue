export class Winkblue {
  static new() {
    return new Winkblue();
  }

  constructor() {
    /**
     * @private
     * @type {Record<string, Set<{cb: Function; mo: MutationObserver}>>}
     */
    this._internal_selector_mem = Object.create(null);

    this.option = {
      /** triggers callback if the element had been removed then attached back on document */
      forgetHiddenElement: false,
    };
  }

  /**
   * @param {string} selector
   * @param {(el: Element) => any} cb
   */
  on(selector, cb) {
    const visitedElSet = new Set();
    const mo = new MutationObserver(() => {
      const visitingEls = Array.from(document.querySelectorAll(selector));

      for (const el of visitingEls) {
        if (el && !visitedElSet.has(el)) {
          visitedElSet.add(el);
          setTimeout(() => cb(el), 0);
        }
      }

      if (this.option.forgetHiddenElement) {
        for (const el of visitedElSet) {
          if (!visitingEls.includes(el)) {
            visitedElSet.delete(el);
          }
        }
      }
    });
    mo.observe(document.documentElement, { childList: true, subtree: true, attributes: true });

    if (!this._internal_selector_mem[selector]) { this._internal_selector_mem[selector] = new Set(); }
    this._internal_selector_mem[selector].add({ cb, mo });
  }

  /**
   * @param {string} selector
   * @param {(el: Element) => any} [cb]
   */
  off(selector, cb) {
    const rSet = this._internal_selector_mem[selector];
    if (!rSet) { return; }

    if (cb) {
      const found = Array.from(rSet).find((r) => r.cb === cb);
      if (!found) { return; }

      found.mo.disconnect();
      rSet.delete(found);
    }
    else {
      for (const r of rSet) {
        r.mo.disconnect();
        rSet.delete(r);
      }
    }
  }

  reset() {
    for (const selector of Object.keys(this._internal_selector_mem)) {
      const rSet = this._internal_selector_mem[selector];
      for (const r of rSet) {
        r.mo.disconnect();
        rSet.delete(r);
      }
    }
  }
}

export const winkblue = Winkblue.new();
