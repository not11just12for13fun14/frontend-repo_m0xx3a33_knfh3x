import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-white/80">The Wedding of</p>
        <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white/95 leading-tight">
          Ava & Julian
        </h1>
        <p className="mt-4 text-white/80 text-base md:text-lg">Saturday, June 21st, 2025 • Lake Como, Italy</p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#rsvp" className="rounded-full bg-white/95 text-gray-900 px-6 py-3 font-medium hover:bg-white transition-colors">
            RSVP Now
          </a>
          <a href="#details" className="rounded-full border border-white/40 text-white/90 px-6 py-3 font-medium hover:bg-white/10 transition-colors">
            Event Details
          </a>
        </div>
      </div>
    </section>
  );
}
