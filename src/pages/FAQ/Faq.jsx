import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Shipping",
      items: [
        {
          question: "What is the status of my order?",
          answer: "Track your order by entering your order number and email address on our order tracking page."
        },
        {
          question: "How do I cancel or change my order?",
          answer: "You can cancel or change your order by contacting us within 24 hours of placing your order. Please include your order number in your email or phone call."
        },
        {
          question: "How long does it take to get my order?",
          answer: "Most customers can expect to receive their supplies within 1 to 3 days. Orders that require prescription approval or personalization may take longer to ship."
        },
        {
          question: "Who will be delivering my order?",
          answer: "We ship via FedEx and other premium carriers to provide you with the fastest and most reliable service available."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, customers can place orders on our website, which currently ships internationally."
        }
      ]
    },
    {
      title: "Payment",
      items: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept Visa, Mastercard, American Express, and PayPal."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use encrypted SSL technology to ensure that your payment information is fully protected."
        },
        {
          question: "Do you offer financing options?",
          answer: "Yes, we offer financing options through our partners. Please contact us for more information."
        },
        {
          question: "How do I add a payment method??",
          answer: "To pay with a credit or debit card, go to Payment Methods and click the blue hyperlink that says “Add a New Credit or Debit Card.” Fill in the required information exactly as it appears on the card and click the button that says “Save Payment Method.” If you’re using an international credit card, please enter your shipping address in the contiguous U.S. into the billing address field and contact us with your true billing address.."
        },
        {
          question: "Why is my credit card not working?",
          answer: "If you’re having trouble with your credit card, make sure the billing address matches the address on file with your credit card and/or bank. Enter the name and credit card number exactly the way you see it on the card. Before you place your order, add the CVV, a 3-digit code found on the back of your card."
        }

      ]
    },
  {
    title: "Return",
    items: [
        {
          question: " How do I request a return or replacement?",
          answer: "Our return policy is simple and worry-free: If you're not 100% unconditionally satisfied with your pet supplies, you can return them within 365 days of purchase."
        },
        {
          question: " What is the status of my refund?",
          answer: "Refunds may be issued either to your original payment method or issued to your Chewy Gift Card balance via a Chewy eGift Card. Depending on your banking institution, refunds to original payment methods may take 3 to 5 business days to process."
        }

      ]
  },
  {
    title: "Support",
    items: [
        {
          question: " How do I contact customer service?",
          answer: "In the US, you can reach one of our devoted customer service reps toll-free at 1-800-672-4399 anytime, day or night – we're available 24/7. You can also chat or email."
        },
       
        {
          question: " What are your customer service hours?",
          answer: "We're available all day every day, 24/7, 365 days a year."
        },
        {
          question: " Do you charge sales tax?",
          answer: "Chewy, Inc. and its eligible affiliates will collect the simplified sellers use tax (SSUT) of 8% for Alabama customers and the tax will be remitted on the customer's behalf to the Alabama Department of Revenue."
        },
        {
          question: " What's your Privacy Policy?",
          answer: "Your privacy is very important to us. Read our Privacy Policy for more details."
        }


      ]
  },
        
     
  
    // Add more sections if needed
  ];

  return (
    <div className="max-w-3xl mx-auto mt-[10em]">
    <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>

      {accordionData.map((section, index) => (
        <div key={index}>
          <h1 className="text-xl font-bold text-center my-8">{section.title}</h1>
          {section.items.map((item, itemIndex) => (
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4" key={itemIndex}>
              <div className="border-b border-gray-200">
                <button
                  className="flex items-center justify-between w-full p-6 focus:outline-none"
                  onClick={() => toggleAccordion(itemIndex)}
                >
                  <span className="text-lg font-semibold">{item.question}</span>
                  {openIndex === itemIndex ? <FaMinus className="text-red-600" /> : <FaPlus className="text-blue-600" />}
                </button>
              </div>
              {openIndex === itemIndex && (
                <div className="p-6 border-t border-gray-200">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQs;