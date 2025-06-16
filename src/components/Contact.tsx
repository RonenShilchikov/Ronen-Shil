'use client';

import { useState, useRef, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

type ContactProps = {
  isDark: boolean;
};

export default function Contact({ isDark }: ContactProps) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ email: '', name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
  const AUTO_REPLY_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY!;

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (step === 0) emailRef.current?.focus();
    if (step === 1) nameRef.current?.focus();
    if (step === 2) messageRef.current?.focus();
  }, [step]);

  const handleSubmit = () => {
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() =>
        emailjs.send(SERVICE_ID, AUTO_REPLY_ID, form, PUBLIC_KEY)
      )
      .then(() => {
        setSubmitted(true);
        setForm({ email: '', name: '', message: '' });
        setStep(0);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section
      id="contact"
      className={`relative py-20 px-4 sm:px-6 flex justify-center items-center overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      {/* Glowing background */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl animate-pulse ${
            isDark ? 'bg-blue-500/10' : 'bg-blue-400/20'
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
            isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'
          }`}
        />
      </div>

      <div className="w-full max-w-2xl font-terminal text-sm relative z-10">
        <div className="rounded-xl shadow-2xl border border-gray-700 overflow-hidden font-mono text-sm bg-[#1e1e1e] text-[#d4d4d4]">
          {/* Terminal header */}
          <div className="bg-[#2d2d2d] px-4 sm:px-6 py-3 flex items-center justify-between border-b border-gray-700 relative rounded-t-xl">
            <span className="absolute left-1/2 -translate-x-1/2 text-xs text-gray-200 font-semibold">
              rshilchikov@gmail.com
            </span>
            <div className="flex space-x-2 absolute right-4 top-1/2 -translate-y-1/2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-4 sm:p-6 space-y-4 text-base sm:text-sm">
            <p>
              Hey there! <span className="text-white">I&apos;m excited to hear from you ✍️</span>
            </p>
            <hr className="border-gray-600" />

            {/* Step 1 */}
            <div>
              <p>
                To start, could you give me <span className="text-purple-400">your email</span>?
              </p>
              {step > 0 && (
                <p className="text-green-400 flex items-center gap-1 mt-1">
                  <CheckCircle2 size={16} /> {form.email}
                </p>
              )}
              {step === 0 && (
                <div className="mt-2 flex items-center flex-wrap">
                  <span className="text-[#00ff90]">➜</span>
                  <span className="text-[#83a598] ml-1">~</span>
                  <input
                    type="email"
                    ref={emailRef}
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                    className="ml-2 bg-transparent border-none outline-none text-purple-300 w-full animate-blink-cursor"
                    placeholder="Enter your email"
                  />
                </div>
              )}
            </div>

            {/* Step 2 */}
            {step > 0 && (
              <div>
                <p>
                  Awesome! And what&apos;s <span className="text-purple-400">your name</span>?
                </p>
                {step > 1 && (
                  <p className="text-green-400 flex items-center gap-1 mt-1">
                    <CheckCircle2 size={16} /> {form.name}
                  </p>
                )}
                {step === 1 && (
                  <div className="mt-2 flex items-center flex-wrap">
                    <span className="text-[#00ff90]">➜</span>
                    <span className="text-[#83a598] ml-1">~</span>
                    <input
                      type="text"
                      ref={nameRef}
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                      className="ml-2 bg-transparent border-none outline-none text-purple-300 w-full animate-blink-cursor"
                      placeholder="Enter your name"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Step 3 */}
            {step > 1 && (
              <div>
                <p>
                  Perfect, and <span className="text-purple-400">how can we help you?</span>
                </p>
                <div className="mt-2 flex items-start">
                  <span className="text-[#00ff90] mt-1">➜</span>
                  <span className="text-[#83a598] ml-1 mt-1">~</span>
                  <textarea
                    ref={messageRef}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Enter description"
                    className="ml-2 bg-transparent border-none outline-none text-purple-300 w-full resize-none animate-blink-cursor"
                  />
                </div>
              </div>
            )}

            {/* Sent confirmation */}
            {submitted && (
              <div className="pt-4 text-green-400">
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  <span>
                    Sent! I&apos;m get back to you <span className="text-[#00ff90] font-semibold">ASAP</span> 😎
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Submit button */}
        {step === 2 && form.message && (
          <div className="text-center mt-6">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
