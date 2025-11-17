import { useState } from 'react'

export default function RSVP() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      await new Promise(r => setTimeout(r, 800))
      setStatus('success')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="rsvp" className="relative py-24 bg-gradient-to-b from-black to-gray-950 text-white">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(900px_600px_at_20%_-10%,rgba(99,102,241,0.25),transparent)]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(900px_600px_at_80%_110%,rgba(34,197,94,0.2),transparent)]" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">RSVP</h2>
          <p className="mt-3 text-white/70">Please let us know if you can join us</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <input name="name" required placeholder="Full name" className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <input name="guests" type="number" min="1" max="10" placeholder="Guests" className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
          <select name="attendance" className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white/80 focus:outline-none focus:ring-2 focus:ring-white/30">
            <option value="yes" className="text-gray-900">Happily Accept</option>
            <option value="no" className="text-gray-900">Regretfully Decline</option>
          </select>
          <textarea name="message" placeholder="Dietary restrictions or a note" className="md:col-span-2 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 min-h-[120px]" />

          <div className="md:col-span-2 flex items-center justify-between mt-2">
            <p className="text-white/60 text-sm">Please RSVP by May 20, 2025</p>
            <button disabled={status==='loading'} className="rounded-full bg-white/95 text-gray-900 px-6 py-3 font-medium hover:bg-white transition-colors">
              {status==='loading' ? 'Sending…' : 'Send RSVP'}
            </button>
          </div>

          {status==='success' && (
            <p className="md:col-span-2 text-emerald-400">Thank you! We received your RSVP.</p>
          )}
          {status==='error' && (
            <p className="md:col-span-2 text-rose-400">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}
