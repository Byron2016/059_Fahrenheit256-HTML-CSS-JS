  ```plantuml
      @startuml
        class Perro {
          - nombre: String
          - raza: String
          - collar: Collar
          - juguetes: Array
          + ladrar()
          + agregarJuguete(Juguete)
          + listarJuguetes()
        }
        
        class Collar {
          - color: String
          + getColor()
        }
        
        class Juguete {
          - nombre: String
          + getNombre()
        }
        
        Perro *-- Collar
        Perro o-- Juguete
      @enduml
  ```
<table>
  <tr>
    <th>Diagrama Renderizado</th>
    <th>Código PlantUML sin Renderizar</th>
  </tr>
  <tr>
  <td>
      
  ```plantuml
    @startuml
      class Context {
        - strategy: Strategy
        + setStrategy(s: Strategy)
        + executeStrategy(data)
      }

      interface Strategy {
        + execute(data)
      }

      class ConcreteStrategyA {
        + execute(data)
      }

      class ConcreteStrategyB {
        + execute(data)
      }

      Context --> Strategy : uses
      Strategy <|-- ConcreteStrategyA : implements
      Strategy <|-- ConcreteStrategyB : implements
    @enduml
  ```

  </td>
  <td>
      <!-- Columna 2: Código PlantUML sin renderizar -->
  <pre>

    @startuml
      class Context {
        - strategy: Strategy
        + setStrategy(s: Strategy)
        + executeStrategy(data)
      }

      interface Strategy {
        + execute(data)
      }

      class ConcreteStrategyA {
        + execute(data)
      }

      class ConcreteStrategyB {
        + execute(data)
      }

      Context --> Strategy : uses
      Strategy <|-- ConcreteStrategyA : implements
      Strategy <|-- ConcreteStrategyB : implements
    @enduml

  </pre>
  </td>
  </tr>
</table>

# **Diagrama UML del patrón Strategy**
**Context**: Contiene una referencia a la interfaz Strategy.

**Strategy**: Interfaz o clase abstracta que define el método que las estrategias concretas deben implementar.

**ConcreteStrategyA** y **ConcreteStrategyB**: Implementaciones concretas de la interfaz Strategy.

# **Explicación del PlantUML**
**Context**: Representa la clase que utiliza una estrategia. Tiene un método para establecer la estrategia (**setStrategy**) y otro para ejecutarla (**executeStrategy**).

**Strategy**: Es una interfaz que define el método **execute(data)** que todas las estrategias concretas deben implementar.

**ConcreteStrategyA** y **ConcreteStrategyB**: Son implementaciones concretas de la interfaz **Strategy**. Cada una tiene su propia lógica para el método **execute(data)**.

```javascript
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
        return this.strategy.execute(data);
    }
}

// Uso del patrón Strategy
const context = new Context(new ConcreteStrategyA());
console.log(context.executeStrategy("datos1")); // Ejecutando Estrategia A con datos1

context.setStrategy(new ConcreteStrategyB());
console.log(context.executeStrategy("datos2")); // Ejecutando Estrategia B con datos2
```