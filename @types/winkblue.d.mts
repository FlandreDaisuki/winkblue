declare namespace Winkblue {
  function on(selector: string, cb: (el: Element) => any): void;
  function off(selector: string, cb?: (el: Element) => any): void;
  function reset(): void;
}

export default Winkblue;
