import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getInfo } from "../utils/info"

const Footer = async () => {
  const info = await getInfo()

  return (
    <footer className="mt-16">
      <div className="bg-[#151515] flex py-12 px-[5%] justify-between max-md:flex-col">
        <div>
          <Image
            src="/assets/images/mkt-advance.png"
            alt="MKT Advance Logo"
            height={262}
            width={529}
            className="w-[90px] object-contain"
          />
          <div className="mt-6 text-white italic">
            <p>Adresse {info.address}</p>
            <p>{info.city}, RDC</p>
          </div>
          <div className="mt-8 text-white">
            <p>
              <span className="font-bold">Téléphone:</span>{" "}
              <span className="italic">{info.phone}</span>
            </p>
            <p>
              <span className="font-bold">Email:</span>{" "}
              <span className="italic">{info.email}</span>
            </p>
          </div>
          <div className="flex mt-6 [&>*]:mr-4">
            {info.fb && (
              <a
                href={info.fb}
                className="group w-[40px] h-[40px] rounded-md bg-[#292929] hover:bg-red-500 p-[8px] flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                  className="fill-white w-[24px] group-hover:fill-[#151515]"
                >
                  <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"></path>
                </svg>
              </a>
            )}
            {info.insta && (
              <a
                href={info.insta}
                className="group w-[40px] h-[40px] rounded-md bg-[#292929] hover:bg-red-500 p-[8px] flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  className="fill-white w-[24px] group-hover:fill-[#151515]"
                >
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
              </a>
            )}
            {info.linkedin && (
              <a
                href={info.linkedin}
                className="group w-[40px] h-[40px] rounded-md bg-[#292929] hover:bg-red-500 p-[8px] flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 32 32"
                  className="fill-white w-[24px] group-hover:fill-[#151515]"
                >
                  <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
                </svg>
              </a>
            )}
          </div>
        </div>
        <div className="text-white max-md:mt-4">
          <h2 className="text-lg font-bold">Demander un devis</h2>
          <p className="max-w-[420px]">
            Ne manquez jamais une opportunité de rester à jour et de découvrir
            ce qui se passe dans l&apos;univers de la visibilité et du marketing.
          </p>
          <div className="mt-8 flex justify-start items-center">
            <input
              type="text"
              className="p-[8px] min-w-[300px] max-md:min-w-[80px]"
              placeholder="Votre email"
            />
            <Button className="bg-red-500 rounded-none min-w-[120px]">
              Souscrire
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-black py-4 text-center text-white text-sm">
        © Copyright <span className="font-bold">MKT Advance</span>. Tous droits
        réservés
      </div>
    </footer>
  )
}

export default Footer
