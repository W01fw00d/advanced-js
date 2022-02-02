// Based on https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/

const ReactClone = (function () {
  // This function uses the concept of closure to imitate React.useState()

  let _val; // hold our state in module scope
  return {
    render(Component) {
      const Comp = Component();
      Comp.render();
      return Comp;
    },
    useState(initialValue) {
      _val = _val || initialValue; // assign anew every run
      function setState(newVal) {
        _val = newVal;
      }
      return [_val, setState];
    },
  };
})();

// Example of use
function Counter() {
  const [count, setCount] = ReactClone.useState(0);
  return {
    click: () => setCount(count + 1),
    render: () => console.log("render:", { count }),
  };
}
let App;
App = ReactClone.render(Counter); // render: { count: 0 }
App.click();
App = ReactClone.render(Counter); // render: { count: 1 }
