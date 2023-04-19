import { cards } from './Blobs';
import { CardComponent } from './CardComponent';

function App() {
  return <div className="wrapper">
    {cards.map((x, i) => <CardComponent key={x.title} card={x} break={(1 + i) % 8 === 0} />)}
  </div>;
}

export default App;
