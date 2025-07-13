import { useState, useEffect } from 'react';

const Order = ({ setPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    reservationText: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 200;

  useEffect(() => {
    const savedData = localStorage.getItem('reservationData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
      setCharCount(parsedData.reservationText?.length || 0);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'reservationText') {
      setCharCount(value.length);
    }
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone.trim() && !/^(\+254|0)?[17]\d{8}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }
    
    if (!formData.time) {
      newErrors.time = 'Time is required';
    }
    
    if (!formData.guests) {
      newErrors.guests = 'Number of guests is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      localStorage.setItem('reservationData', JSON.stringify(formData));
      
      console.log('Reservation submitted:', formData);
      
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } else {
      console.log('Form has errors, please fix them');
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div id="order" className="min-h-screen bg-[#FAFADE] flex flex-col items-center justify-start pt-12 relative">
      <button
        onClick={() => setPage('home')}
        className="absolute top-4 right-4 bg-white hover:bg-gray-100 text-black font-jaro text-lg px-6 py-2 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2"
      >
        Back Home
      </button>

      <h2 className="text-2xl md:text-3xl font-bold font-jaro p-8 text-center">Make a Reservation</h2>
      
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col space-y-4 px-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name *"
            className={`bg-[#E5E5E5] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none w-full ${
              errors.name ? 'border-2 border-red-500' : ''
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1 text-center">{errors.name}</p>}
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            className={`bg-[#E5E5E5] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none w-full ${
              errors.email ? 'border-2 border-red-500' : ''
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1 text-center">{errors.email}</p>}
        </div>
        
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number (Optional)"
            className={`bg-[#E5E5E5] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none w-full ${
              errors.phone ? 'border-2 border-red-500' : ''
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1 text-center">{errors.phone}</p>}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={getMinDate()}
              className={`bg-[#E5E5E5] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none w-full ${
                errors.date ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.date && <p className="text-red-500 text-sm mt-1 text-center">{errors.date}</p>}
          </div>
          
          <div>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`bg-[#E5E5E5] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none w-full ${
                errors.time ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.time && <p className="text-red-500 text-sm mt-1 text-center">{errors.time}</p>}
          </div>
        </div>
        
        <div>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={`bg-[#E5E5E5] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none w-full ${
              errors.guests ? 'border-2 border-red-500' : ''
            }`}
          >
            <option value="">Number of Guests *</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
          </select>
          {errors.guests && <p className="text-red-500 text-sm mt-1 text-center">{errors.guests}</p>}
        </div>
        
        <div>
          <textarea
            name="reservationText"
            value={formData.reservationText}
            onChange={handleChange}
            placeholder="Special requests or additional information..."
            maxLength={maxChars}
            rows="4"
            className={`bg-[#E5E5E5] rounded-md py-3 px-4 text-lg font-medium focus:outline-none w-full resize-none ${
              errors.reservationText ? 'border-2 border-red-500' : ''
            }`}
          />
          <div className="flex justify-between items-center mt-1">
            <span className="text-sm text-gray-600">
              {charCount}/{maxChars} characters
            </span>
            {charCount > maxChars * 0.8 && (
              <span className={`text-sm ${charCount > maxChars * 0.9 ? 'text-red-500' : 'text-yellow-500'}`}>
                {charCount > maxChars * 0.9 ? 'Almost full!' : 'Getting full...'}
              </span>
            )}
          </div>
        </div>
        
        <button
          type="submit"
          className={`bg-[#E5E5E5] rounded-md py-3 px-4 text-lg font-bold text-black hover:bg-[#e0e0e0] transition-all duration-300 ${
            isSubmitted ? 'border-4 border-green-500 shadow-lg' : ''
          }`}
        >
          {isSubmitted ? 'Reservation Submitted!' : 'Submit Reservation'}
        </button>
        
        {isSubmitted && (
          <div className="text-center p-4 bg-green-100 border border-green-400 rounded-md">
            <p className="text-green-700 font-medium">
              Your reservation has been saved successfully!
            </p>
            <p className="text-green-600 text-sm mt-1">
              We'll contact you soon to confirm your booking.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Order; 