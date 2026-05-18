'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Check, Lock, ChevronRight, ChevronLeft } from 'lucide-react'

type Step = 1 | 2 | 3 | 4

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  country: string
  businessType: string
  message: string
}

interface Errors {
  name?: string
  email?: string
  phone?: string
  company?: string
  country?: string
  businessType?: string
}

const stepLabels = ['About you', 'Your business', 'Final message']

const countryOptions = [
  '', 'Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Bahrain', 'Oman',
  'Iraq', 'Jordan', 'Egypt', 'Malaysia', 'Indonesia', 'Pakistan', 'Bangladesh', 'Other',
]

const businessTypeOptions = [
  '', 'AV Distributor', 'CCTV Distributor', 'IT Distributor',
  'System Integrator', 'Retailer', 'Other',
]

const fieldClass =
  'w-full border border-brand-gray-200 rounded-[var(--radius-md)] px-4 py-3 text-[var(--text-body)] text-brand-black font-light focus:outline-none focus:border-brand-black transition-colors duration-150 bg-white'

const labelClass = 'block mb-1.5 text-[var(--text-body-sm)] font-semibold text-brand-black'

const errorClass = 'mt-1 text-[var(--text-caption)] text-brand-red'

function progressWidth(step: Step): string {
  if (step === 1) return 'w-1/3'
  if (step === 2) return 'w-2/3'
  return 'w-full'
}

