import React from "react";

function Message() {
  return (
    <>
      <section className="message overflow-x-hidden px-4 lg:px-0">
        <h1 className="font-bold text-[#008000] text-[45px] text-center py-10 bg-[#f4f4f4]">
          Message
        </h1>
        <div className="ceo-message mb-16">
          <div className="image relative text-center">
            <img
              className="min-w-full"
              src="/image/home/footer/message/1.jpg"
              alt=""
            />
            <div className="container mx-auto max-w-full absolute flex place-content-center bottom-[-90px]">
              <img
                className="lg:max-w-[225px] max-w-[150px] border place-content-center shadow-lg rounded-full border-yellow-500"
                src="/image/home/footer/message/2.png"
                alt=""
              />
            </div>
          </div>
          <div className="container mx-auto max-w-[1150px] content text-center">
            <h1 className="pt-24 text-center text-[35px] font-serif">
              Rajesh Mehta
            </h1>
            <p className="py-5 text-gray-700 text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              aspernatur molestiae aliquam doloribus quasi sed aperiam laborum,
              fuga doloremque odio voluptatibus. Beatae adipisci atque ad
              veritatis minus possimus doloremque maxime rem labore cupiditate
              corporis eos id quibusdam distinctio repellendus sapiente nobis
              tenetur quas sint animi, accusantium, dolore voluptates! Saepe,
              esse?
            </p>

            <p className="text-gray-700 text-[15px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
              tempore? Magnam natus sequi, alias est at odio corrupti, iure
              velit maiores quas architecto. Reprehenderit, adipisci neque
              repellat exercitationem fuga reiciendis nulla ratione atque error
              mollitia quo, perferendis dicta debitis ut magnam tenetur eos!
              Doloremque inventore aliquam, tenetur dignissimos suscipit
              deserunt?
            </p>
            {/* <div className="icons flex justify-center gap-2 my-5">
                            <img className='w-[40px] border bg-[#e5e7eb] px-2 py-2' src="src/assets/image/icons/linkedin-svgrepo-com.svg" alt="" />
                            <img className='w-[40px] border bg-[#e5e7eb] px-2 py-2' src="src/assets/image/icons/x-twitter-brands.svg" alt="" />
                            <img className='w-[40px] border bg-[#e5e7eb] px-2 py-2' src="src/assets/image/icons/facebook.svg" alt="" />
                            <img className='w-[40px] border bg-[#e5e7eb] px-2 py-2' src="src/assets/image/icons/youtube.svg" alt="" />
                        </div> */}
          </div>
        </div>

        <div className="ceo-message mb-16">
          <div className="image relative text-center">
            <img
              className="min-w-full"
              src="/image/home/footer/message/3.jpg"
              alt=""
            />
            <div className="container mx-auto max-w-full absolute flex place-content-center bottom-[-90px]">
              <img
                className="lg:max-w-[225px] max-w-[150px] border shadow-lg rounded-full border-yellow-500"
                src="/image/home/footer/message/4.png"
                alt=""
              />
            </div>
          </div>
          <div className="container mx-auto max-w-[1150px] content text-center">
            <h1 className="pt-24 text-center text-[35px] font-serif">
              Babita Singh
            </h1>
            <p className="text-gray-700 text-[15px] py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quibusdam minima culpa ad. Iure cum nulla, dolor corporis et
              eveniet voluptatem ab obcaecati nesciunt optio. Quos iusto, cum
              omnis laboriosam placeat molestiae pariatur perferendis. Fugit
              quae ex quos harum. Maxime similique cupiditate consectetur nulla,
              fuga maiores quod quae mollitia eos voluptas doloremque ipsam quia
              perspiciatis modi soluta ratione non provident reiciendis minima
              quis aut illum exercitationem! Accusantium, quisquam provident
              doloribus facere, ab consequatur laboriosam, aliquam sint a ad eos
              ratione?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Message;
