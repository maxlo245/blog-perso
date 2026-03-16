const categories = [
  {
    name: "Photos",
    description: "Galerie de mes plus belles photos.",
    url: "/categories/photos",
    color: "#ffb347"
  },
  {
    name: "Vidéos",
    description: "Mes vidéos préférées et souvenirs.",
    url: "/categories/videos",
    color: "#1db954"
  },
  {
    name: "Articles",
    description: "Tous mes articles de blog.",
    url: "/categories/articles",
    color: "#b85c00"
  }
];

export default function Categories() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4 animate-fade-in">
      <h1 className="text-5xl font-extrabold mb-8 text-[#b85c00]" style={{textShadow:'2px 2px 0 #fff, 4px 4px 8px #ffb34799'}}>Catégories</h1>
      <div className="flex flex-col gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="border-4 rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center gap-6" style={{borderColor:cat.color, background:'#fffbe6'}}>
            <div className="flex-1 text-left">
              <h2 className="text-2xl font-bold mb-2" style={{color:cat.color}}>{cat.name}</h2>
              <p className="mb-2 text-[#b85c00]">{cat.description}</p>
              <a href={cat.url} className="inline-block px-6 py-2 rounded-full border-2 font-bold shadow hover:bg-[#ffb347] hover:text-white transition-all text-lg" style={{borderColor:cat.color, color:cat.color}}>Voir</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
