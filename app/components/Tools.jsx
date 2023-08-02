import Image from "next/image";
// import api from "./logos/api.png";
// import embed from "./logos/embed.png";
// import email from "./logos/email.png";
// import gdrive from "./logos/gdrive.png";
// import airtable from "./logos/airtable.png";
// import sheet from "./logos/sheet.png";
// import zapier from "./logos/zapier.png";
// import notion from "./logos/notion.png";

const Tools = () => {
  return (
    <section className="border w-full border-gray-300 rounded-md shadow-sm shadow-gray-300 relative overflow-hidden py-10 px-5">
        <div className="">
          <div className="flex flex-col items-center gap-4 py-28">

            <ul className="flex gap-4 items-center justify-center ">
              <li className="flex items-center gap-1 shadow-sm shadow-gray-400 border-opacity-70 rounded-lg px-2 py-[3px] ">
                <span className="inline-block bg-sky-400 w-4 h-4 rounded-md dot"></span>
                <small className="font-medium text-sky-400">Extract</small>
              </li>
              <li className="flex items-center gap-1 shadow-sm shadow-gray-400 border-opacity-70 rounded-lg px-2 py-[3px] ">
                <span className="inline-block bg-pink-400 w-4 h-4 rounded-md "></span>
                <small className="font-medium text-pink-400">Classify</small>
              </li>
              <li className="flex items-center gap-1 shadow-sm shadow-gray-400 border-opacity-70 rounded-lg px-2 py-[3px] ">
                <span className="inline-block bg-orange-300 w-4 h-4 rounded-md "></span>
                <small className="font-medium text-orange-300">Q&A</small>
              </li>
              <li className="flex items-center gap-1 shadow-sm shadow-gray-400 border-opacity-70 rounded-lg px-2 py-[3px] ">
                <span className="inline-block bg-green-400 w-4 h-4 rounded-md "></span>
                <small className="font-medium text-green-400">Analyze</small>
              </li>
            </ul>
            
            <ul className="flex items-center justify-center gap-4">
              <li className="flex items-center gap-1 shadow-sm shadow-gray-400 border-opacity-70 rounded-lg px-2 py-[3px] ">
                <span className="inline-block w-4 h-4">
                  <Image width={20} height={20} src="/api.png" alt="api" />
                </span>
                <small className="font-medium text-[#222]">API</small>
              </li>
              <li className="flex items-center gap-1 shadow-sm shadow-gray-400 border-opacity-70 rounded-lg px-2 py-[3px] ">
                <span className="inline-block w-4 h-4">
                  <Image width={20} height={20} src="/email.png" alt="" />
                </span>
                <small className="font-medium text-[#222]">Email</small>
              </li>
              <li className="flex items-center gap-1 shadow-sm shadow-gray-400 border-opacity-70 rounded-lg px-2 py-[3px] ">
                <span className="inline-block w-4 h-4">
                  <Image width={20} height={20} src="/embed.png" alt="embed" />
                </span>
                <small className="font-medium text-[#222]">Embed</small>
              </li>
              <li className="flex items-center gap-1 shadow-sm shadow-gray-400 border-opacity-70 rounded-lg px-2 py-[3px] ">
                <span className="inline-block w-4 h-4">
                  <Image width={20} height={20} src="/gdrive.png" alt="grive" />
                </span>
                <small className="font-medium text-[#222]">GDrive</small>
              </li>
            </ul>
            <ul className="flex items-center justify-center gap-4">
              <li className="flex items-center gap-1 shadow-sm shadow-gray-400 border-opacity-70 rounded-lg px-2 py-[3px] ">
                <span className="inline-block bg-sky-400 w-4 h-4">
                  <Image width={20} height={20} src="/airtable.png" alt="airtable" />
                </span>
                <small className="font-medium text-[#222]">Airtable</small>
              </li>
              <li className="flex items-center gap-1 shadow-sm shadow-gray-400 border-opacity-70 rounded-lg px-2 py-[3px] ">
                <span className="inline-block bg-pink-400 w-4 h-4">
                  <Image width={20} height={20} src="/sheet.png" alt="sheet" />
                </span>
                <small className="font-medium text-[#222]">Sheets</small>
              </li>
              <li className="flex items-center gap-1 shadow-sm shadow-gray-400 border-opacity-70 rounded-lg px-2 py-[3px] ">
                <span className="inline-block bg-orange-300 w-4 h-4">
                  <Image width={20} height={20} src="/zapier.png" alt="zapier" />
                </span>
                <small className="font-medium text-[#222]">Zapier</small>
              </li>
              <li className="flex items-center gap-1 shadow-sm shadow-gray-400 border-opacity-70 rounded-lg px-2 py-[3px] ">
                <span className = "inline-block bg-green-400 w-4 h-4">
                  <Image width={20} height={20} src="/notion.png" alt="notion" />
                </span>
                <small className="font-medium text-[#222]">Notion</small>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-start mt-5">
            <h4 className="text-black font-semibold text-[0.8rem]">Build end-to-end solutions</h4>
            <small className="text-gray-600">Combine powerful AI tools with business logic, validations,
             and integrations.</small>
          </div>
        </div>
    </section>
  )
}

export default Tools;


// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 