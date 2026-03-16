const playlists = [
  {
    title: "Chill Vibes",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6",
    cover: "https://i.scdn.co/image/ab67706f00000002b1e7e2e2e2e2e2e2e2e2e2e2"
  },
  {
    title: "Années 2000 Hits",
    url: "https://open.spotify.com/playlist/37i9dQZF1DXaKIA8E7WcJj",
    cover: "https://i.scdn.co/image/ab67706f00000002c2c2c2c2c2c2c2c2c2c2c2c2"
  },
  {
    title: "Rock Français",
    url: "https://open.spotify.com/playlist/37i9dQZF1DWVFeEut75IAL",
    cover: "https://i.scdn.co/image/ab67706f00000002d3d3d3d3d3d3d3d3d3d3d3d3"
  }
];

export default function Playlists() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4 animate-fade-in">
      <h1 className="text-5xl font-extrabold mb-8" style={{color:'#b1001a', textShadow:'0 2px 8px #ff2a3680, 0 1px 0 #fff1'}}>Mes playlists Spotify préférées</h1>
      <div className="flex flex-col gap-8">
        {playlists.map((pl, idx) => (
          <div key={idx} className="border-4 border-[#b1001a] rounded-2xl bg-white dark:bg-[#181818] p-6 shadow-xl flex flex-col sm:flex-row items-center gap-6">
            <img src={pl.cover} alt={pl.title} className="w-24 h-24 rounded-xl border-2 border-[#b1001a] shadow-md" />
            <div className="flex-1 text-left">
              <h2 className="text-2xl font-bold mb-2" style={{color:'#b1001a'}}>{pl.title}</h2>
              <a href={pl.url} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 rounded-full border-2 border-[#b1001a] bg-white dark:bg-[#181818] text-[#b1001a] dark:text-[#ff2a36] font-bold shadow hover:bg-[#b1001a] hover:text-white dark:hover:bg-[#ff2a36] dark:hover:text-white transition-all text-lg">Écouter sur Spotify</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
