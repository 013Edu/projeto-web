import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const SectionImages = () => {
    const location = useLocation();
    const selectedImages = location.state || [];

    useEffect(() => {
        console.log(selectedImages);
    }, []);

    return (
        <div>
            <div className='flex items-center gap-10'>
                <Link to={"/"} className='text-6xl ml-20 cursor-pointer'>⇽</Link>
                <h2 className='text-3xl font-bold text-center my-20'>Imagens Selecionadas</h2>
            </div>
            <div className=" mx-10 grid grid-cols-2 gap-10 max-[930px]:grid-cols-1">
                {selectedImages.map((image, index) => (
                    <div key={index} className="relative">
                        <img src={image} alt={`Imagem ${index + 1}`} className="w-full h-96 max-[630px]:h-64 max-[500px]:h-40 hover:scale-105 transition-all rounded-3xl hover:shadow-2xl shadow-black" />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SectionImages;
