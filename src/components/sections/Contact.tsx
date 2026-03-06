/**
 * Contact Component
 *
 * Displays contact information (email, phone) and a Netlify contact form
 */

import { useEffect, useState } from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import "./Contact.css"

type ContactContent = {
  title: string
  shortTitle: string
  subtitle: string
  info: {
    email: string
    phone: string
    responseTime: string
  }
  form: {
    name: string
    email: string
    phone: string
    message: string
    submit: string
    success: string
    error: string
    privacyNote: string
    privacyLink: string
    privacyUrl: string
  }
}

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

type FormStatus = "idle" | "submitting" | "success" | "error"

const encodeFormData = (data: Record<string, string>): string =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")

export function Contact() {
  const { language } = useLanguage()
  const [content, setContent] = useState<ContactContent | null>(null)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`/content/contact-${language}.json`)
        const data = await response.json()
        setContent(data)
      } catch (error) {
        console.error("Failed to load contact content:", error)
      }
    }
    loadContent()
  }, [language])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          "form-name": "contact",
          "bot-field": "",
          ...formData,
        }),
      })
      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (!content) return null

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">{content.title}</h2>
        <p className="contact__subtitle">{content.subtitle}</p>

        <div className="contact__info">
          <div className="contact__item">
            <div className="contact__icon">✉️</div>
            <div className="contact__details">
              <div className="contact__label">Email</div>
              <a
                href={`mailto:${content.info.email}`}
                className="contact__link"
              >
                {content.info.email}
              </a>
            </div>
          </div>

          <div className="contact__item">
            <div className="contact__icon">📱</div>
            <div className="contact__details">
              <div className="contact__label">
                {language === "fi" ? "Puhelin" : "Phone"}
              </div>
              <a
                href={`tel:${content.info.phone.replace(/\s/g, "")}`}
                className="contact__link"
              >
                {content.info.phone}
              </a>
            </div>
          </div>
        </div>

        <form
          className="contact__form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="contact__form-row">
            <div className="contact__field">
              <label className="contact__field-label" htmlFor="name">
                {content.form.name}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="contact__input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__field-label" htmlFor="email">
                {content.form.email}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="contact__input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="contact__field">
            <label className="contact__field-label" htmlFor="phone">
              {content.form.phone}
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              className="contact__input"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="contact__field">
            <label className="contact__field-label" htmlFor="message">
              {content.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              className="contact__textarea"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {status === "success" && (
            <p className="contact__form-success">{content.form.success}</p>
          )}
          {status === "error" && (
            <p className="contact__form-error">{content.form.error}</p>
          )}

          <div className="contact__form-footer">
            <button
              type="submit"
              className="contact__submit"
              disabled={status === "submitting"}
            >
              {content.form.submit}
            </button>
            <p className="contact__privacy-note">
              {content.form.privacyNote}{" "}
              <a
                href={content.form.privacyUrl}
                className="contact__privacy-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.form.privacyLink}
              </a>
              .
            </p>
          </div>
        </form>

        <p className="contact__response-time">{content.info.responseTime}</p>
      </div>
    </section>
  )
}
