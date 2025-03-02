const Color = function (r, g, b, name) {
  //Private
  const _r = r;
  const _g = g;
  const _b = b;
  const _name = name;

  //Public
  return {
    getR: function () {
      return _r;
    },
    getG: function () {
      return _g;
    },
    getB: function () {
      return _b;
    },
    getName: function () {
      return _name;
    },
    getColor: function () {
      return `rgb(${_r},${_g},${_b})`;
    },
    getAll: function () {
      const all = {
        r: _r,
        g: _g,
        b: _b,
        name: _name,
        color: `rgb(${_r},${_g},${_b})`,
      };
      return JSON.stringify(all);
    },
  };
};

const Model = function () {
  //Private
  const _colorsList = [];

  //Public
  return {
    getList: function () {
      return _colorsList;
    },
    addColor: function (newColor) {
      _colorsList.push(newColor);
    },
    removeColor: function (index) {
      _colorsList.splice(index, 1);
    },
  };
};
