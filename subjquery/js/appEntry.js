const render = $ => {
  $('#jqcontainer').html('Hello, render with jQuery');
  return Promise.resolve();
};

(global => {
  global['purehtml'] = {
    bootstrap: () => {
      // 关键是下面这句
      return Promise.resolve();
    },
    mount: () => {
      console.log('purehtml mount');
      return render($);
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);