import React, { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import { donationOptions } from '../data';
import { DollarSign, Globe, Heart } from 'lucide-react';

const DonatePage: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ways to Give</h1>
            <p className="text-xl text-gray-200 mb-8">
              Support our mission through seeds and offering. Your contribution helps us make a difference in communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="International Giving Options"
              subtitle="Choose your preferred method of giving based on your location"
              centered
            />

            {/* Ghana */}
            <div className="mb-12 bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-flame mr-3" />
                <h3 className="text-2xl font-bold text-navy">Ghana</h3>
              </div>
              <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/MTN_Mobile_Money_logo.svg/320px-MTN_Mobile_Money_logo.svg.png" 
                  alt="MTN Mobile Money" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <p className="font-semibold">SIGKI MOMO</p>
                  <p className="text-xl font-bold text-flame">053 885 8886</p>
                </div>
              </div>
            </div>

            {/* USA */}
            <div className="mb-12 bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-flame mr-3" />
                <h3 className="text-2xl font-bold text-navy">United States</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-8 h-8 text-green-600 mr-2" />
                    <p className="font-semibold">Cash App</p>
                  </div>
                  <p className="mb-1">Vera Addo</p>
                  <p className="text-xl font-bold text-flame">$veraddo</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <img 
                      src="https://www.zellepay.com/sites/default/files/2019-10/ZelleLogo-Purple_0.png"
                      alt="Zelle" 
                      className="w-16 h-8 object-contain mr-2" 
                    />
                    <p className="font-semibold">Zelle</p>
                  </div>
                  <p className="mb-1">Vera Norman-Addo</p>
                  <p className="text-xl font-bold text-flame">+1 917 957 1083</p>
                </div>
              </div>
            </div>

            {/* Europe/Australia */}
            <div className="mb-12 bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-flame mr-3" />
                <h3 className="text-2xl font-bold text-navy">Europe/Australia</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <img 
                    src="https://wise.com/public-resources/assets/logos/wise/brand_logo.svg"
                    alt="Wise" 
                    className="w-16 h-8 object-contain mr-2" 
                  />
                  <p className="font-semibold">Wise</p>
                </div>
                <p className="text-xl font-bold text-flame">@veran210</p>
              </div>
            </div>

            {/* UK */}
            <div className="mb-12 bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-flame mr-3" />
                <h3 className="text-2xl font-bold text-navy">United Kingdom</h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-1">Aphia Sarpong</p>
                <p className="text-xl font-bold text-flame">+44 7983 477 571</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Your Impact"
            subtitle="See how your contribution makes a difference"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {donationOptions.map((option) => (
              <div key={option.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Heart className="w-12 h-12 text-flame mx-auto mb-4" />
                <p className="text-2xl font-bold text-navy mb-2">${option.amount}</p>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DonatePage;