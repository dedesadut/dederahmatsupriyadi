import FavColor from "./components/favColor";
import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import "./insho-style.css";

export default function MyApp(){
  return(
    <section>
      <Hero/>
      <RiwayatPendidikan/>
    <RiwayatPekerjaan/>
    <FavColor/>

    </section>
  );
}