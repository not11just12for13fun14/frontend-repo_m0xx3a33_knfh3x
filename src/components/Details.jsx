export default function Details() {
  const info = [
    { title: 'Ceremony', time: '3:00 PM', location: 'Villa del Balbianello Gardens' },
    { title: 'Cocktail Hour', time: '5:00 PM', location: 'Terrace Overlooking Lake Como' },
    { title: 'Reception', time: '6:30 PM', location: 'Grand Ballroom, Villa del Balbianello' },
  ];

  return (
    <section id="details" className="relative py-24 bg-gradient-to-b from-gray-950 to-black text-white">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1200px_800px_at_80%_-10%,rgba(59,130,246,0.25),transparent)]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1000px_600px_at_10%_110%,rgba(236,72,153,0.25),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Event Details</h2>
          <p className="mt-3 text-white/70">Dress code: Black tie optional</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {info.map((card) => (
            <div key={card.title} className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-6">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-white/80">{card.time}</p>
              <p className="text-white/70">{card.location}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 text-center">
          <p className="text-white/80">Shuttle transportation will be provided from central Como at 2:15 PM.</p>
        </div>
      </div>
    </section>
  );
}
