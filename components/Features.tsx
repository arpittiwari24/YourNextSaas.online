

const Features = () => {
  return (
    <>
      {/* Container for demo purpose */}
      <div className="container py-12 max-sm:py-2 max-sm:pt-6 mx-auto md:px-6">
        {/* Section: Design Block */}
        <section className="mb-32 text-center">
          <div className="flex justify-center">
            <div className="max-w-[700px] text-center">
              <h2 className="pb-6 md:pb-20 text-center text-5xl max-sm:text-3xl font-bold">
                Why Choose
                <u className="text-primary text-primary-400 px-2">Us?</u>
              </h2>
            </div>
          </div>
          <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
            <div className="mb-12 lg:mb-0 ">
              <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                 <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
                </svg>
              </div>
              <h5 className="mb-4 text-lg font-bold">Support 24/7</h5>
              <p className="text-neutral-500 ">
                Our dedicated support team is available round the clock to assist you with any queries or issues you might encounter.
              </p>
            </div>
            <div className="mb-12 lg:mb-0">
              <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
                </svg>
              </div>
              <h5 className="mb-4 text-lg font-bold">Safe and solid</h5>
              <p className="text-neutral-500 ">
                We ensure the security and reliability of your shortened URLs, providing you with peace of mind.
              </p>
            </div>
            <div className="mb-12 md:mb-0">
              <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                > <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
                </svg>
              </div>
              <h5 className="mb-4 text-lg font-bold">Extremely fast</h5>
              <p className="text-neutral-500 ">
                With our advanced infrastructure, we guarantee lightning-fast redirection times for your shortened URLs.
              </p>
            </div>
            <div className="mb-12 md:mb-0">
              <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
                </svg>
              </div>
              <h5 className="mb-4 text-lg font-bold">Live analytics</h5>
              <p className="text-neutral-500 ">
                Gain valuable insights into your audience and track the performance of your shortened URLs in real-time .
              </p>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
      {/* Container for demo purpose */}
    </>
  );
};

export default Features;