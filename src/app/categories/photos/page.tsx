export default function Photos() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4 animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-8 text-[#ffb347]" style={{textShadow:'2px 2px 0 #fff, 4px 4px 8px #ffb34799'}}>Galerie Photos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {/* Placez ici vos images */}
        <div className="border-2 border-[#ffb347] rounded-xl bg-[#fffbe6] p-2 shadow">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400" alt="Photo 1" className="rounded-lg w-full h-auto" />
        </div>
        <div className="border-2 border-[#ffb347] rounded-xl bg-[#fffbe6] p-2 shadow">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400" alt="Photo 2" className="rounded-lg w-full h-auto" />
        </div>
        <div className="border-2 border-[#ffb347] rounded-xl bg-[#fffbe6] p-2 shadow">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400" alt="Photo 3" className="rounded-lg w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
