"use client";

import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion"; // Import useInView
import axios from "axios";
import React, { useRef } from "react";

const Pricing = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const labelVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.5 } },
  };

  // Ref for each pricing card
  const freeRef = useRef(null);
  const proRef = useRef(null);
  const premiumRef = useRef(null);

  // useInView hooks to detect when cards are visible
  const freeInView = useInView(freeRef, { once: true });
  const proInView = useInView(proRef, { once: true });
  const premiumInView = useInView(premiumRef, { once: true });

  const handleClickYearly = async () => {
    try {
      const response = await axios.post("/api/purchase", {
        productId: process.env.YEARLY_VARIANT_ID,
      });

      window.open(response.data.checkoutUrl, "_blank");
    } catch (error) {
      console.log(error);
      alert("Error while processing payments, try again in a few seconds");
    }
  };

  const handleClickMonthly = async () => {
    try {
      const response = await axios.post("/api/purchase", {
        productId: "308195",
      });
      console.log(response.data);

      window.open(response.data.checkoutUrl, "_blank");
    } catch (error) {
      console.log(error);
      alert("Error while processing payments, try again in a few seconds");
    }
  };

  return (
    <>
      <div className="w-full py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Choose Your Plan
          </h2>
          <p className="text-center dark:text-gray-300 text-black/60 mb-12">
            Whatever your status, our offers evolve according to your needs.
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
            {/* Free Plan */}
            <motion.div
              ref={freeRef} // Attach ref for free plan
              className="w-full md:w-80 bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate={freeInView ? "visible" : "hidden"} // Trigger animation when in view
            >
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 opacity-20 blur-xl"></div>{" "}
                {/* Darker gradient */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">Free</h3>
                  <p className="text-4xl font-bold text-white mb-6">
                    $0<span className="text-lg font-normal">/month</span>
                  </p>
                  <ul className="text-gray-300 mb-6">
                    <li className="flex items-center mb-2">
                      <Check className="h-5 w-5 mr-2 text-green-400" />
                      Basic features
                    </li>
                    <li className="flex items-center mb-2">
                      <Check className="h-5 w-5 mr-2 text-green-400" />
                      Limited storage
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-400" />
                      Community support
                    </li>
                  </ul>
                  <motion.button
                    className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              ref={proRef} // Attach ref for pro plan
              className="w-full md:w-80 bg-gray-800 rounded-lg overflow-hidden shadow-lg relative"
              variants={cardVariants}
              initial="hidden"
              animate={proInView ? "visible" : "hidden"} // Trigger animation when in view
            >
              <motion.div
                className="absolute top-0 right-0 bg-gradient-to-r from-yellow-600 to-orange-600 text-xs text-white px-3 py-1 rounded-bl-lg"
                variants={labelVariants}
                initial="hidden"
                animate="visible"
              >
                Most Popular
              </motion.div>
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 opacity-20 blur-xl"></div>{" "}
                {/* Darker gradient */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <p className="text-4xl font-bold text-white">
                        $5<span className="text-lg font-normal">/month</span>
                      </p>
                      <p className="text-sm text-gray-400">Billed monthly</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">
                        $30<span className="text-sm font-normal">/year</span>
                      </p>
                      <p className="text-sm text-gray-400">Billed annually</p>
                    </div>
                  </div>
                  <ul className="text-gray-300 mb-6">
                    <li className="flex items-center mb-2">
                      <Check className="h-5 w-5 mr-2 text-green-400" />
                      All Free features
                    </li>
                    <li className="flex items-center mb-2">
                      <Check className="h-5 w-5 mr-2 text-green-400" />
                      Unlimited storage
                    </li>
                    <li className="flex items-center mb-2">
                      <Check className="h-5 w-5 mr-2 text-green-400" />
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-400" />
                      Advanced analytics
                    </li>
                  </ul>
                  <motion.button
                    className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Upgrade to Pro
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              ref={premiumRef} // Attach ref for premium plan
              className="w-full md:w-80 bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              variants={cardVariants}
              initial="hidden"
              animate={premiumInView ? "visible" : "hidden"} // Trigger animation when in view
            >
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 opacity-20 blur-xl"></div>{" "}
                {/* Darker gradient */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Premium
                  </h3>
                  <p className="text-4xl font-bold text-white mb-6">
                    $30<span className="text-lg font-normal">/month</span>
                  </p>
                  <ul className="text-gray-300 mb-6">
                    <li className="flex items-center mb-2">
                      <Check className="h-5 w-5 mr-2 text-green-400" />
                      All Pro features
                    </li>
                    <li className="flex items-center mb-2">
                      <Check className="h-5 w-5 mr-2 text-green-400" />
                      White-label option
                    </li>
                    <li className="flex items-center mb-2">
                      <Check className="h-5 w-5 mr-2 text-green-400" />
                      Custom domain
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-400" />
                      24/7 premium support
                    </li>
                  </ul>
                  <motion.button
                    className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Go Premium
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
