const Observer = function (modelView) {
  //Private
  const _modelView = modelView;

  //Public
  return {
    update: function (data, event) {
      console.log(`Ocurrio un cambio en el modelo, el evento fue: ${event}`);
      _modelView.reload(data);
    },
  };
};

const ObserverMethod = function (modelView, methodName, method) {
  //Private
  const _modelView = modelView;
  const _methodName = methodName;
  const _method = method;

  //Public
  return {
    update: function (data, event) {
      console.log(`En update del ObserverMethod ${event}`);
      _modelView.reloadMethod(data, _methodName, _method);
    },
  };
};
