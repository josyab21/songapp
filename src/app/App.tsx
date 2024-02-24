import Layout from "../components/Layout";

import { Routes, Route } from "react-router-dom";
import Songs from "../pages/Song";
import Albums from "../pages/Albums";
import Artists from "../pages/Artist";
import Genres from "../pages/Genres";
import UpdateSong from "../pages/Update";
import AddSongForm from "../pages/AddSongForm";
import Statistic from "../pages/Statistics";
import Home from "./features/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/songs/statistics" element={<Statistic />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/edit/:id" element={<UpdateSong />} />
        <Route path="/addsong" element={<AddSongForm />} />
      </Route>
    </Routes>
  );
}

export default App;
