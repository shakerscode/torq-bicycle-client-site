import React from 'react';
import perFect from '../../images/myqualityicon/perfection.png';
import quality  from '../../images/myqualityicon/badge.png';
import idea from '../../images/myqualityicon/idea.png';

const Quality = () => {
    const qualityData = [
        {id: 1, 
            tittle: 'Pixel Perfect', 
            desc: "Most common methods for designing websites that work well on desktop is responsive and adaptive design.",
            img: perFect,
        },
        {id: 2, 
            tittle: 'High Quality', 
            desc: "Most common methods for designing websites that work well on desktop is responsive and adaptive design.",
            img: quality,
        },
        {id: 3, 
            tittle: 'Awesome Idea', 
            desc: "Most common methods for designing websites that work well on desktop is responsive and adaptive design.",
            img: idea,
        }
    ]

    return (
        <div className='min-h-screen  grid grid-cols-1 md:grid-cols-3 gap-10 w-5/6 h-[500px] justify-center items-center mx-auto'>
            {
               qualityData.map(quality => 
                <div class="card bg-base-100 shadow-xl">
                    <img src={quality.img} alt="" className='w-36 mx-auto  bg-sky-200 border-2 border-solid border-orange-300 rounded-full'/>
                <div class="card-body">
                    <h2 class="text-xl font-semibold text-center">{quality.tittle}</h2>
                    <p className='text-center'>{quality.desc}</p>
                </div>
            </div>
                ) 
            }
           
        </div>
    );
};

export default Quality;