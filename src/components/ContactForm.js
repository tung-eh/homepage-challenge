const ContactForm = ({ className }) => (
  <div className={className}>
    <div className="text-sm  mb-2">Want us to contact you</div>
    <div className="relative max-w-sm">
      <input
        className="bg-gray-100 text-gray-700 rounded-xl outline-none w-full py-4 pl-6 pr-12"
        placeholder="Email"
        id="contact_email"
      />
      <button className="absolute top-1  right-1 bottom-1 bg-blue-500 font-medium text-white rounded-xl w-24">
        Join
      </button>
    </div>
  </div>
)

export default ContactForm
