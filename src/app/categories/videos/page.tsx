export default function Videos() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4 animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-8 text-[#1db954]" style={{textShadow:'2px 2px 0 #fff, 4px 4px 8px #1db95499'}}>Vidéos</h1>
      <div className="flex flex-col gap-8">
        {/* Placez ici vos vidéos */}
        <div className="border-2 border-[#1db954] rounded-xl bg-[#e8fff1] p-4 shadow">
          <iframe width="100%" height="215" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Vidéo 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="border-2 border-[#1db954] rounded-xl bg-[#e8fff1] p-4 shadow">
          <iframe width="100%" height="215" src="https://www.youtube.com/embed/3JZ_D3ELwOQ" title="Vidéo 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
}
