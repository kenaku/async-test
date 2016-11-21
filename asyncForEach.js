var asyncForEach = function(items, func) {
  return new Promise(resolve => {
    let index = -1;
    const loop = () => {
      index++;
      index < items.length ? setTimeout(run, 0) : setTimeout(resolve, 0);
    };

    function run() {
      const item = items[index];
      func ?
        func(item, index, function next() {loop()}) :
        loop();
    }
  loop();
  });
}
module.exports = {asyncForEach}