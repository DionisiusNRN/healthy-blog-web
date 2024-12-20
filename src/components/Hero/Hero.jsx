// foto profil, about, skill
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleBlog = (target) => {
    navigate(target);
  };

  return (
    <>
      <div className="mt-20 mb-10 flex flex-col mx-5 sm:mx-auto sm:max-w-screen-sm lg:flex-row lg:max-w-screen-lg xl:max-w-screen-xl lg:mx-20 lg:pt-10 xl:mx-auto">
        <div id="home" className="lg:w-1/2 lg:my-auto">
          <h3 className="font-semibold text-lg lg:text-xl">Hello Guys👋</h3>
          <h1 className="font-bold text-4xl lg:text-5xl">Dionisius Nureno</h1>
          <h2 className="font-semibold text-xl lg:text-2xl">Orang Biasa</h2>
          <p className="text-sm lg:text-lg pt-4 text-justify">
            Ini platform yang aku buat sendiri dan pastinya kamu-kamu bisa pakai
            platform ini secara <b>GRATISSSS</b>. Aku yakin dari sini kamu bisa
            belajar dan paham kurang dari 6 bulan, tapi untuk prosesnya ke badan
            kita tetap harus realistis ya. Jangan banyak ngeluh kalau kamu aja
            belum jalan selama 1-2 tahun!
          </p>
          <div className="py-5">
            <button
              className="text-white flex justify-center text-center rounded-full bg-dark py-2 px-4"
              onClick={() => handleBlog("/contact")}
            >
              Contact us
            </button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src="/img/foto.jpg"
            alt=""
            className="max-w-72 mx-auto md:max-w-80"
          />
        </div>
      </div>
    </>
  );
}
