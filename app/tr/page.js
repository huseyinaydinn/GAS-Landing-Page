import Image from "next/image";

export default function LandingTR() {


  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] pt-24 pb-10 px-4 bg-transparent relative">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold shadow">GAS'e Hoşgeldiniz! Sorularınızı Sorun. Bir Uzmanla Çalışın</span>
        </div>
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-900 leading-tight mb-4">
          Tümleşik <span className="text-blue-600">AI Platformu</span><br />Ölçeklenebilir Ortaklar İçin.
        </h1>
        {/* Description */}
        <p className="max-w-2xl text-center text-gray-500 text-lg mb-8">
          AgencyX tarafından oluşturulan platforma hoş geldiniz — burada AI, otomasyonla buluşuyor, ses, eylem haline geliyor ve markanız yeni bir döneme giriyor.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a href="#demo" className="px-7 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition text-base">Demo'yu Deneyin</a>
          <a href="#schedule" className="px-7 py-3 bg-gray-800 text-white rounded-lg font-semibold shadow hover:bg-gray-700 transition text-base">Demo'yu Planlayın</a>
        </div>
        {/* Mockup Image */}
        <div className="relative w-full max-w-4xl mx-auto mt-6">
          <div className="absolute -inset-x-4 -top-8 h-32 bg-gradient-to-b from-blue-400/30 to-transparent blur-2xl rounded-3xl pointer-events-none" />
          <Image src={HeroImage} alt="Dashboard Mockup" width={1200} height={500} className="rounded-2xl shadow-2xl border border-gray-200" priority />
        </div>
      </section>

    </>
  );
}
