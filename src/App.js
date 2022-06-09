import { ShopItemFunc } from "./components/ShopItem/ShopItemFunc";
import { ShopItemClass } from "./components/ShopItem/ShopItemClass";
import "./App.css";

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 399,
  currency: '£',
};

function App() {
  return (
    <>
      <div style={{ width: 1000, margin: '40px auto', display: 'flex', alignItems: 'center', gap: 40 }}>
        <div>
          <div style={{ marginBottom: 20, fontSize: 20, fontWeight: 700 }}>Функциональный компонент</div>
          <ShopItemFunc item={item} />
        </div>
        <div>
          <div style={{ marginBottom: 20, fontSize: 20, fontWeight: 700 }}>Классовый компонент</div>
          <ShopItemClass item={item} />
        </div>
      </div>
    </>
  );
}

export default App;
