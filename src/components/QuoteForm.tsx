'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type FormData = {
  // Contact Info
  name: string;
  email: string;
  phone: string;
  address: string;
  
  // Ramp Details
  installAddress: string;
  installTimeframe: string;
  knowRampLength: boolean;
  estimatedRampLength?: string;
  knowRentalDuration: boolean;
  estimatedRentalDuration?: string;
  mobilityAids: string[];
};

const QuoteForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    installAddress: '',
    installTimeframe: '',
    knowRampLength: false,
    knowRentalDuration: false,
    mobilityAids: []
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateContactInfo = () => {
    const newErrors: Partial<FormData> = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Phone validation
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRampDetails = () => {
    const newErrors: Partial<FormData> = {};

    // Timeframe validation
    if (!formData.installTimeframe) {
      newErrors.installTimeframe = 'Please select an installation timeframe';
    }

    // If they know ramp length, validate the length
    if (formData.knowRampLength && !formData.estimatedRampLength) {
      newErrors.estimatedRampLength = 'Please provide the estimated ramp length';
    }

    // If they know rental duration, validate the duration
    if (formData.knowRentalDuration && !formData.estimatedRentalDuration) {
      newErrors.estimatedRentalDuration = 'Please provide the estimated rental duration';
    }

    // Mobility aids validation - update the error type to match the field type
    if (formData.mobilityAids.length === 0) {
      newErrors.mobilityAids = [];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent any form submission
    let isValid = false;

    switch (step) {
      case 1:
        isValid = validateContactInfo();
        break;
      case 2:
        isValid = validateRampDetails();
        break;
      default:
        isValid = true;
    }

    if (isValid) {
      setStep(step + 1);
      window.scrollTo(0, 0);
      setErrors({});
    }
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent any form submission
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Add your form submission API call here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated API call
      
      // Redirect to thank you page
      router.push('/quote/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, label: "Contact Info" },
    { number: 2, label: "Ramp Details" },
    { number: 3, label: "Review" }
  ];

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-4">
      <div className="flex items-center gap-2">
        {steps.map(({ number, label }) => (
          <div key={number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={`
                rounded-full h-10 w-10 flex items-center justify-center 
                text-lg font-medium transition-all duration-200
                ${step === number 
                  ? 'bg-primary text-primary-content shadow-lg scale-105' 
                  : step > number 
                    ? 'bg-success text-success-content' 
                    : 'bg-base-200'
                }
              `}>
                {step > number ? '✓' : number}
              </div>
              
              <span className={`
                mt-1 text-sm font-medium transition-colors duration-200
                ${step === number ? 'text-primary' : 'text-base-content/70'}
              `}>
                {label}
              </span>
            </div>

            {number < steps.length && (
              <div className={`
                h-0.5 w-8 mx-2 transition-all duration-200
                ${step > number ? 'bg-success' : 'bg-base-200'}
              `} />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderInput = (
    field: keyof FormData,
    label: string,
    type: string = 'text',
    placeholder: string = ''
  ) => (
    <div className="form-control w-full">
      <label className="label py-1">
        <span className="label-text text-base font-medium">{label}</span>
      </label>
      <input
        type={type}
        className={`
          input input-bordered w-full h-12 text-base
          focus:outline-none focus:ring-2 focus:ring-primary/50
          ${errors[field] ? 'input-error' : ''}
        `}
        value={formData[field] as string}
        onChange={(e) => {
          setFormData({ ...formData, [field]: e.target.value });
          if (errors[field]) {
            setErrors({ ...errors, [field]: undefined });
          }
        }}
        placeholder={placeholder}
        disabled={isSubmitting}
      />
      {errors[field] && (
        <label className="label">
          <span className="label-text-alt text-error">{errors[field]}</span>
        </label>
      )}
    </div>
  );

  const renderContactInfo = () => (
    <div className="space-y-3 sm:space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        {renderInput('name', 'Full Name', 'text', 'John Doe')}
        {renderInput('phone', 'Phone Number', 'tel', '(555) 555-5555')}
      </div>
      {renderInput('email', 'Email Address', 'email', 'johndoe@example.com')}
      {renderInput('address', 'Installation Address', 'text', '123 Main St, City, State, ZIP')}
    </div>
  );

  const renderSelect = (
    field: keyof FormData,
    label: string,
    options: { value: string; label: string }[]
  ) => (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-base font-medium">{label}</span>
      </label>
      <select
        className={`
          select select-bordered w-full h-12 text-base
          focus:outline-none focus:ring-2 focus:ring-primary/50
          ${errors[field] ? 'select-error' : ''}
        `}
        value={formData[field] as string}
        onChange={(e) => {
          setFormData({ ...formData, [field]: e.target.value });
          if (errors[field]) {
            setErrors({ ...errors, [field]: undefined });
          }
        }}
        disabled={isSubmitting}
      >
        <option value="" className="text-base">Select an option</option>
        {options.map(option => (
          <option 
            key={option.value} 
            value={option.value}
            className="text-base"
          >
            {option.label}
          </option>
        ))}
      </select>
      {errors[field] && (
        <label className="label">
          <span className="label-text-alt text-error">{errors[field]}</span>
        </label>
      )}
    </div>
  );

  const renderRampDetails = () => (
    <div className="space-y-3 sm:space-y-4">
      {renderSelect('installTimeframe', 'Install Timeframe', [
        { value: 'immediate', label: 'Immediately' },
        { value: 'within_week', label: 'Within a week' },
        { value: 'within_month', label: 'Within a month' },
        { value: 'flexible', label: 'Flexible' }
      ])}

      <div className="form-control">
        <label className="label">
          <span className="label-text text-sm sm:text-base font-medium">Do you know the required ramp length?</span>
        </label>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
          <label className="flex items-center gap-3 p-2 sm:p-0 hover:bg-base-200 rounded-lg sm:hover:bg-transparent">
            <input
              type="radio"
              className={`radio h-5 w-5 sm:h-4 sm:w-4 ${errors.knowRampLength ? 'radio-error' : ''}`}
              checked={formData.knowRampLength}
              onChange={() => setFormData({ ...formData, knowRampLength: true })}
            />
            <span className="text-sm sm:text-base">Yes</span>
          </label>
          <label className="flex items-center gap-3 p-2 sm:p-0 hover:bg-base-200 rounded-lg sm:hover:bg-transparent">
            <input
              type="radio"
              className={`radio h-5 w-5 sm:h-4 sm:w-4 ${errors.knowRampLength ? 'radio-error' : ''}`}
              checked={!formData.knowRampLength}
              onChange={() => setFormData({ ...formData, knowRampLength: false })}
            />
            <span className="text-sm sm:text-base">No</span>
          </label>
        </div>
        {formData.knowRampLength && (
          <div>
            <input
              type="text"
              className={`input input-bordered w-full h-12 text-sm sm:text-base mt-2 ${
                errors.estimatedRampLength ? 'input-error border-error' : ''
              }`}
              value={formData.estimatedRampLength || ''}
              onChange={(e) => setFormData({ ...formData, estimatedRampLength: e.target.value })}
              placeholder="Estimated Ramp Length"
            />
            {errors.estimatedRampLength && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.estimatedRampLength}</span>
              </label>
            )}
          </div>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text text-sm sm:text-base font-medium">Do you know the rental duration?</span>
        </label>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
          <label className="flex items-center gap-3 p-2 sm:p-0 hover:bg-base-200 rounded-lg sm:hover:bg-transparent">
            <input
              type="radio"
              className={`radio h-5 w-5 sm:h-4 sm:w-4 ${errors.knowRentalDuration ? 'radio-error' : ''}`}
              checked={formData.knowRentalDuration}
              onChange={() => setFormData({ ...formData, knowRentalDuration: true })}
            />
            <span className="text-sm sm:text-base">Yes</span>
          </label>
          <label className="flex items-center gap-3 p-2 sm:p-0 hover:bg-base-200 rounded-lg sm:hover:bg-transparent">
            <input
              type="radio"
              className={`radio h-5 w-5 sm:h-4 sm:w-4 ${errors.knowRentalDuration ? 'radio-error' : ''}`}
              checked={!formData.knowRentalDuration}
              onChange={() => setFormData({ ...formData, knowRentalDuration: false })}
            />
            <span className="text-sm sm:text-base">No</span>
          </label>
        </div>
        {formData.knowRentalDuration && (
          <div>
            <input
              type="text"
              className={`input input-bordered w-full h-12 text-sm sm:text-base mt-2 ${
                errors.estimatedRentalDuration ? 'input-error border-error' : ''
              }`}
              value={formData.estimatedRentalDuration || ''}
              onChange={(e) => setFormData({ ...formData, estimatedRentalDuration: e.target.value })}
              placeholder="Estimated Rental Duration"
            />
            {errors.estimatedRentalDuration && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.estimatedRentalDuration}</span>
              </label>
            )}
          </div>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text text-sm sm:text-base font-medium">Which mobility aids will be used?</span>
        </label>
        <div className={`space-y-1 ${errors.mobilityAids ? 'border border-error rounded-lg p-2' : ''}`}>
          {['Wheelchair', 'Walker', 'Motorized scooter', 'None', 'Other'].map((aid) => (
            <label key={aid} className="flex items-center gap-3 p-2 hover:bg-base-200 rounded-lg">
              <input
                type="checkbox"
                className={`checkbox h-5 w-5 ${errors.mobilityAids ? 'checkbox-error' : ''}`}
                checked={formData.mobilityAids.includes(aid)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormData({ ...formData, mobilityAids: [...formData.mobilityAids, aid] });
                  } else {
                    setFormData({ ...formData, mobilityAids: formData.mobilityAids.filter(a => a !== aid) });
                  }
                  if (errors.mobilityAids) {
                    setErrors({ ...errors, mobilityAids: undefined });
                  }
                }}
              />
              <span className="text-sm sm:text-base">{aid}</span>
            </label>
          ))}
        </div>
        {errors.mobilityAids && (
          <label className="label">
            <span className="label-text-alt text-error">Please select at least one mobility aid</span>
          </label>
        )}
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="space-y-4">
      <div className="bg-base-200 p-4 rounded-lg space-y-3">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <div className="grid gap-2">
          <p><span className="font-medium">Name:</span> {formData.name}</p>
          <p><span className="font-medium">Email:</span> {formData.email}</p>
          <p><span className="font-medium">Phone:</span> {formData.phone}</p>
          <p><span className="font-medium">Address:</span> {formData.address}</p>
        </div>
      </div>

      <div className="bg-base-200 p-4 rounded-lg space-y-3">
        <h3 className="text-lg font-semibold">Ramp Details</h3>
        <div className="grid gap-2">
          <p><span className="font-medium">Install Timeframe:</span> {formData.installTimeframe}</p>
          <p><span className="font-medium">Know Ramp Length:</span> {formData.knowRampLength ? 'Yes' : 'No'}</p>
          {formData.knowRampLength && (
            <p><span className="font-medium">Estimated Ramp Length:</span> {formData.estimatedRampLength} feet</p>
          )}
          <p><span className="font-medium">Know Rental Duration:</span> {formData.knowRentalDuration ? 'Yes' : 'No'}</p>
          {formData.knowRentalDuration && (
            <p><span className="font-medium">Estimated Rental Duration:</span> {formData.estimatedRentalDuration} months</p>
          )}
          <p><span className="font-medium">Mobility Aids:</span> {formData.mobilityAids.join(', ')}</p>
        </div>
      </div>
    </div>
  );

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        if (step === 3) {
          handleSubmit(e);
        }
      }} 
      className="flex flex-col w-full max-w-2xl mx-auto px-4"
    >
      <div className="py-2">
        {renderStepIndicator()}
      </div>

      <div className="mb-4">
        <div className="space-y-4">
          {step === 1 && renderContactInfo()}
          {step === 2 && renderRampDetails()}
          {step === 3 && renderConfirmation()}
        </div>
      </div>

      <div className="p-2 bg-base-100">
        <div className="flex gap-3">
          {step > 1 && (
            <button 
              type="button"
              onClick={handleBack}
              className="btn btn-outline flex-1 min-h-12 text-base font-medium"
              disabled={isSubmitting}
            >
              Back
            </button>
          )}
          
          {step < 3 ? (
            <button 
              type="button"
              onClick={handleNext}
              className="btn btn-primary flex-1 min-h-12 text-base font-medium"
              disabled={isSubmitting}
            >
              Next
            </button>
          ) : (
            <button 
              type="submit"
              className="btn btn-primary flex-1 min-h-12 text-base font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  <span>Submitting...</span>
                </>
              ) : (
                'Submit Quote Request'
              )}
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default QuoteForm; 