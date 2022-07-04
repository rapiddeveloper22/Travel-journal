import './App.css';
import Navbar from "./components/Navbar";
import Trip from "./components/Trip";
import data from "./data";

export default function App() {
  const details = data.map(item => {
    return (
      <Trip
        image={item.image}
        location={item.location}
        gmaps={item.gmaps}
        title={item.title}
        date={item.date}
        desc={item.desc}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      {details}
    </div>
  );
}

