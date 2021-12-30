import Item from './components/Item/Item';
import Card from './components/Card';

const App = () => {
  return (
    <div className="App">
      <h1><b> Minha lista de produtos</b></h1>
      <ul>
        <Item><b>Item 1 = Notbook</b> </Item>
       <b><Item>Item 2 = Smartphone </Item></b>
       <b><Item>Item 3 = Relógio </Item></b>
        <b><Item>Item 4 = Televisão </Item></b>
        <b><Item>Item 5 = Tablet </Item></b>
        
      </ul>
      <Card />
    </div>
  );
}
export default App;

// export default function App () {
//   return (
//     <h1>Hello World</h1>
//   )
// }

