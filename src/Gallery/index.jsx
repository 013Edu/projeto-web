import React, { useState } from 'react';

const images = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
];

const Gallery = () => {
    const [likedImages, setLikedImages] = useState(new Array(images.length).fill(false));

    const toggleLike = (index) => {
        const updatedLikedImages = [...likedImages];
        updatedLikedImages[index] = !updatedLikedImages[index];
        setLikedImages(updatedLikedImages);
    };

    return (
        <>
            <div className='w-full bg-gray-300 h-32 flex items-center shadow-xl shadow-sky-900/20'>
                <img className='w-64 ml-10' src="/logo.png" alt="logo neo" />
            </div>
            <div className="container mx-auto mt-4 mb-10">
                <div className='w-full my-10 rounded-full'>
                    <h1 className="text-3xl font-bold mb-4 text-gray-700 text-center max-[600px]:text-2xl max-[500px]:text-xl max-[400px]:text-[18px]">Escolha oque mais agrada seus olhos!</h1>
                </div>
                <div className="grid grid-cols-2 gap-10 max-[930px]:grid-cols-1">
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <img src={image} alt={`Imagem ${index + 1}`} className="w-full h-96 max-[630px]:h-64 max-[500px]:h-40 hover:scale-105 transition-all rounded-3xl hover:shadow-2xl shadow-black" />
                            <button
                                onClick={() => toggleLike(index)}
                                className={`absolute top-2 right-2 p-2 rounded-full bg-white ${likedImages[index] ? 'text-red-500' : 'text-gray-500'
                                    }`}
                            >
                                {likedImages[index] ? '❤️' : '🤍'}
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default Gallery;
