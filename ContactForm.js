import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch('https://formspree.io/f/xanpnllq', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });

    if (res.ok) {
      setStatus('Thank you, we will contact you shortly!');
      e.target.reset();
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <input type="text" name="name" placeholder="Full name" className="rounded-2xl w-full" required />
      <input type="email" name="email" placeholder="Email" className="rounded-2xl w-full" required />
      <input type="text" name="phone" placeholder="Phone" className="rounded-2xl w-full" />
      <input type="text" name="address" placeholder="Address" className="rounded-2xl w-full" />
      <textarea name="message" placeholder="Describe your concern" className="min-h-[120px] rounded-2xl w-full"></textarea>
      <button type="submit" className="rounded-2xl w-full bg-green-600 hover:bg-green-700 text-white">Request Inspection</button>
      {status && <p className="mt-3 text-green-700 font-medium">{status}</p>}
    </form>
  );
}
