import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  Info
} from 'lucide-react';

export const ContactSection = () => {
  const { profile, showToast } = usePortfolio();

  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Validation errors
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  // Email and Phone details
  const emailAddress = profile.email || "sujisri73@gmail.com";
  const phoneNumber = profile.phone || "+91 99430 63536";
  const phoneTel = profile.phoneTel || "+919943063536";
  const linkedInUrl = profile.linkedinUrl || "https://www.linkedin.com/in/sujitha-gurumoorthy-18989b39b/";
  const githubUrl = profile.githubUrl || "https://github.com/suji436";

  // Validate form
  const validate = (values) => {
    const errs = {};
    if (!values.name || values.name.trim().length < 2) {
      errs.name = 'Please provide your name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email || !emailRegex.test(values.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!values.message || values.message.trim().length < 10) {
      errs.message = 'Please enter a message of at least 10 characters.';
    }
    return errs;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(formData));
  };

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate(formData);
    setErrors(formErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(formErrors).length === 0) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
      showToast('Validation successful! Message prepared.');
    } else {
      showToast('Please fix the errors in the form.', 'error');
    }
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    showToast(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  // Pre-formatted mailto URL
  const mailtoUrl = submittedData
    ? `mailto:${emailAddress}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${submittedData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${submittedData.name}\nEmail: ${submittedData.email}\n\nMessage:\n${submittedData.message}`
      )}`
    : `mailto:${emailAddress}`;

  return (
    <section id="contact" className="space-y-6 pt-6 reveal-on-scroll">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            09 // Direct Communication
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Contact Me
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
          Reach out directly for AI/ML engineering internships, research projects, or technical collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Direct Contact Info Cards */}
        <div className="lg:col-span-5 space-y-3.5">
          
          {/* Email Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border card-hover flex items-start justify-between gap-3">
            <div className="flex items-start gap-3.5 min-w-0">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-navy-800 text-blue-600 dark:text-sky-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Email Address
                </span>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors truncate block"
                  title="Click to send email"
                >
                  {emailAddress}
                </a>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 block">
                  Clickable • Opens in your default mail app
                </span>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(emailAddress, 'Email')}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-lavender-50 dark:hover:bg-darkbg-surface transition-colors shrink-0"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copiedField === 'Email' ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border card-hover flex items-start justify-between gap-3">
            <div className="flex items-start gap-3.5 min-w-0">
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-navy-800 text-emerald-600 dark:text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Mobile Phone
                </span>
                <a
                  href={`tel:${phoneTel}`}
                  className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate block font-mono"
                  title="Click to dial phone number"
                >
                  {phoneNumber}
                </a>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 block">
                  Clickable • Direct call
                </span>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(phoneNumber, 'Phone')}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-lavender-50 dark:hover:bg-darkbg-surface transition-colors shrink-0"
              title="Copy phone number"
              aria-label="Copy phone number"
            >
              {copiedField === 'Phone' ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* LinkedIn Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border card-hover flex items-start justify-between gap-3">
            <div className="flex items-start gap-3.5 min-w-0">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-navy-800 text-blue-600 dark:text-blue-400 shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  LinkedIn Profile
                </span>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
                  title="Open LinkedIn in new tab"
                >
                  Sujitha Gurumoorthy
                </a>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 block">
                  Professional network • Opens in new tab
                </span>
              </div>
            </div>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-lavender-50 dark:hover:bg-darkbg-surface transition-colors shrink-0"
              title="Open LinkedIn in new tab"
              aria-label="Open LinkedIn"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border card-hover flex items-start justify-between gap-3">
            <div className="flex items-start gap-3.5 min-w-0">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-800 dark:text-slate-200 shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  GitHub Profile
                </span>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-lavender-700 dark:hover:text-sky-400 transition-colors truncate block font-mono"
                  title="Open GitHub in new tab"
                >
                  github.com/{profile.githubUsername || 'suji436'}
                </a>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 block">
                  Open-source projects & code • Opens in new tab
                </span>
              </div>
            </div>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-lavender-50 dark:hover:bg-darkbg-surface transition-colors shrink-0"
              title="Open GitHub in new tab"
              aria-label="Open GitHub"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-darkbg-card border border-lavender-200/80 dark:border-darkbg-border shadow-soft-navy relative overflow-hidden">
            
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 relative">
                
                <div className="border-b border-slate-100 dark:border-darkbg-border pb-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-sky-500" />
                    <span>Send a Direct Message</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Fill out the fields below. Client-side form validation is active.
                  </p>
                </div>

                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    placeholder="e.g. Dr. Jane Smith / Tech Recruiter"
                    className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border bg-lavender-50/40 dark:bg-darkbg-surface text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      touched.name && errors.name
                        ? 'border-rose-400 focus:ring-rose-400/40'
                        : 'border-slate-200 dark:border-darkbg-border focus:ring-sky-500/40 focus:border-sky-500'
                    }`}
                  />
                  {touched.name && errors.name && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="e.g. jane@company.com"
                    className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border bg-lavender-50/40 dark:bg-darkbg-surface text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      touched.email && errors.email
                        ? 'border-rose-400 focus:ring-rose-400/40'
                        : 'border-slate-200 dark:border-darkbg-border focus:ring-sky-500/40 focus:border-sky-500'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    placeholder="Hello Sujitha, I would like to discuss an opportunity regarding..."
                    className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border bg-lavender-50/40 dark:bg-darkbg-surface text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-y ${
                      touched.message && errors.message
                        ? 'border-rose-400 focus:ring-rose-400/40'
                        : 'border-slate-200 dark:border-darkbg-border focus:ring-sky-500/40 focus:border-sky-500'
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Backend configuration note */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/70 dark:border-darkbg-border flex items-start gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                  <Info className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <span>
                    Form input is verified on-the-fly. Once validated, you can automatically launch your email client with your prefilled inquiry.
                  </span>
                </div>

                {/* Submit button */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-sky-600 via-blue-600 to-lavender-700 hover:from-sky-500 hover:to-lavender-600 text-white shadow-soft-purple hover:shadow-glow-blue btn-hover"
                  >
                    <Send className="w-4 h-4" />
                    <span>Verify & Prepare Message</span>
                  </button>
                </div>

              </form>
            ) : (
              /* Submission Feedback Panel (Explicit & Functional) */
              <div className="space-y-4 animate-fade-in">
                
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                      Form Verified Successfully!
                    </h4>
                    <p className="text-xs text-emerald-800 dark:text-emerald-300 mt-0.5 leading-relaxed">
                      Thank you, <strong className="font-semibold">{submittedData.name}</strong>. Your message is validated. Because this portfolio runs client-side without an external mail server, you can dispatch it directly using your email app with one click below:
                    </p>
                  </div>
                </div>

                {/* Message preview box */}
                <div className="p-4 rounded-2xl bg-lavender-50/60 dark:bg-darkbg-surface border border-lavender-200/70 dark:border-darkbg-border space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-400 font-mono text-[11px]">
                    <span>Sender: {submittedData.email}</span>
                    <span>Recipient: {emailAddress}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-darkbg-card border border-slate-200/70 dark:border-darkbg-border text-slate-700 dark:text-slate-200 font-sans whitespace-pre-wrap">
                    {submittedData.message}
                  </div>
                </div>

                {/* Actions: Send via mailto or Copy */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    ← Edit or Send Another Message
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => copyToClipboard(submittedData.message, 'Message text')}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-darkbg-surface text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-darkbg-border hover:bg-slate-50 transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Text</span>
                    </button>

                    <a
                      href={mailtoUrl}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow-soft-purple hover:shadow-glow-blue transition-all btn-hover"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Open in Email App</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>

      </div>

    </section>
  );
};
