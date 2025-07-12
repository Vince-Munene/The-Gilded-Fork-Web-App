import { useState } from 'react';

const Order = ({ setPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tableBooking: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
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
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{4}-\d{3}-\d{3}$/.test(formData.phone)) {
      newErrors.phone = 'Please use format: 0712-345-678';
    }
    
    if (!formData.tableBooking.trim()) {
      newErrors.tableBooking = 'Table booking is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Order form submitted:', formData);
      
      setIsSubmitted(true);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        tableBooking: ''
      });
      setErrors({});
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } else {
      console.log('Form has errors, please fix them');
    }
  };

  return (
    <div id="order" className="min-h-screen bg-[#FAFADE] flex flex-col items-center justify-start pt-12">
      <h2 className="text-2xl md:text-3xl font-bold font-jaro p-8 text-center">Place Your Order</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className={`bg-[#E5E5E5] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none w-full ${errors.name ? 'border-2 border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1 text-center">{errors.name}</p>}
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`bg-[#E5E5E5] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none w-full ${errors.email ? 'border-2 border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1 text-center">{errors.email}</p>}
        </div>
        
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number(eg. 0712-345-678)"
            className={`bg-[#E5E5E5] rounded-md py-3 px-4 text-lg text-center font-bold focus:outline-none w-full ${errors.phone ? 'border-2 border-red-500' : ''}`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1 text-center">{errors.phone}</p>}
        </div>
        
        <div>
          <input
            type="text"
            name="tableBooking"
            value={formData.tableBooking}
            onChange={handleChange}
            placeholder="Book a Table (Max Per Table is 5)"
            className={`bg-[#E5E5E5] rounded-md py-3 px-4 text-lg text-center font-medium focus:outline-none w-full ${errors.tableBooking ? 'border-2 border-red-500' : ''}`}
          />
          {errors.tableBooking && <p className="text-red-500 text-sm mt-1 text-center">{errors.tableBooking}</p>}
        </div>
        
        <button
          type="submit"
          className={`bg-[#E5E5E5] rounded-md py-3 px-4 text-lg font-bold text-black hover:bg-[#e0e0e0] transition-all duration-300 ${
            isSubmitted ? 'border-4 border-green-500 shadow-lg' : ''
          }`}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Order; 