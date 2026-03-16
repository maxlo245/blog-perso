import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-4 text-center animate-fade-in">
      <h1 className="text-6xl font-extrabold mb-4" style={{color:'#ff2a36', textShadow:'0 2px 8px #ff2a3680, 0 1px 0 #fff1'}}>Bienvenue sur mon blog</h1>
      <div className="border-4 border-[#ff2a36] rounded-2xl bg-white p-6 shadow-xl mb-8">
        <p className="text-2xl font-bold mb-2" style={{color:'#ff2a36'}}>Hello visiteur !</p>
        <p className="text-lg" style={{color:'#111'}}>Découvre mes articles, laisse-moi un message dans le <a href="/livre-dor" className="underline text-[#ff2a36] hover:bg-[#ff2a36] hover:text-white" style={{padding:'0 4px',borderRadius:4}}>livre d'or</a> ou <a href="/contact" className="underline text-[#ff2a36] hover:bg-[#ff2a36] hover:text-white" style={{padding:'0 4px',borderRadius:4}}>contacte-moi</a> !</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
        <a href="/livre-dor" className="px-8 py-3 rounded-full border-2 border-[#ff2a36] bg-white text-[#ff2a36] font-bold shadow-lg hover:bg-[#ff2a36] hover:text-white transition-all text-lg">Livre d'or</a>
        <a href="/contact" className="px-8 py-3 rounded-full border-2 border-[#ff2a36] bg-white text-[#ff2a36] font-bold shadow-lg hover:bg-[#ff2a36] hover:text-white transition-all text-lg">Contact</a>
      </div>
    </section>
  );
}
