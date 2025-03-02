// Interfaz Strategy (en JavaScript, se simula con una función)
class Strategy {
  execute(data) {
    throw new Error("Método execute debe ser implementado");
  }
}

// ConcreteStrategy 1
class ConcreteStrategyA extends Strategy {
  execute(data) {
    return `Ejecutando Estrategia A con ${data}`;
  }
}

// ConcreteStrategy 2
class ConcreteStrategyB extends Strategy {
  execute(data) {
    return `Ejecutando Estrategia B con ${data}`;
  }
}

// Context
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy(data) {
    console.log(this.strategy);
    return this.strategy.execute(data);
  }
}
