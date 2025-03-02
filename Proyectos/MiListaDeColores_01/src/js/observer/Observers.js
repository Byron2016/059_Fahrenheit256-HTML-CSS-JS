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
