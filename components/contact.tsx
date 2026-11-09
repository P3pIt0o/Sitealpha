'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/20 blur-[100px]"
          />

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold text-primary">
                Contact
              </span>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
                Un projet en tête&nbsp;? Parlons-en.
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Décrivez votre idée en quelques mots. Je reviens vers vous pour
                définir ensemble le site qui vous ressemble.
              </p>
            </div>

            {sent ? (
              <div className="flex flex-col items-start justify-center rounded-2xl border border-primary/40 bg-secondary/40 p-8">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold">Message prêt&nbsp;!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Merci pour votre intérêt. Votre demande a bien été enregistrée
                  dans ce formulaire de démonstration.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="name" label="Nom" type="text" placeholder="Votre nom" />
                  <Field
                    id="email"
                    label="E-mail"
                    type="email"
                    placeholder="vous@exemple.ch"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Votre projet
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Parlez-moi de votre projet…"
                    className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
                >
                  Envoyer ma demande
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string
  label: string
  type: string
  placeholder: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  )
}
