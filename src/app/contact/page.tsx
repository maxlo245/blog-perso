export default function Contact() {
  return (
    <section className="max-w-xl mx-auto py-16 px-4 animate-fade-in">
      <div className="border-4 border-[#ffb347] rounded-2xl bg-[#fffbe6] p-8 shadow-2xl">
        <h1 className="text-5xl font-extrabold mb-4 text-[#b85c00]" style={{textShadow:'2px 2px 0 #fff, 4px 4px 8px #ffb34799'}}>Contact</h1>
        <p className="mb-6 text-lg font-bold text-[#b85c00]">Envoie-moi un message !</p>
        <form className="flex flex-col gap-5">
          <input type="text" name="name" placeholder="Ton nom ou pseudo" className="border-2 border-[#ffb347] rounded-xl px-4 py-3 bg-[#fffbe6] text-[#b85c00] font-bold" required />
          <input type="email" name="email" placeholder="Ton email" className="border-2 border-[#ffb347] rounded-xl px-4 py-3 bg-[#fffbe6] text-[#b85c00] font-bold" required />
          <textarea name="message" placeholder="Ton message (en mode 2000s)" className="border-2 border-[#ffb347] rounded-xl px-4 py-3 bg-[#fffbe6] text-[#b85c00] font-bold" rows={4} required />
          <button type="submit" className="px-8 py-3 rounded-full border-2 border-[#ffb347] bg-gradient-to-r from-[#fffbe6] to-[#ffe4b5] text-[#b85c00] font-bold shadow-lg hover:bg-[#ffb347] hover:text-white transition-all text-lg">Envoyer</button>
        </form>
      </div>
    </section>
  );
}
