import { useState } from 'react';
import { CreditCard } from 'lucide-react'; // optional icon, if using lucide-react

const Payments = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Details:', formData);
    alert('Payment submitted successfully! (This is a demo)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg transition-all duration-300 ease-in-out">
        <div className="flex flex-col items-center mb-6">
          <CreditCard size={40} className="text-blue-600 mb-2" />
          <h2 className="text-3xl font-extrabold text-gray-800">Secure Payment</h2>
          <p className="text-sm text-gray-500 mt-1">Your information is encrypted and safe with us.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              id="cardNumber"
              name="cardNumber"
              type="text"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              maxLength="19"
              placeholder="1234 5678 9012 3456"
              className="mt-1 block w-full px-4 py-3 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
            <p className="text-xs text-gray-400 mt-1">Enter a 16-digit card number without dashes.</p>
          </div>
          <div>
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
              Name on Card
            </label>
            <input
              id="cardName"
              name="cardName"
              type="text"
              placeholder="John Doe"
              className="mt-1 block w-full px-4 py-3 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              value={formData.cardName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                id="expiry"
                name="expiry"
                type="text"
                placeholder="MM/YY"
                className="mt-1 block w-full px-4 py-3 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={formData.expiry}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                id="cvv"
                name="cvv"
                type="text"
                placeholder="123"
                maxLength="4"
                className="mt-1 block w-full px-4 py-3 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit Payment
          </button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-6">
          This form is for demonstration purposes only. No actual transactions will occur.
        </p>
      </div>
    </div>
  );
};

export default Payments;
