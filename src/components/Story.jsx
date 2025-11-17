export default function Story() {
  return (
    <section id="story" className="relative py-24 bg-black text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Our Story</h2>
            <p className="mt-6 text-white/80 leading-relaxed">
              From a chance meeting in a rainy New York cafe to sunset walks along the Amalfi Coast,
              every chapter has brought us closer. On June 21st we celebrate the start of our next chapter
              with the people we love most.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              We can’t wait to share an evening of connection, music, and wonder on the shores of Lake Como.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-fuchsia-500/20 via-cyan-400/20 to-indigo-400/20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6">
              <div className="aspect-[4/3] w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
