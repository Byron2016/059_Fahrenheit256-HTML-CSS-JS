document.addEventListener("DOMContentLoaded", function () {
  const colorRed = FactoryColor.RED();
  const colorGreen = FactoryColor.GREEN();
  const colorBlue = FactoryColor.BLUE();

  const model = new Model();

  const modelViewConsole = new ModelViewConsole(model);

  const observerConsole = new Observer(modelViewConsole);
  model.subscribe(observerConsole);

  /*
      const observerMethodConcat = new ObserverMethod(
        modelViewConsole,
        "concat",
        ArrayMethod["concat"]
      );
      model.subscribe(observerMethodConcat);

      const observerMethodFilter = new ObserverMethod(
        modelViewConsole,
        "filter",
        ArrayMethod["filter"]
      );
      model.subscribe(observerMethodFilter);
      */

  for (var method in ArrayMethod) {
    const observerMethod = new ObserverMethod(
      modelViewConsole,
      method,
      ArrayMethod[method]
    );
    model.subscribe(observerMethod);
  }

  console.log(model.getList());

  model.addColor(colorRed);
  console.log(model.getList());
  console.log(
    `%c${model.getList()[0].getName()} ${model.getList()[0].getAll()}`,
    `color: ${model.getList()[0].getName()}; font-size: 14px;`
  );

  model.addColor(colorGreen);
  console.log(model.getList());
  console.log(
    `%c${model.getList()[1].getName()} ${model.getList()[1].getAll()}`,
    `color: ${model.getList()[1].getName()}; font-size: 14px;`
  );

  model.addColor(colorBlue);
  console.log(model.getList());
  console.log(
    `%c${model.getList()[2].getName()} ${model.getList()[2].getAll()}`,
    `color: ${model.getList()[2].getName()}; font-size: 14px;`
  );

  model.removeColor(1);
  console.log(model.getList());

  // Lista : [RED,BLUE,RED]
  // concat : [RED,BLUE,RED,BLUE] // A la Lista le concatena el color BLUE
  // filter : [BLUE] // A la Lista le filtra el color RED
  model.addColor(colorRed);
  console.log(
    `%cAgregado el color RED`,
    `color: ${model.getList()[0].getName()}; font-size: 14px;`
  );

  // Lista : [RED,BLUE,RED]
  // concat : [RED,BLUE,RED,BLUE] // A la Lista le concatena el color BLUE
  // filter : [BLUE] // A la Lista le filtra el color RED
  model.addColor(colorGreen);
  console.log(
    `%cAgregado el color Green`,
    `color: ${model.getList()[3].getName()}; font-size: 14px;`
  );
});
