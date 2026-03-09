export default function Appendandseedata({onClose}){
    const hideScrollbar = "scrollbar-hide [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";
    const text=`lorem1000 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, aliquam iusto illo nisi consectetur mollitia eligendi asperiores? Libero et facere quam quos autem consectetur itaque perferendis velit fuga. Consectetur dolorem aut, maxime fuga rerum aspernatur doloremque, repellendus quibusdam perspiciatis pariatur quod voluptate nobis blanditiis vel deserunt in velit. Nesciunt et dolor eligendi corporis ipsam dicta obcaecati a quia deserunt accusantium culpa voluptas, libero cupiditate, eum beatae doloribus dolorem iure similique sapiente nulla totam impedit! Corporis tenetur labore atque voluptatibus quidem esse facere tempore repellat quos harum inventore repellendus asperiores natus consequuntur officiis, doloribus modi! Sunt quas quo distinctio aut eius sapiente consequuntur quod voluptatem, architecto nobis ipsum dolor doloribus praesentium placeat dolorum voluptates adipisci et. Impedit illum numquam aliquid! Dolore molestias a veniam sint perferendis rerum commodi nostrum iste natus eius similique assumenda quidem aperiam consectetur autem repellat, vel expedita id iusto provident asperiores. Consequuntur reiciendis nam inventore eaque voluptate voluptatem dicta consectetur nulla, ea rerum, laboriosam doloremque esse ut ducimus fugit dignissimos labore quis qui nemo. Aperiam eius facere illo exercitationem. Harum quam, hic pariatur eius voluptatibus cupiditate perferendis fuga quibusdam tenetur nesciunt similique accusantium excepturi mollitia, tempora iste facere odio quidem natus rerum unde quod esse praesentium dolorum! Ab nobis vitae incidunt nostrum similique, voluptas voluptatum dicta iusto veniam eaque iste unde. Officia laboriosam ut eligendi expedita consequuntur, omnis, voluptatibus quis dolores, ad accusantium incidunt sed reprehenderit doloremque eum eveniet accusamus excepturi facere nisi! Officia quam magnam at, quibusdam magni corrupti. Reprehenderit recusandae quasi corrupti quam, ipsa sequi suscipit, aliquam ut sit nihil quis inventore non distinctio quidem repellat laborum? Modi beatae doloremque ex incidunt, eius, laborum laboriosam praesentium voluptatem itaque asperiores fugit. Esse similique ducimus delectus dolores amet nostrum veniam tempore placeat enim consectetur vitae error dolore commodi, perferendis atque facere mollitia excepturi vero quaerat non. Debitis.`;

    return(
        <div className={`bg-white rounded-2xl shadow-2xl flex flex-col p-4 md:p-10 w-[95vw] md:w-[80vw] lg:w-[75vw] max-w-6xl h-[90vh] md:h-[80vh]gap-4 overflow-scroll ${hideScrollbar}`}>
                <div className="flex justify-end items-center mb-1 hover:cursor-pointer">
                <button onClick={onClose} className="text-3xl md:text-5xl hover:text-red-500 cursor-pointer p-2">&times;</button>
            </div>
                <textarea name="" value={"this is a simple text "}  className={`resize-none outline-none border-none bg-transparent shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2)] font-bold text-2xl md:text-4xl pt-2 ${hideScrollbar}`}></textarea>

                <textarea name="" value={text} className={`resize-none outline-none border-none bg-transparent flex-1 text-lg md:text-2xl mt-4 ${hideScrollbar}`}></textarea>

                <div className="flex justify-end hover:cursor-pointer pt-4">
                    <button className="border text-xl md:text-2xl font-bold border-black px-6 py-2 md:px-10 md:py-3 cursor-pointer hover:bg-[#5e8c6b] hover:text-white transition-all rounded-2x">Update</button>
                </div>

            </div>
    );
}
