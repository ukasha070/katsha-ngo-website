import React from "react";
import CustomBtn from "../buttons/CustomBtn";

const ContactForm = () => {
  return (
    <section className="mb-32">
      <div
        id="map"
        className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1994.8940466998383!2d32.58963424926001!3d0.22302752311783444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sndejje%20kanaaba!5e0!3m2!1sen!2sug!4v1756248049458!5m2!1sen!2sug"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="px-6">
        <div className="block px-6 py-12 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border-b border-black/30 max-w-3xl mx-auto">
          <div className="mb-10">
            <h3 className="font-bold text-2xl mb-3">Send Message</h3>
            <p>
              We’d love to hear from you — whether it’s feedback, support, or
              collaboration.
            </p>
          </div>

          <form>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                placeholder="Your name"
                className="form-input"
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="email"
                className="form-input"
                placeholder="Email Address"
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                rows={3}
                placeholder="Message"
              ></textarea>
            </div>

            <CustomBtn className="w-full py-4 font-bold">
              <p>Send Message</p>
            </CustomBtn>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
