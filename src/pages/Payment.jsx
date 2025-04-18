
import { useState } from 'react';

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
    // Simulate payment processing
    console.log('Payment Details:', formData);
    alert('Payment submitted successfully! (This is a demo)');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Secure Payment</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              id="cardNumber"
              name="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="cardName">
              Name on Card
            </label>
            <input
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              id="cardName"
              name="cardName"
              type="text"
              placeholder="John Doe"
              value={formData.cardName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="expiry">
                Expiry Date
              </label>
              <input
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                id="expiry"
                name="expiry"
                type="text"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                id="cvv"
                name="cvv"
                type="text"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            type="submit"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payments;