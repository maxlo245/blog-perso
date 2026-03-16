export default function Articles() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4 animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-8 text-[#b85c00]" style={{textShadow:'2px 2px 0 #fff, 4px 4px 8px #ffb34799'}}>Articles</h1>
      <div className="flex flex-col gap-8">
        {/* Placez ici vos articles */}
        <div className="border-2 border-[#b85c00] rounded-xl bg-[#fffbe6] p-4 shadow">
          <h2 className="text-xl font-bold mb-2 text-[#b85c00]">Premier article</h2>
          <p className="text-[#b85c00]">Bienvenue sur mon blog ! Ceci est un exemple d'article. Vous pouvez ajouter vos propres textes ici.</p>
        </div>
      </div>
    </section>
  );
}
