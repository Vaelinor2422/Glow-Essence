import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Mail, MapPin, Phone, Send } from 'lucide-react';

interface FormState {
  name: string;
  address: string;
  phone: string;
  description: string;
}

const initial: FormState = { name: '', address: '', phone: '', description: '' };

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.address.trim()) next.address = 'Please enter your address';
    if (!form.phone.trim()) next.phone = 'Please enter your phone';
    else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone)) next.phone = 'Please enter a valid phone number';
    if (!form.description.trim()) next.description = 'Please tell us how we can help';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSent(true);
      setForm(initial);
      setTimeout(() => setSent(false), 4000);
    }
  };

  const set = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  return (
    <div className="container-page py-12 lg:py-16">
      <div className="flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl font-semibold text-brand-ink sm:text-5xl"
        >
          Contact
        </motion.h1>
      </div>

      <div className="mt-12 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-lightPink via-brand-softPink/50 to-brand-lightPink">
        <div className="grid grid-cols-1 gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col"
          >
            <h2 className="font-serif text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl">
              Have Questions?
              <br />
              Let's Talk!
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-stone">
              Our team is ready to help you — just send us a message and we'll get back to you soon.
            </p>

            <div className="mt-8 space-y-4">
              <InfoRow icon={<MapPin size={18} />} label="San Francisco, CA 94107, United States" />
              <InfoRow icon={<Mail size={18} />} label="hello@glowessence.com" />
              <InfoRow icon={<Phone size={18} />} label="+1 (415) 555-0198" />
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] shadow-card">
              <img
                src="https://images.pexels.com/photos/7038196/pexels-photo-7038196.jpeg?auto=compress&cs=tinysrgb&h=440&w=940"
                alt="Hands holding skincare products"
                className="h-44 w-full object-cover sm:h-52"
              />
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col rounded-[2rem] bg-white p-6 shadow-soft sm:p-8"
            noValidate
          >
            <Field label="Name" error={errors.name}>
              <input
                value={form.name}
                onChange={(e) => set('name', e.target.value)}
                className="w-full rounded-2xl border border-brand-lightPink bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-pink"
                placeholder="Your name"
              />
            </Field>
            <Field label="Address" error={errors.address}>
              <input
                value={form.address}
                onChange={(e) => set('address', e.target.value)}
                className="w-full rounded-2xl border border-brand-lightPink bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-pink"
                placeholder="Your address"
              />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <input
                value={form.phone}
                onChange={(e) => set('phone', e.target.value)}
                className="w-full rounded-2xl border border-brand-lightPink bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-pink"
                placeholder="Your phone number"
              />
            </Field>
            <Field label="Description" error={errors.description}>
              <textarea
                value={form.description}
                onChange={(e) => set('description', e.target.value)}
                rows={4}
                className="w-full resize-none rounded-2xl border border-brand-lightPink bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-pink"
                placeholder="How can we help?"
              />
            </Field>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-pink px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-accent"
            >
              <Send size={16} /> Send
            </motion.button>

            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="mt-4 flex items-center gap-2 rounded-2xl bg-brand-mint px-4 py-3 text-sm font-medium text-brand-ink"
                >
                  <Check size={16} className="text-emerald-600" /> Thank you! Your message has been sent.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="mt-8 overflow-hidden rounded-[2.5rem] shadow-card">
        <div className="relative h-72 w-full bg-brand-cyan/40 sm:h-80">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,159,175,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,159,175,0.18) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-pink text-white shadow-float">
                <MapPin size={22} />
              </span>
              <span className="mt-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-brand-ink shadow-soft">
                Glow Essence HQ · San Francisco
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-brand-pink shadow-soft">{icon}</span>
      <span className="text-sm font-medium text-brand-ink">{label}</span>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-stone">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
