const mem = Object.create(null);

export default {
  /**
   * @param {string} selector
   * @param {(el: Element) => void} cb
   */
  on: function winkblueOn(selector, cb) {
    const wk = new WeakSet();
    const mo = new MutationObserver(() => {
      for (const el of Array.from(document.querySelectorAll(selector))) {
        if (el && !wk.has(el)) {
          wk.add(el);
          return cb(el);
        }
      }
    });
    mo.observe(document.documentElement, { childList: true, subtree: true, attributes: true });

    if (!mem[selector]) { mem[selector] = new Set(); }
    mem[selector].add({ cb, mo });
  },

  /**
   * @param {string} selector
   * @param {(el: Element) => void} [cb]
   */
  off: function winkblueOff(selector, cb) {
    const rSet = mem[selector];
    if (!rSet) { return; }

    if (cb) {
      const found = Array.from(rSet).find((r) => r.cb === cb);
      found.mo.disconnect();
      rSet.delete(found);
    }
    else {
      for (const r of rSet) {
        r.mo.disconnect();
        rSet.delete(r);
      }
    }
  },

  reset: function winkblueReset() {
    for (const selector of Object.keys(mem)) {
      const rSet = mem[selector];
      for (const r of rSet) {
        r.mo.disconnect();
        rSet.delete(r);
      }
    }
  },
};
