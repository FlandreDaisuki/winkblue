export class Winkblue {
    static "new"(): Winkblue;
    /**
     * @private
     * @type {Record<string, Set<{cb: Function; mo: MutationObserver}>>}
     */
    private _internal_selector_mem;
    option: {
        /** triggers callback if the element had been removed then attached back on document */
        forgetHiddenElement: boolean;
    };
    /**
     * @param {string} selector
     * @param {(el: Element) => any} cb
     */
    on(selector: string, cb: (el: Element) => any): void;
    /**
     * @param {string} selector
     * @param {(el: Element) => any} [cb]
     */
    off(selector: string, cb?: (el: Element) => any): void;
    reset(): void;
}
export const winkblue: Winkblue;
