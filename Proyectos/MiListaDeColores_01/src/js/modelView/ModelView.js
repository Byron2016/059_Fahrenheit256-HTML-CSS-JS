function ConvertArrayToString(array) {
  const arrayString = [];
  array.forEach((color) => {
    arrayString.push(color.getName());
  });
  return `[${arrayString.join(",")}]`;
}

const ModelViewConsole = function (model) {
  //Private
  const _model = model;

  //Public
  return {
    reload: function (data) {
      console.log("data [ModelViewConsole-reload]", data);
      const print = ConvertArrayToString(data);
      // console.log(`%c${print}`, `color: Yellow; font-size: 14px;`);
      console.log(`%cLista : ${print}`, `color: Yellow; font-size: 14px;`);
    },
    reloadMethod: function (data, nameMethod, method) {
      const result = method(data);
      const print = ConvertArrayToString(result);
      console.log(
        `%c${nameMethod} : ${print}`,
        `color: Yellow; font-size: 14px;`
      );
    },
  };
};