export function DistributorForm() {
  const [currentStep, setCurrentStep] = useState<Step>(1)
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '',
    company: '', country: '', businessType: '',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})

  function update(field: keyof FormData, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field as keyof Errors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  function validateStep1(): Errors {
    const e: Errors = {}
    if (!formData.name.trim()) e.name = 'Full name is required'
    if (!formData.email.trim() || !formData.email.includes('@')) e.email = 'A valid email address is required'
    if (!formData.phone.trim()) e.phone = 'Phone number is required'
    return e
  }

  function validateStep2(): Errors {
    const e: Errors = {}
    if (!formData.company.trim()) e.company = 'Company name is required'
    if (!formData.country) e.country = 'Please select a country'
    if (!formData.businessType) e.businessType = 'Please select a business type'
    return e
  }

  function handleNext() {
    const e = currentStep === 1 ? validateStep1() : validateStep2()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setErrors({})
    setCurrentStep((currentStep + 1) as Step)
  }

  function handleBack() {
    setErrors({})
    setCurrentStep((currentStep - 1) as Step)
  }

  function handleSubmit() {
    setCurrentStep(4)
  }

  if (currentStep === 4) {
    return (
      <div className="bg-white border border-brand-gray-200 rounded-[var(--radius-xl)] p-4 md:p-8 shadow-[var(--shadow-md)] text-center">
        <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto">
          <Check size={32} className="text-white" strokeWidth={2.5} />
        </div>
        <h3 className="text-[var(--text-h3)] font-extrabold text-brand-black mt-6">
          Application Received
        </h3>
        <p className="text-[var(--text-body)] text-brand-gray-500 font-light mt-3 max-w-sm mx-auto">
          Thank you. Our team will review your application and get back to you within 2 business days.
        </p>
        <div className="bg-brand-gray-100 rounded-[var(--radius-lg)] p-6 mt-8 text-left max-w-sm mx-auto">
          <p className="text-[var(--text-body-sm)] font-semibold text-brand-black mb-4">
            What happens next
          </p>
          <div className="flex flex-col gap-3">
            {[
              'We review your application and verify your business',
              'Our team contacts you within 2 business days',
              'You receive your distributor agreement and onboarding pack',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 bg-brand-red rounded-full text-white text-[var(--text-caption)] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-[var(--text-body-sm)] text-brand-gray-500 font-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-brand-gray-200 rounded-[var(--radius-xl)] p-4 md:p-8 shadow-[var(--shadow-md)]">
      {/* Step indicator */}
      <div className="pb-6 mb-6 border-b border-brand-gray-200">
        {/* Mobile: "Step X of 3" */}
        <p className="md:hidden text-[var(--text-body-sm)] text-brand-gray-500 font-light mb-2">
          Step {currentStep} of 3
        </p>
        {/* Progress bar */}
        <div className="w-full h-1 bg-brand-gray-200 rounded-full mb-4">
          <div
            className={`h-1 bg-brand-red rounded-full transition-all duration-300 ${progressWidth(currentStep as 1|2|3)}`}
          />
        </div>
        {/* Dots — desktop only */}
        <div className="hidden md:flex justify-between">
          {stepLabels.map((label, i) => {
            const n = i + 1
            const isCompleted = n < currentStep
            const isActive = n === currentStep
            return (
              <div key={n} className="flex flex-col items-center gap-1.5">
                <span
                  className={[
                    'w-7 h-7 rounded-full flex items-center justify-center text-[var(--text-caption)] font-semibold',
                    isCompleted || isActive ? 'bg-brand-red text-white' : 'bg-brand-gray-200 text-brand-gray-500',
                  ].join(' ')}
                >
                  {isCompleted ? <Check size={12} strokeWidth={3} /> : n}
                </span>
                <span
                  className={[
                    'text-[var(--text-caption)]',
                    isActive ? 'text-brand-red font-semibold' : 'text-brand-gray-500 font-light',
                  ].join(' ')}
                >
                  {label}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Step 1 */}
      {currentStep === 1 && (
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className={labelClass}>Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={e => update('name', e.target.value)}
              className={fieldClass}
            />
            {errors.name && <p className={errorClass}>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={e => update('email', e.target.value)}
              className={fieldClass}
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 234 567 890"
              value={formData.phone}
              onChange={e => update('phone', e.target.value)}
              className={fieldClass}
            />
            {errors.phone && <p className={errorClass}>{errors.phone}</p>}
          </div>
          <div className="flex justify-end mt-2">
            <Button
              variant="primary"
              size="md"
              onClick={handleNext}
              className="w-full md:w-auto"
            >
              Next <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 2 */}
      {currentStep === 2 && (
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="company" className={labelClass}>Company Name</label>
            <input
              id="company"
              type="text"
              placeholder="Your company name"
              value={formData.company}
              onChange={e => update('company', e.target.value)}
              className={fieldClass}
            />
            {errors.company && <p className={errorClass}>{errors.company}</p>}
          </div>
          <div>
            <label htmlFor="country" className={labelClass}>Country</label>
            <select
              id="country"
              value={formData.country}
              onChange={e => update('country', e.target.value)}
              className={fieldClass}
            >
              {countryOptions.map(opt => (
                <option key={opt} value={opt}>{opt === '' ? 'Select a country' : opt}</option>
              ))}
            </select>
            {errors.country && <p className={errorClass}>{errors.country}</p>}
          </div>
          <div>
            <label htmlFor="businessType" className={labelClass}>Business Type</label>
            <select
              id="businessType"
              value={formData.businessType}
              onChange={e => update('businessType', e.target.value)}
              className={fieldClass}
            >
              {businessTypeOptions.map(opt => (
                <option key={opt} value={opt}>{opt === '' ? 'Select a business type' : opt}</option>
              ))}
            </select>
            {errors.businessType && <p className={errorClass}>{errors.businessType}</p>}
          </div>
          <div className="flex gap-3 mt-2">
            <Button variant="secondary" size="md" onClick={handleBack}>
              <ChevronLeft size={16} className="mr-1" /> Back
            </Button>
            <Button variant="primary" size="md" onClick={handleNext} className="flex-1">
              Next <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {currentStep === 3 && (
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="message" className={labelClass}>Message <span className="text-brand-gray-500 font-light">(optional)</span></label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your business and the markets you serve..."
              value={formData.message}
              onChange={e => update('message', e.target.value)}
              className={fieldClass}
            />
          </div>
          <div className="bg-brand-gray-100 rounded-[var(--radius-md)] p-4 flex items-start gap-3">
            <Lock size={16} className="text-brand-gray-500 shrink-0 mt-0.5" />
            <p className="text-[var(--text-body-sm)] text-brand-gray-500 font-light">
              Your information is private. We review every application personally and respond within 2 business days.
            </p>
          </div>
          <div className="flex gap-3 mt-2">
            <Button variant="secondary" size="md" onClick={handleBack}>
              <ChevronLeft size={16} className="mr-1" /> Back
            </Button>
            <Button variant="primary" size="md" onClick={handleSubmit} className="flex-1 sm:flex-none sm:w-auto">
              Submit Application
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DistributorForm
