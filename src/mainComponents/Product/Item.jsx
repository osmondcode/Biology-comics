import { FiArrowLeft, } from 'react-icons/fi'
import { IoMdStar } from 'react-icons/io'
import { BsDownload, BsBookmark, } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Item = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    // OTHER BOOKS DATA
        const books = [
            {
                name: 'Justice League',
                imageUrl: 'https://i.pinimg.com/236x/52/bf/5e/52bf5ec4b3f9d40c05cb6e7d67fcd5fe.jpg'
            },
            {
                name: "X-men'97",
                imageUrl: 'https://i.pinimg.com/474x/10/0e/24/100e24883532eda3b66e478cff61328c.jpg'
            },
            {
                name: 'Harley Quinn Sensational Origin',
                imageUrl: 'https://i.pinimg.com/236x/71/06/b2/7106b22b1af523589e24bb6d20524081.jpg'
            },
        ]
    // OTHER BOOKS DATA
    return (
        <section className="w-full min-h-screen flex items-center justify-center ">

            <div  className='2sm:w-[80%] w-[90%] min-h-[80vh] flex flex-col  items-start justify-start pt-[15vh] '>
                
                <button onClick={goBack} className='2sm:w-[30px] w-[25px] 2sm:h-[30px] h-[25px] rounded bg-white/10 flex items-center justify-center 2sm:text-[16px] text-[14px]'><FiArrowLeft/></button>

                {/* SELECTED ITEM  */}
                <div className='w-full my-[5vh] flex items-start justify-start md:gap-5 gap-3 2sm:px-5 px-3'>
                    <span className='lg:min-w-[190px] md:min-w-[150px] 2sm:min-w-[130px] sm:min-w-[110px] min-w-[90px] lg:h-[260px] md:h-[220px] 2sm:h-[190px] sm:h-[160px] h-[130px] bg-[#555] flex items-center justify-center overflow-hidden shadow-md shadow-white/10'>
                        <img src='https://i.pinimg.com/236x/df/86/36/df86360d78c84f76079824120c377d37.jpg' alt='items' className='w-full h-full object-cover'/>
                    </span>
                    <span className='lg:h-[240px] md:h-[200px] 2sm:h-[180px] sm:h-[150px] h-[110px] flex flex-col items-start justify-between lg:gap-5 md:gap-3 gap-1'>
                        <h2 className='lg:text-[25px] md:text-[20px] 2sm:text-[18px] text-[16px] font-semibold'>
                            Fantastic 4
                        </h2>

                        <h3 className='lg:text-[18px] md:text-[16px] 2sm:text-[14px] text-[12px] text-white/50'>Categories: Super-Hero</h3>

                        <p className='lg:text-[14px] md:text-[13px] 2sm:text-[12px] sm:text-[11px] text-[10px] text-white/50'>Lorem ipsum dolor sit amet consectetur. Diam risus dui blandit nascetur at et semper.</p>

                        <span className='flex items-center gap-1 text-[--yellowColor] lg:text-[18px] md:text-[16px] 2sm:text-[14px] sm:text-[12px] text-[11px]'>
                            <IoMdStar/>
                            <IoMdStar/>
                            <IoMdStar/>
                            <IoMdStar/>
                            <IoMdStar className='text-[#555]'/>
                        </span>

                        <span className='flex items-center lg:gap-8 md:gap-6 gap-4'>
                            <button className='lg:px-3 md:px-2.5 sm:px-2 px-1.5 py-1 lg:text-[14px] md:text-[12px] 2sm:text-[11px] text-[10px] bg-[--yellowColor] text-[--blackColor] rounded font-medium'>Read Now</button>
                            <button className='lg:text-[18px] md:text-[16px] 2sm:text-[14px] text-[12px] p-2 hover:bg-white/10 rounded'><BsDownload/></button>
                            <button className='lg:text-[18px] md:text-[16px] 2sm:text-[14px] text-[12px] p-2 hover:bg-white/10 rounded'><BsBookmark/></button>
                        </span>
                    </span>
                </div>
                {/* SELECTED ITEM  */}

                {/* ITEM DESCRIPTION */}
                <div className='w-full 2sm:min-h-[30vh] min-h-fit my-[5vh] flex sm:flex-row flex-col sm:items-center items-start justify-between gap-5'>
                    <span className='md:w-[400px] 2sm:w-[300px] sm:w-[250px] w-full flex flex-col md:gap-3 gap-1.5'>
                        <h2 className='lg:text-[20px] md:text-[18px] 2sm:text-[16px] text-[14px] font-medium'>Description</h2>
                        <p className='lg:text-[14px] md:text-[13px] 2sm:text-[11px] text-[10px]'>Lorem ipsum dolor sit amet consectetur. Diam risus dui blandit nascetur at et semper. Duis id ut sed blandit amet massa commodo interdum fringilla. Purus orci malesuada eu consequat mauris amet sit. Justo accumsan platea integer tellus tristique purus porttitor.</p>
                    </span>
                    <span>
                        <h2 className='lg:text-[18px] md:text-[16px] 2sm:text-[14px] text-[12px] font-medium md:mb-1 mb-0.5'>Language</h2>
                        <p className='lg:text-[14px] md:text-[12px] 2sm:text-[11px] text-[10px] lg:mb-4 mb-3'>Standard English (UK & USA)</p>

                        <h2 className='lg:text-[18px] md:text-[16px] 2sm:text-[14px] text-[12px] font-medium md:mb-1 mb-0.5'>Chapter</h2>
                        <p className='lg:text-[14px] md:text-[12px] 2sm:text-[11px] text-[10px]'>30 Chapters Updated</p>
                    </span>
                </div>
                {/* ITEM DESCRIPTION */}

                {/* OTHER BOOK SERIES */}
                <div className='w-full 2sm:min-h-[30vh] min-h-fit my-[10vh] flex flex-col items-center justify-center lg:gap-10 md:gap-8 2sm:gap-6 gap-4'>
                    <h2 className='capitalize lg:text-[22px] md:text-[20px] 2sm:text-[18px] text-[16px] font-semibold'>OTHER BOOKS IN THIS SERIES</h2>

                    <span className='flex items-center justify-center md:gap-7 gap-5 2sm:flex-nowrap flex-wrap gap-y-7'>
                        {books.map((book, i) => (
                            <div key={i} className=''>
                                <span className='lg:w-[160px] md:w-[140px] 2sm:w-[120px] w-[100px] lg:h-[220px] md:h-[200px] 2sm:h-[170px] h-[140px]  bg-[#555] flex items-center justify-center overflow-hidden shadow-md shadow-white/10 md:mb-3 mb-2 hover-image-filter duration-300'>
                                    <img src={book.imageUrl} alt={book.name} className='w-full h-full object-cover'/>
                                </span>
                                <h4 className='lg:text-[14px] md:text-[12px] text-[10px] md:mb-4 mb-2 '>{book.name}</h4>
                                <button  className='md:px-3 px-2 py-0.5 lg:text-[13px] md:text-[12px] text-[10px] text-[--blackColor] font-medium rounded bg-[--yellowColor]'>Get</button>
                            </div>
                        ))}
                    </span>
                </div>
                {/* OTHER BOOK SERIES */}
            </div>
        </section>
  )
}

export default Item