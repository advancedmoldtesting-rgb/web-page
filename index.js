import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Advanced Mold Testing</h1>
      <p className="mb-6">Certified mold assessments across South Florida. Fill out the form below to schedule your free inspection.</p>
      <ContactForm />
    </div>
  );
}
